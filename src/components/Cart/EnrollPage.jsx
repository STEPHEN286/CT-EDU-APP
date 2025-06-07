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

export default function EnrollPage() {
  const [step, setStep] = useState("payment");
  const subtotal = 26999;
  const discount = 2573.5;
  const total = subtotal - discount;

  return (
    <div className={`${containerClass} mx-auto px-4 py-6 bg-white min-h-screen`}>
      {/* Progress Indicator */}
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
                Payment Details
              </h3>
              <small>Please select your preferred payment method and enter your details</small>
            </div>

            <div className="space-y-3 grid grid-cols-2 md:grid-cols-4 items-center mb-6">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  value="mastercard"
                  defaultChecked
                  className="mr-2"
                />
                <label className="flex items-center">
                  <div className="border border-red-600 rounded p-1.5 w-32">
                    <img
                      src="https://res.cloudinary.com/disgj6wx5/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1749094693/xq2zev9fpc9gnfbxcvgt.png"
                      alt="MasterCard"
                      className="w-full h-auto"
                    />
                  </div>
                </label>
              </div>

              <div className="flex items-center">
                <input type="radio" name="payment" value="visa" className="mr-2" />
                <label className="flex items-center">
                  <div className="border border-red-600 rounded p-1.5 w-32">
                    <img
                      src="https://res.cloudinary.com/disgj6wx5/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1749094693/sytk9xxommprabbnd0vr.png"
                      alt="Visa"
                      className="w-full h-auto"
                    />
                  </div>
                </label>
              </div>

              <div className="flex items-center">
                <input type="radio" name="payment" value="paypal" className="mr-2" />
                <label className="flex items-center">
                  <div className="border border-red-600 rounded p-1.5 w-32">
                    <img
                      src="https://res.cloudinary.com/disgj6wx5/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1749094692/pglwn6bbvnvzpw67h7oz.png"
                      alt="PayPal"
                      className="w-full h-auto"
                    />
                  </div>
                </label>
              </div>

              <div className="flex items-center">
                <input type="radio" name="payment" value="applepay" className="mr-2" />
                <label className="flex items-center">
                  <div className="border border-red-600 rounded p-1.5 w-32 flex items-center justify-center">
                    <span className="text-xs text-gray-500">Apple Pay</span>
                  </div>
                </label>
              </div>
            </div>

            <div className="mt-8 pt-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="cardNumber" className="text-black block mb-2">
                    Card Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    className="w-full p-3 border rounded bg-white text-black"
                  />
                </div>

                <div>
                  <label htmlFor="cardholderName" className="text-black block mb-2">
                    Cardholder Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="cardholderName"
                    placeholder="Jessica Anthony"
                    className="w-full p-3 border rounded bg-white text-black"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2">
                    <label className="text-black block mb-2">
                      Expiry Date <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <select className="p-3 border rounded bg-white text-black">
                        <option>Month</option>
                        {[...Array(12)].map((_, i) => (
                          <option key={i} value={i + 1}>
                            {String(i + 1).padStart(2, "0")}
                          </option>
                        ))}
                      </select>
                      <select className="p-3 border rounded bg-white text-black">
                        <option>Year</option>
                        {[...Array(10)].map((_, i) => (
                          <option key={i} value={new Date().getFullYear() + i}>
                            {new Date().getFullYear() + i}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cvv" className="text-black block mb-2">
                      CVV <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="cvv"
                      placeholder="123"
                      className="w-full p-3 border rounded bg-white text-black"
                      maxLength={4}
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="saveDetails"
                    className="rounded"
                  />
                  <label
                    htmlFor="saveDetails"
                    className="text-sm text-black cursor-pointer"
                  >
                    Save my details for future purchases
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t pt-8">
              <div className="space-y-2">
                <div className="flex justify-between text-black">
                  <span>Subtotal (3 items)</span>
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

            <button 
              onClick={() => setStep("confirmation")} 
              className="w-full bg-red-600 hover:bg-red-700 text-white py-4 mt-6 rounded"
            >
              Confirm Payment
            </button>

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
              <button
                className="text-red-600 hover:text-red-700 flex items-center"
                onClick={() => setStep("cart")}
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to cart
              </button>
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