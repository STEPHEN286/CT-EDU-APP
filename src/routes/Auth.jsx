import { Outlet } from "react-router-dom";

export default function AuthPage() {
  return (
    <div className="flex h-screen items-center justify-center px-6 md:p-10 overflow-hidden">
      <div className=" mx-auto px-2 sm:px-4 ">
        <Outlet/>
      </div>
    </div>
  )
}