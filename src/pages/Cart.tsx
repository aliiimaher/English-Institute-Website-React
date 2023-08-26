import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import Notif from "../components/Notif";
import "../styles/pages/Cart.scss";
import Loading from "../components/Loading";
import dangerSvg from "../assets/Pic/Cart/DangerSvg.svg";
import paymentSvg from "../assets/Pic/Cart/PaymentSvg.svg";
import priceSvg from "../assets/Pic/Cart/PriceSvg.svg";
import discountSvg from "../assets/Pic/Cart/DiscountSvg.svg";
import SuccessNotify from "../components/SuccessNotify";
import ErrorNotify from "../components/ErrorNotify";
// import for rendering orders
import CardH from "../components/CardH";

import Course from "../interfaces/Course";
import axios from "axios";

interface DiscountFormData {
  discountcode: string;
}

function Cart() {
  const [notif, setNotif] = useState(false);
  const { register, handleSubmit, watch } = useForm<DiscountFormData>();
  const [finalPrice2, setFinalPrice2] = useState(0);
  const [discount2, setDiscount2] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);
  // list of orders
  const [orders, setOrders] = useState<Course[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const shouldShowReloadNotif = localStorage.getItem("showReloadNotif");
    if (shouldShowReloadNotif === "true") {
      setNotif(true); // Show the notification
      SuccessNotify({ text: "کد تخفیف با موفقیت اعمال شد" });
      localStorage.removeItem("showReloadNotif"); // Remove the value from localStorage
    }
  }, []);

  const header = {
    "Content-Type": "application/json",
    Authorization: "Token " + window.localStorage.getItem("token"),
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/cart/", { headers: header })
      .then((response) => {
        setOrders(response.data.course);
        setTotalPrice(response.data.price);
        setFinalPrice2(response.data.final_price);
        setDiscount2(response.data.discount_price);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    return () => {
      setLoading(false);
    };
  }, []);

  function removeCourse(course_id: number) {
    axios.delete(`http://localhost:8000/cart/add/${course_id}/`, {
      headers: {
        Authorization: "Token " + window.localStorage.getItem("token"),
      },
    });
  }

  const handleRemoveCard = (index: number) => {
    const updatedOrders = [...orders];
    updatedOrders.splice(index, 1);
    setOrders(updatedOrders);
    // handleCalculateTotalPrice();
    window.location.reload();
  };

  // var price = 0;
  // var discount = 0;
  // const [finalPrice, setFinalPrice] = useState(0);

  // ========== handle for calculation total price ==========
  // const handleCalculateTotalPrice = () => {
  //   price = 0;
  //   orders.forEach((item) => {
  //     let temp = persianToEnglishNumerals(item.price.toString());
  //     price += Number(temp);
  //     // price += item.price;
  //   });
  //   setFinalPrice(price - discount);
  // };

  // useEffect(() => {
  //   handleCalculateTotalPrice();
  // }, [orders]);

  const handlePayment = () => {
    setLoading(true);
    axios.put(
      "http://localhost:8000/cart/pay/",
      {},
      {
        headers: {
          Authorization: "Token " + window.localStorage.getItem("token"),
        },
      }
    )
    .then(()=>{
      localStorage.setItem("showReloadNotif", "true");
      window.location.href = "/panel-my-courses";
    })
    .catch((error)=>{
      setLoading(false)
      setNotif(true)
      ErrorNotify({ text: error.response.data.error });
    })
  };

  const applyDiscount = () => {
    axios
      .post(
        "http://localhost:8000/cart/discount/",
        {
          discountcode: watch("discountcode"),
        },
        {
          headers: {
            Authorization: "Token " + window.localStorage.getItem("token"),
          },
        }
      )
      .then(() => {
        localStorage.setItem("showReloadNotif", "true");
        window.location.reload();
      })
      .catch((error) => {
        setNotif(true);
        ErrorNotify({ text: error.response.data.error });
      });
  };

  return (
    <>
      {loading && <Loading />}
      {notif && <Notif />}
      <div className="cart-page-container">
        <div className="cart-page-right-hand">
          <div className="cart-page-right-hand-danger-box">
            <img src={dangerSvg} style={{ marginLeft: "24px" }} />
            لطفا در خرید خود دقت کنید، هزینه پرداختی به هیچ عنوان قابل استرداد
            نمی باشد!
          </div>

          <div>
            {orders.length !== 0 ? (
              <>
                {orders.map((course, index) => (
                  <CardH
                    key={index}
                    courseTitle={course.title}
                    courseDescription={course.short_description}
                    picture={course.course_image}
                    coursePrice={course.price.toString()}
                    courseTeacher={course.teacher.fullname}
                    onClick={() => {
                      handleRemoveCard(index), removeCourse(course.id);
                    }}
                  />
                ))}
              </>
            ) : (
              <div className="panel-no-course">
                <img src={dangerSvg} style={{ marginLeft: "8px" }} />
                هیچ دوره‌ای پیدا نشد :(
              </div>
            )}
          </div>
        </div>
        <div className="cart-page-left-hand">
          <div className="cart-page-left-hand-discount-part">
            <form onSubmit={handleSubmit(applyDiscount)}>
              <input
                type="text"
                placeholder="کد تخفیف"
                className="cart-page-left-hand-input-box"
                {...register("discountcode")}
              />
              <button className="cart-page-left-hand-btn">اعمال کد</button>
            </form>
          </div>
          <div className="cart-page-left-hand-payment-part">
            <div className="cart-page-left-hand-payment-part-table">
              <table style={{ width: "80%" }}>
                <tr>
                  <th>
                    <img src={priceSvg} style={{ marginLeft: "8px" }} />
                    <div style={{ fontFamily: "KalamehThin" }}>مبلغ کل:</div>
                  </th>
                  <td>
                    <strong>{totalPrice} تومان</strong>
                  </td>
                </tr>

                <tr>
                  <th>
                    <img src={discountSvg} style={{ marginLeft: "8px" }} />
                    <div style={{ fontFamily: "KalamehThin" }}>تخفیف:</div>
                  </th>
                  <td>
                    <strong>{discount2} تومان</strong>
                  </td>
                </tr>
              </table>
            </div>
            <hr style={{ margin: "0px", background: "#EAD2B7" }} />
            <div className="cart-page-left-hand-payment-part-price">
              مبلغ قابل پرداخت : {finalPrice2} تومان
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                text="ثبت و پرداخت نهایی"
                size="large"
                icon={paymentSvg}
                onclick={handlePayment}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
