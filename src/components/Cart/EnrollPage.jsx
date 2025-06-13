import { useState } from "react";
import {
  CreditCard,
  ArrowLeft,
  ShoppingCart,
  ShieldCheck,
  CircleCheck,
} from "lucide-react";
import { containerClass } from "@/utils/css-utils";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { PAYSTACK } from "@/utils/constants";


export default function EnrollPage() {
  const [step, setStep] = useState("payment");
  
  // Sample course data - this would typically come from props or context
  const course = {
    id: 1,
    title: "AI Tracks",
    instructor: "Laura Green",
    image: "/placeholder.svg?height=150&width=250",
    price: 26999,
    discount: 2573.5
  };

  const subtotal = course.price;
  const discount = course.discount;
  const total = subtotal - discount;

  const componentProps = {
    email: "user@example.com",
    amount: 20000 *100,
    currency: "GHS",
    publicKey: PAYSTACK,
    text: "Pay Now",
    onSuccess: () =>
 setStep("confirmation"),
    onClose: () => alert("are you sure ....."),
  };

 


  return (
    <div className={`${containerClass} mx-auto px-4 py-6 bg-white min-h-screen`}>
    
      <div className="flex justify-center mb-8">
       
        <div className="flex items-center">
          <div className={`rounded-full bg-red-600 p-1.5 flex items-center justify-center relative`}>
            <CreditCard className="h-4 w-4 text-white" />
            <div className="text-red-600 font-bold absolute mt-12 text-xs whitespace-nowrap">
              {step === "payment" && "Payment Method"}
            </div>
          </div>
          <div className={`h-0.5 w-16 md:w-32 ${step === "confirmation" ? "bg-red-600" : "bg-gray-300"}`}></div>
        </div>
        <div className="flex items-center">
          <div className={`rounded-full ${step === "confirmation" ? "bg-red-600" : "bg-gray-300"} p-1.5 flex items-center justify-center relative`}>
            <CircleCheck className="h-4 w-4 text-white" />
            <div className="text-red-600 font-bold absolute  mt-12 text-xs whitespace-nowrap">
              {step === "confirmation" && "Confirmation"}
            </div>
          </div>
        </div>
      </div>

      {step === "payment" ? (
        <div className="max-w-3xl mx-auto">
          {/* Payment Method */}
          <div className="p-4 mb-6">
            <div className="flex flex-col items-center mb-6">
              <h3 className="text-lg font-medium text-black">
                Confirm Payment
              </h3>
              <small>Please review your order details and confirm payment</small>
            </div>

            {/* Course Details */}
            <div className="mb-8 p-4 border rounded-lg">
              <div className="flex gap-4">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-24 h-24 object-cover rounded"
                />
                <div>
                  <h4 className="font-medium text-lg">{course.title}</h4>

                  <p className="text-sm text-gray-600">by {course.instructor}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t pt-8">
              <div className="space-y-2">
                <p className="font-bold text-2xl">Order Summary</p>
                <div className="flex justify-between text-black">
                  <span>Subtotal </span>
                  <span>€{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-black">
                  <span>Discount</span>
                  <span>-€{discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-black border-t font-bold text-lg pt-2">
                  <span>Total</span>
                  <span>€{total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <PaystackButton {...componentProps}  className="w-full bg-red-600 hover:bg-red-700 text-white py-4 mt-6 rounded"/>

            <div className="flex justify-center space-x-4 mt-4 text-xs text-gray-800">
              <div className="flex items-center">
                <ShoppingCart className="h-4 w-4 mr-1" />
                <span>Secure Checkout</span>
              </div>
              <div className="flex items-center">
                <span>PCI DSS Compliant</span>
              </div>
              <div className="flex items-center">
                <ShieldCheck className="h-4 w-4 mr-1" />
                <span>256-bit SSL Encryption</span>
              </div>
            </div>

            <div className="mt-4">
              {/* <button
                className="text-red-600 hover:text-red-700 flex items-center"
                onClick={() => setStep("cart")}
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to cart
              </button> */}
            </div>
          </div>
        </div>
      ) : (
        // Confirmation Step
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-green-50 border border-green-200 mx-auto justify-center rounded-lg p-8 mb-6">
            <img src="https://res.cloudinary.com/disgj6wx5/image/upload/v1749098253/dmty2csnvncd4xtmrjum.png" alt="" className="w-16 h-16 object-contain mx-auto" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Payment Successful!
            </h2>
          </div>
          <Link
            onClick={() => {
              setStep("cart");
            }}
            to="/profile"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded"
          >
            Continue Learning
          </Link>
        </div>
      )}
    </div>
  );
}