import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Search, ShoppingCart, User, Menu, Heart } from "lucide-react";
import { navMenu } from "@/data";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { containerClass } from "@/utils/css-utils";
import CategoryDropdown from "./CategoryDropdown";
import LanguageSelector from "./language-selector/LanguageSelector";

export default function Header() {
  const { t } = useTranslation("navbar");
  const [isOpen, setIsOpen] = useState(false);

  const isSessionValid = sessionStorage.getItem("session");

  const handleCloseSheet = () => {
    setIsOpen(false);
  };
  return (
    <nav className="sticky top-0 z-50 w-full text-sm border-b bg-white ">
      <div className={`${containerClass}`}>
        <div className="flex h-16 items-center  justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-md md:text-xl font-bold text-red-600 ">
                CT EDU HUB
              </span>
            </Link>
          </div>

          {/* Desktop  */}
          <div className="hidden  lg:flex    items-center ">
            <NavigationMenu className="">
              <NavigationMenuList className=" !flex gap-4">
                <NavigationMenuItem>
                  <CategoryDropdown />
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/roadmaps"
                    className="text-black hover:text-red-600 font-medium"
                  >
                    Roadmap
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/teach-on-ct"
                    className="text-black hover:text-red-600 font-medium"
                  >
                    {t("teachOnCtEdu")}
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xs ">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search courses, modules, topics..."
                className="pl-10 pr-4 w-full border-gray-200 focus:border-red-500 focus:ring-red-500"
              />
            </div>
          </div>

          {/* sheey */}
          <div className="flex items-center space-x-4">
            {/* Wishlist */}
            <Link to="/wishlist">
              <Button variant="ghost" size="sm" className="relative">
                <Heart className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-600 text-xs flex items-center justify-center">
                  0
                </Badge>
              </Button>
            </Link>

            {/* Cart */}
            <Link to="/carts">
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-600 text-xs flex items-center justify-center">
                  2
                </Badge>
              </Button>
            </Link>

            {/* User Menu */}
            {isSessionValid ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="hidden md:block" asChild>
                  <Button variant="ghost" size="sm">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link to="/profile">My Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/">My Learning</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="">My Cart</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="n">WishList</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden md:flex gap-3">
                <Link
                  className=" bg-red-600 h-auto font-medium text-white p-1 rounded "
                  to="/auth/login"
                >
                  {t("login")}
                </Link>
                <Link
                  className="border  border-red-600 text-red-600   p-1 flex items-center rounded h-auto"
                  to="/auth/signup"
                >
                  {t("signup")}
                </Link>
              </div>
            )}

            {/* Language Switcher */}
            {/* <LanguageSwitcher /> */}
            <LanguageSelector />

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 overflow-auto py-5">
                <SheetHeader>
                  <SheetTitle className="flex items-center space-x-2">
                    <span>CT EDU HUB</span>
                  </SheetTitle>
                </SheetHeader>
                {!isSessionValid ? <div className="border-t pt-6 flex items-center gap-3 px-5">
                    <Link
                      to="/auth/login"
                      className="block py-3 text-center  w-full bg-red-600 hover:bg-red-700 text-white"
                      onClick={handleCloseSheet}
                    >
                      {t("login")}
                    </Link>

                    <Link
                      to="/auth/signup"
                      className="w-full  block text-center border-red-600 border py-3 text-red-600 hover:bg-red-50"
                      onClick={handleCloseSheet}
                    >
                      {t("signup")}
                    </Link>
                  </div> :
               <div className="px-5 border-b space-y-5 pb-2 ">
               <Link
                      to="/profile"
                      onClick={handleCloseSheet}
                      className="block text-lg font-medium text-black hover:text-red-600"
                    >
                      My Profile
                    </Link>
               <Link
                      to="/profile"
                      onClick={handleCloseSheet}
                      className="block text-lg font-medium text-black hover:text-red-600"
                    >
                      My Learning
                    </Link>
               <Link
                      to="/profile"
                      onClick={handleCloseSheet}
                      className="block text-lg font-medium text-black hover:text-red-600"
                    >
                      My Cart
                    </Link>
               </div>}
                <div className="mt-6 space-y-6">
              
                  <div className="space-y-4 px-5">
                    <Link
                      to="/courses"
                      onClick={handleCloseSheet}
                      className="block text-lg font-medium text-black hover:text-red-600"
                    >
                      All Courses
                    </Link>
                    <Link
                      to="/roadmap"
                      onClick={handleCloseSheet}
                      className="block text-lg font-medium text-black hover:text-red-600"
                    >
                      Roadmap
                    </Link>
                    <Link
                      to="/teach-on-ct"
                      onClick={handleCloseSheet}
                      className="block text-lg font-medium text-black hover:text-red-600"
                    >
                      {t("teachOnCtEdu")}
                    </Link>

                    <div className="border-t py-2">
                      <h3 className="text-lg font-medium text-black mb-3">
                        Categories
                      </h3>
                      {navMenu.slice(0, 8).map((category) => (
                        <Link
                          key={category.slug}
                          to={`/categories/${category.slug}`}
                          onClick={handleCloseSheet}
                          className="flex items-center p-2 rounded-lg hover:bg-red-50"
                        >
                          <div className="flex-1">
                            <span className="text-sm font-medium">
                              {category.title}
                            </span>
                            <p className="text-xs text-gray-500">
                              {category.modules.length} modules
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
