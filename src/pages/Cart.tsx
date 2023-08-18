import { useEffect, useState } from "react";

import Button from "../components/Button";

import "../styles/pages/Cart.scss";

import dangerSvg from "../assets/Pic/Cart/DangerSvg.svg";
import paymentSvg from "../assets/Pic/Cart/PaymentSvg.svg";
import priceSvg from "../assets/Pic/Cart/PriceSvg.svg";
import discountSvg from "../assets/Pic/Cart/DiscountSvg.svg";

// import for rendering orders
import CardH from "../components/CardH";

import persianToEnglishNumerals from "../helper/PersianToEnglishFunction";
import Course from "../interfaces/Course";
import axios from "axios";

function Cart() {
  // list of orders
  const [orders, setOrders] = useState<Course[]>([]);

  const header = {
    "Content-Type": "application/json",
    Authorization: "Token " + window.localStorage.getItem("token"),
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/cart/", { headers: header })
      .then((response) => {
        setOrders(response.data.course);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  
  const handleRemoveCard = (index: number) => {
    const updatedOrders = [...orders];
    updatedOrders.splice(index, 1);
    setOrders(updatedOrders);
    // handleCalculateTotalPrice();
  };

  var price = 0;
  var discount = 5000;
  const [finalPrice, setFinalPrice] = useState(0);

  // ========== handle for calculation total price ==========
  // const handleCalculateTotalPrice = () => {
  //   price = 0;
  //   orders.forEach((item) => {
  //     let temp = persianToEnglishNumerals(
  //       item.coursePrice.replace("تومان", "").replace(",", "")
  //     );
  //     price += Number(temp);
  //   });
  //   setFinalPrice(price - discount);
  // };

  useEffect(() => {
    // handleCalculateTotalPrice();
  }, [orders]);

  return (
    <>
      <div className="cart-page-container">
        <div className="cart-page-right-hand">
          <div className="cart-page-right-hand-danger-box">
            <img src={dangerSvg} style={{ marginLeft: "24px" }} />
            لطفا در خرید خود دقت کنید، هزینه پرداختی به هیچ عنوان قابل استرداد
            نمی باشد!
          </div>

          {/* here test */}
          <div>
            {orders !== null ? (
              <>
                {orders.map((item, index) => (
                  <CardH
                    key={index}
                    courseTitle={item.title}
                    courseDescription={item.short_description}
                    picture={item.course_image}
                    coursePrice={item.price.toString()}
                    courseTeacher={item.teacher.fullname}
                    onClick={() => handleRemoveCard(index)}
                    background="no"
                  />
                ))}
                {console.log(orders)}
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
            <input
              type="text"
              placeholder="کد تخفیف"
              className="cart-page-left-hand-input-box"
            />
            <button className="cart-page-left-hand-btn">اعمال کد</button>
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
                    <strong>{finalPrice + discount} تومان</strong>
                  </td>
                </tr>

                <tr>
                  <th>
                    <img src={discountSvg} style={{ marginLeft: "8px" }} />
                    <div style={{ fontFamily: "KalamehThin" }}>تخفیف:</div>
                  </th>
                  <td>
                    <strong>{discount} تومان</strong>
                  </td>
                </tr>
              </table>
            </div>
            <hr style={{ margin: "0px", background: "#EAD2B7" }} />
            <div className="cart-page-left-hand-payment-part-price">
              مبلغ قابل پرداخت : {finalPrice} تومان
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
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
