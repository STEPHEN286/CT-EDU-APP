import { useState } from "react";
import {
  ShoppingCart,
  CreditCard,
  Star,
  ArrowLeft,
  Award,
  Layers,
  ChevronRight,
  ChevronLeft,
  Trash2,
  ChevronsLeft,
  ShieldCheck,
  CircleCheck,
} from "lucide-react";
import { containerClass } from "@/utils/css-utils";
import { Link } from "react-router-dom";
import { PaystackButton, usePaystackPayment } from "react-paystack";
import { PAYSTACK } from "@/utils/constants";
import { coursesData } from "@/data";
import CourseCard from "../Cards/CourseCard";

const courses = [
  {
    id: 1,
    title: "AI Tracks",
    price: 7000,
    rating: 4.9,
    reviews: 1347,
    instructor: "Laura Green",
    image: "/placeholder.svg?height=100&width=150",
    tag: "HOT",
    features: ["Intermediate", "Lifetime Access Included"],
  },
  {
    id: 2,
    title: "Specialized AI Training Tracks",
    price: 10999,
    rating: 4.1,
    reviews: 2279,
    instructor: "George Smith",
    image: "/placeholder.svg?height=100&width=150",
    tag: "Bestseller",
    features: ["Advanced", "Lifetime Access Included"],
  },
  {
    id: 3,
    title: "Manufacturing Analytics",
    price: 9000,
    rating: 4.7,
    reviews: 944,
    instructor: "Emily Belgrade",
    image: "/placeholder.svg?height=100&width=150",
    tag: "Popular",
    features: ["Intermediate", "Lifetime Access Included"],
  },
];

const recommendedCourses = [
  {
    id: 4,
    image: "/placeholder.svg?height=100&width=150",
    rating: 5,
  },
  {
    id: 5,
    image: "/placeholder.svg?height=100&width=150",
    rating: 5,
  },
  {
    id: 6,
    image: "/placeholder.svg?height=100&width=150",
    rating: 4.5,
  },
];

export default function Cart() {
  const [step, setStep] = useState("cart");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [cartItems, setCartItems] = useState(courses);
  // const [paymentReference, setPaymentReference] = useState(null);

  const subtotal = cartItems.reduce((sum, course) => sum + course.price, 0);
  const discount = 2573.5;
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

  const handleApplyCoupon = () => {
    if (couponCode.trim() !== "") {
      setCouponApplied(true);
    }
  };

  const handleRemoveItem = (courseId) => {
    setCartItems(cartItems.filter((item) => item.id !== courseId));
  };

  const handleBackToCart = () => {
    setStep("cart");
  };

  const handleBackToPayment = () => {
    setStep("payment");
  };

  return (
    <div
      className={`${containerClass} mx-auto px-4 py-6 bg-white min-h-screen`}
    >
      {/* Progress Indicator */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center">
          <div className="rounded-full bg-red-600 p-1.5 flex items-center justify-center relative">
            <ShoppingCart className="h-4 w-4 text-white" />
            <div className="text-red-600 font-bold absolute mt-12 text-xs whitespace-nowrap">
              Shopping Cart
            </div>
          </div>
          <div
            className={`h-0.5 w-16 md:w-32 ${
              step === "payment" || step === "confirmation"
                ? "bg-red-600"
                : "bg-gray-300"
            }`}
          ></div>
        </div>
        <div className="flex items-center">
          <div
            className={`rounded-full ${
              step === "payment" || step === "confirmation"
                ? "bg-red-600"
                : "bg-gray-300"
            } p-1.5 flex items-center justify-center relative`}
          >
            <CreditCard className="h-4 w-4 text-white" />
            <div className="text-red-600 font-bold absolute mt-12 text-xs whitespace-nowrap">
              Payment Method
            </div>
          </div>
          <div
            className={`h-0.5 w-16 md:w-32 ${
              step === "confirmation" ? "bg-red-600" : "bg-gray-300"
            }`}
          ></div>
        </div>
        <div className="flex items-center">
          <div
            className={`rounded-full ${
              step === "confirmation" ? "bg-red-600" : "bg-gray-300"
            } p-1.5 flex items-center justify-center relative`}
          >
            <CircleCheck className="h-4 w-4 text-white" />
            <div className="text-red-600 font-bold absolute mt-12 text-xs whitespace-nowrap">
              Confirmation
            </div>
          </div>
        </div>
      </div>

      {step === "cart" ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {/* Back to Shopping Link */}
            <div className="mb-4 flex justify-between items-center font-bold text-sm">
              <span>Your Cart ({cartItems.length || 0} courses)</span>
              <button className="flex items-center text-red-600 hover:text-red-700">
                <span className="flex">
                  <ChevronsLeft size={20} />
                </span>
                view Courses
              </button>
            </div>

            {/* Cart Items */}
            <div className="space-y-3">
              {cartItems.map((course) => (
                <div
                  key={course.id}
                  className="bg-white shadow rounded-lg overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row justify-between">
                    <div className="flex flex-col sm:flex-row">
                      <div className="relative w-full sm:w-36 h-32">
                        <img
                          src="https://res.cloudinary.com/disgj6wx5/image/upload/c_thumb,w_200,g_face/v1749078083/xskf7vcro3lmzjjzhrvi.jpg"
                          alt={course.title}
                          className="object-cover w-full h-full"
                        />
                        {course.tag && (
                          <div className="absolute top-2 left-2 bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded">
                            {course.tag}
                          </div>
                        )}
                      </div>
                      <div className="p-3 flex-1 text-black">
                        <div className="flex justify-between items-start md:pr-8">
                          <h3 className="text-base font-bold">
                            {course.title}
                          </h3>
                          <div className="block md:hidden text-base font-bold">
                            €{course.price.toLocaleString()}
                          </div>
                        </div>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < Math.floor(course.rating)
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                          <span className="ml-1 text-xs">
                            {course.rating} ({course.reviews} reviews)
                          </span>
                        </div>
                        <div className="flex items-center mt-2">
                          <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-xs font-semibold">
                              {course.instructor?.charAt(0)}
                            </span>
                          </div>
                          <span className="ml-2 text-xs">
                            {course.instructor}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <div className="flex items-center text-xs">
                            <Layers className="w-3 h-3 text-gray-500 mr-1" />
                            <span>12 Lessons</span>
                          </div>
                          <div className="flex items-center text-xs">
                            <Award className="w-3 h-3 text-gray-500 mr-1" />
                            <span>Certificate</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between md:items-center p-3">
                      <div className="hidden sm:block text-base font-bold">
                        €{course.price.toLocaleString()}
                      </div>
                      <button
                        onClick={() => handleRemoveItem(course.id)}
                        className="p-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                      >
                        remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow p-4 h-fit sticky top-4">
            <h2 className="text-lg font-bold mb-3">Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>€{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Discount</span>
                <span>-€{discount.toFixed(2)}</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-bold text-sm">
                <span>Total</span>
                <span>€{total.toFixed(2)}</span>
              </div>

              <div>
                <label className="block mb-2 text-sm">Apply Coupon Code</label>
                <div className="flex h-10 border items-center rounded">
                  <input
                    placeholder="Enter code"
                    className="flex-1 px-3 py-2 text-xs border-0 focus:outline-none focus:ring-1 focus:ring-red-600"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <button
                    onClick={handleApplyCoupon}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 h-8 text-xs rounded"
                  >
                    Apply
                  </button>
                </div>
                {couponApplied && (
                  <p className="text-green-500 text-xs mt-1">
                    Coupon "{couponCode}" applied!
                  </p>
                )}
              </div>

              <button
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-xs rounded"
                onClick={() => setStep("payment")}
                disabled={cartItems.length === 0}
              >
                Proceed to payment
              </button>

              <div className="flex justify-between text-[10px] text-gray-500 mt-3">
                <div className="flex items-center">
                  <ShoppingCart className="h-3 w-3 mr-1" />
                  <span>Secure Checkout</span>
                </div>
                <div className="flex items-center">
                  <span>Satisfaction Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : step === "payment" ? (
        <div className="max-w-3xl mx-auto">
          {/* Back Button */}
          <button
            onClick={handleBackToCart}
            className="flex items-center text-red-600 hover:text-red-700 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Cart
          </button>

          {/* Payment Method */}
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
        </div>
      ) : (
        // Confirmation Step
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-green-50 border border-green-200 mx-auto justify-center rounded-lg p-8 mb-6">
            <img
              src="https://res.cloudinary.com/disgj6wx5/image/upload/v1749098253/dmty2csnvncd4xtmrjum.png"
              alt="Success"
              className="w-16 h-16 object-contain mx-auto"
            />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Payment Successful!
            </h2>
            {/* {paymentReference && (
              <p className="text-sm text-gray-600 mb-4">
                Transaction Reference: {paymentReference.reference}
              </p>
            )} */}
            <p className="text-gray-600">
              Your payment has been processed successfully. You now have access
              to your courses.
            </p>
          </div>

          <div className="space-y-4">
            <Link
              to="/profile"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded"
            >
              Continue Browsing Courses
            </Link>

            <div className="text-sm text-gray-500">
              <p>You will receive a confirmation email shortly.</p>
            </div>
          </div>
        </div>
      )}

      {/* Recommended Courses */}
      {step === "cart" && (
        <div className="mt-12">
          <h2 className="text-lg font-bold text-black mb-4">
            You might also like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {coursesData.slice(0,6).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
