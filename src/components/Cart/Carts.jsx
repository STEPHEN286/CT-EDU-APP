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

  const subtotal = cartItems.reduce((sum, course) => sum + course.price, 0);
  const discount = 2573.5;
  const total = subtotal - discount;

  const handleApplyCoupon = () => {
    if (couponCode.trim() !== "") {
      setCouponApplied(true);
    }
  };

  const handleRemoveItem = (courseId) => {
    setCartItems(cartItems.filter((item) => item.id !== courseId));
  };

  return (
    <div className={`${containerClass} mx-auto px-4 py-6 bg-white min-h-screen`}>
      {/* Progress Indicator */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center">
        <div className="rounded-full bg-red-600 p-1.5 flex items-center justify-center relative ">
            <ShoppingCart className="h-4 w-4 text-white" />
            <div className="text-red-600 font-bold absolute mt-12 text-xs whitespace-nowrap">
              {step === "cart" && "Shopping Cart"}
            </div>
          </div>
          <div
            className={`h-0.5 w-16 md:w-32 ${
              step === "payment" || step === "confirmation" ? "bg-red-600" : "bg-gray-300"
            }`}
          ></div>
        </div>
        <div className="flex items-center">
          <div
            className={`rounded-full ${
              step === "payment" || step === "confirmation" ? "bg-red-600" : "bg-gray-300"
            } p-1.5 flex items-center justify-center relative`}
          >
            <CreditCard className="h-4 w-4 text-white" />
            <div className="text-red-600 font-bold absolute mt-12 text-xs whitespace-nowrap">
              {step === "payment" && "Payment Method"}
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
            <div className="text-red-600 font-bold absolute  mt-12 text-xs whitespace-nowrap">
              {step === "confirmation" && "Confirmation"}
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
          <div className="bg-green-50 border   border-green-200 mx-auto justify-center rounded-lg p-8 mb-6">
           
            <img src="https://res.cloudinary.com/disgj6wx5/image/upload/v1749098253/dmty2csnvncd4xtmrjum.png" alt="" className="w-16 h-16 object-contain mx-auto" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Payment Successful!
            </h2>
        
          
          </div>
          <Link
            onClick={() => {
              setStep("cart");
              setCartItems([]);
              
            }}

            to="/profile"

            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded"
          >
            Continue Learning
          </Link>
        </div>
      )}

      {/* Recommended Courses */}
      {step === "cart" && (
        <div className="mt-12">
          <h2 className="text-lg font-bold text-black mb-4">
            You might also like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {recommendedCourses.map((course) => (
              <div
                key={course.id}
                className="border border-red-600 rounded-lg overflow-hidden"
              >
                <div className="relative h-32">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt="Course"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <div className="flex items-center mb-3">
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
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden">
                      <img
                        src="/placeholder.svg"
                        alt="Instructor"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button className="bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1 rounded">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}