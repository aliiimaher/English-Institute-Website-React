import { useEffect, useState } from "react";

import Button from "../components/Button";

import "../styles/pages/Cart.scss";

import dangerSvg from "../assets/Pic/Cart/DangerSvg.svg";
import paymentSvg from "../assets/Pic/Cart/PaymentSvg.svg";
import priceSvg from "../assets/Pic/Cart/PriceSvg.svg";
import discountSvg from "../assets/Pic/Cart/DiscountSvg.svg";

import englishCourseSvg from "../assets/Pic/learn-english-design-cardh.png";

// import for rendering orders
import CardHData from "../interfaces/CardHData";
import CardH from "../components/CardH";

import persianToEnglishNumerals from "../helper/PersianToEnglishFunction";

function Cart() {
  // list of orders
  const [orders, setOrders] = useState<CardHData[]>([
    {
      picture: englishCourseSvg,
      courseTitle: "آموزش مکالمه زبان انگلیسی",
      courseDescription: "در سرتاسر دنیا، چه شرق چه ...",
      courseTeacher: "یوسف اسدی",
      coursePrice: "۲۰,۰۰۰ تومان",
      background: "no",
    },
    {
      picture: englishCourseSvg,
      courseTitle: "آموزش مکالمه زبان انگلیسی",
      courseDescription: "در سرتاسر دنیا، چه شرق چه ...",
      courseTeacher: "یوسف اسدی",
      coursePrice: "۲۰,۰۰۰ تومان",
      background: "no",
    },
    {
      picture: englishCourseSvg,
      courseTitle: "آموزش مکالمه زبان انگلیسی",
      courseDescription: "در سرتاسر دنیا، چه شرق چه ...",
      courseTeacher: "یوسف اسدی",
      coursePrice: "۲۰,۰۰۰ تومان",
      background: "no",
    },
  ]);

  // ========== handle for removing card ==========
  const handleRemoveCard = (index: number) => {
    const updatedOrders = [...orders];
    updatedOrders.splice(index, 1);
    setOrders(updatedOrders);
    handleCalculateTotalPrice();
  };

  var price = 0;
  var discount = 5000;
  const [finalPrice, setFinalPrice] = useState(0);

  // ========== handle for calculation total price ==========
  const handleCalculateTotalPrice = () => {
    price = 0;
    orders.forEach((item) => {
      let temp = persianToEnglishNumerals(
        item.coursePrice.replace("تومان", "").replace(",", "")
      );
      price += Number(temp);
    });
    setFinalPrice(price - discount);
  };

  useEffect(() => {
    handleCalculateTotalPrice();
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
            {orders.map((item, index) => (
              <CardH
                key={index}
                picture={item.picture}
                courseTitle={item.courseTitle}
                courseDescription={item.courseDescription}
                courseTeacher={item.courseTeacher}
                coursePrice={item.coursePrice}
                onClick={() => handleRemoveCard(index)}
                background={item.background}
              />
            ))}
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
