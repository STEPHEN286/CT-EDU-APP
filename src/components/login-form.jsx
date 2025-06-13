import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import usePostData from "@/hooks/useAuthOperation";
import { AlertCircle, Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "./ui/alert";

export function LoginForm() {
  const { mutate, isError, error, isPending } = usePostData("loginapi.php", "/",true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    mutate(data);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-0">
      <Card className="w-full max-w-full md:max-w-7xl border-none lg:p-5 bg-transparent">
        <CardContent className="grid lg:grid-cols-2 gap-0 p-0 w-full">
     

          <div className="hidden lg:block">
            <div className="h-[500px] flex flex-col justify-center  relative">
              <img
                src="https://res.cloudinary.com/disgj6wx5/image/upload/v1749112592/z5yaigfj78s8agoqtz9l.jpg"
                alt="login image"
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 w-full p-4 md:p-6 h-full flex flex-col justify-center items-center">
          {
                isError && error && (
                  <Alert variant="destructive" className="">
                    <AlertCircle className="h-3 w-3" />
                    <AlertDescription className="text-xs">{error.message}</AlertDescription>
                  </Alert>
                )
              }
            <div className="text-center mb-4">
              <h1 className="text-xl font-bold text-gray-900">Welcome back!</h1>
              <p className="text-gray-600 text-sm">Log in to resume your learning experience</p>
            </div>

            <div className="flex lg:flex-col gap-2 lg:hidden">
              <Button variant="outline" type="button" className="flex-1 h-9 shadow-none border hover:bg-gray-50">
                <img src="https://res.cloudinary.com/disgj6wx5/image/upload/v1749113366/faeo6hrk2sh3oaylleux.svg" alt="google" className="w-5 h-5"/>
              </Button>

              <Button variant="outline" type="button" className="flex-1 h-9 shadow-none border hover:bg-gray-50">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
              </Button>

              <Button variant="outline" type="button" className="flex-1 h-9 shadow-none border hover:bg-gray-50">
                <svg className="w-5 h-5" fill="#1877F2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
              </Button>
            </div>

            <div className="hidden lg:block">
              <div className="grid grid-cols-3 gap-2">
                <Button variant="outline" type="button" className="h-9 shadow-none border hover:bg-gray-50">
                  <img src="https://res.cloudinary.com/disgj6wx5/image/upload/v1749113366/faeo6hrk2sh3oaylleux.svg" alt="google" className="w-5 h-5 mr-2"/>
                  <span className="text-sm">Google</span>
                </Button>

                <Button variant="outline" type="button" className="h-9 shadow-none border hover:bg-gray-50">
                  <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                  <span className="text-sm">Apple</span>
                </Button>

                <Button variant="outline" type="button" className="h-9 shadow-none border hover:bg-gray-50">
                  <svg className="w-5 h-5 mr-2" fill="#1877F2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                  <span className="text-sm">Facebook</span>
                </Button>
              </div>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-2 bg-white text-gray-500">Or continue with email</span>
                </div>
              </div>
            </div>

            <div className="grid gap-3 w-full">
              <div>
                <Label htmlFor="email" className="text-xs">Email</Label>
                <Input
                  id="email"
                  type="email"
                  className="mt-1 h-9 shadow-none border text-sm"
                  {...register("email", {
                    required: "email required",
                    pattern: {value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: "Invalid email"},
                  })}
                />
                {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <Label htmlFor="password" className="text-xs">Password</Label>
                <Input
                  id="password"
                  type="password"
                  className="mt-1 h-9 shadow-none border text-sm"
                  {...register("password", {
                    required: "password required",
                    minLength: {value: 6, message: "Min 6 characters"},
                  })}
                />
                {errors.password && <p className="text-xs text-red-600 mt-1">{errors.password.message}</p>}
              </div>
            </div>

            <Button
              type="submit"
              disabled={isPending}
              className="w-full bg-red-600 hover:bg-red-700 shadow-none h-9 text-sm mt-4"
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Logging in...
                </>
              ) : "Login"}
            </Button>

            <div className="space-y-2 text-center text-xs">
              <p className="text-gray-500">
                By continuing, you agree to our{" "}
                <a href="#" className="text-red-600 hover:text-red-700">Terms</a>{" "}
                and{" "}
                <a href="#" className="text-red-600 hover:text-red-700">Privacy Policy</a>
              </p>

              <p>
                Don't have an account?{" "}
                <Link to="/auth/signup" className="text-red-600 hover:text-red-700 font-medium">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
