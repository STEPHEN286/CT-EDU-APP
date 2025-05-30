import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./ui/input-otp";
import usePostData from "@/hooks/useAuthOperation";
import { useForm } from "react-hook-form";

export default function VerifyEmail() {
  const { mutate } = usePostData("verifyapi.php");
  const { register, handleSubmit } = useForm({
    defaultValues: {
      otp: ""
    }
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <div className="border max-w-md p-10 flex flex-col items-center gap-4">
        <div className="flex items-center gap-3">
         <p className="text-gray-400 text-md"> <EnvelopeIcon  className=" font-medium w-5 h-5" /></p>
          <h1>Enter Verification Code</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
          <InputOTP maxLength={6} {...register("otp", { required: true })}>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTP>
          <Button type="submit">Verify</Button>
        </form>
      </div>
    </div>
  );
}
