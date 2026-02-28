import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

export default function PaymentSuccess() {
  const [params] = useSearchParams();

  useEffect(() => {
    const reference = params.get("reference");

    const verify = async () => {
      try {
        const token = localStorage.getItem("token");

        // 1️⃣ verify payment
        const verifyRes = await axios.get(
          `https://yati-perfume-backend.onrender.com/api/payment/verify/${reference}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!verifyRes.data.success) {
          alert("Payment not verified");
          return;
        }

        // 2️⃣ create order
        await axios.post(
          "https://yati-perfume-backend.onrender.com/api/order/create",
          { reference },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        alert("Order placed successfully 🎉");

      } catch (err) {
        console.log(err);
        alert("Something went wrong");
      }
    };

    if (reference) verify();
  }, []);

  return <h1>Confirming your order...</h1>;
}