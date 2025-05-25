// components/pricing/Pricing.tsx
import { Check } from "lucide-react";
// import { individualPlans } from "@/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { containerClass } from "@/utils/css-utils";

const trainingPlans = [
  {
    name: "Standard",
    duration: "2 Weeks",
    description: "Core Training Modules",
    features: [
      "Certification",
      "Access to Online Resources",
      "Basic Support",
      "Course Materials"
    ],
    priceRange: "€7,000 - €10,999",
    buttonText: "Enroll Now",
    buttonVariant: "outline",
    popular: false,
    bgColor: "bg-white"
  },
  {
    name: "Premium",
    duration: "4 Weeks",
    description: "Comprehensive Training Modules",
    features: [
      "Certification",
      "Access to Online Resources",
      "Priority Support",
      "Advanced Course Materials",
      "1-on-1 Mentoring"
    ],
    priceRange: "€9,000 - €15,000",
    buttonText: "Enroll Now",
    buttonVariant: "default",
    popular: true,
    bgColor: "bg-red-50"
  },
  {
    name: "Custom",
    duration: "Flexible duration",
    description: "Tailored for your organization",
    features: [
      "Content tailored to specific needs",
      "Personalized consultations",
      "Hands-on workshops",
      "Enterprise Support",
      "Custom Implementation"
    ],
    priceRange: "Contact Sales",
    buttonText: "Contact Sales",
    buttonVariant: "outline",
    popular: false,
    bgColor: "bg-white"
  },
];

export default function Pricing() {
  return (
    <section className={`${containerClass} py-16 bg-gradient-to-b from-white to-red-50`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 ">Choose Your Learning Plan</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Flexible options for every learner — start for free or unlock more with our Personal and Pro plans.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {trainingPlans.slice(0, 3).map((plan, index) => (
          <Card 
            key={index} 
            className={`relative ${plan.popular ? "border-red-500 shadow-lg" : "border-gray-200"} ${plan.bgColor} hover:shadow-xl transition-all duration-300`}
          >
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-500">
                Most Popular
              </Badge>
            )}
            <CardHeader className="text-center">
              <CardTitle className={`text-2xl ${plan.popular ? "text-red-600" : "text-gray-800"}`}>
                {plan.name}
              </CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="mt-4">
                <p className="text-4xl font-bold text-red-600">
                  {typeof plan.price === "number" ? `$${plan.priceRange}` : plan.priceRange}
                </p>
                {plan.duration && <span className="text-muted-foreground">{plan.duration}</span>}
              </div>
              {plan.savings && (
                <Badge variant="secondary" className="mt-2 bg-red-100 text-red-600">
                  {plan.savings}
                </Badge>
              )}
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <span className="border border-red-500 rounded-full p-1">
                      <Check className="h-4 w-4 text-red-500 flex-shrink-0" />
                    </span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.limitations && (
                <div className="pt-4 border-t border-red-100">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Limitations:</p>
                  <ul className="space-y-1">
                    {plan.limitations.map((limitation, limitIndex) => (
                      <li key={limitIndex} className="text-sm text-muted-foreground">
                        • {limitation}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <Button 
                className={`w-full ${plan.popular ? "bg-red-600 hover:bg-red-700" : "border-red-600 text-red-600 hover:bg-red-50"}`} 
                variant={plan.buttonVariant} 
                size="lg"
              >
                {plan.buttonText}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
