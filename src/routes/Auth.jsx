import { Outlet } from "react-router-dom";

export default function AuthPage() {
  return (
    <div className="flex h-screen items-center justify-center px-6 md:p-10 overflow-hidden">
      <div className="w-full max-w-4xl max-h-screen ">
        <Outlet/>
      </div>
    </div>
  )
}