import {
  Button,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  LanguageIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ArrowBigDownIcon,
  ChevronDown,
  ChevronUp,
  Languages,
  SearchIcon,
  ShoppingCartIcon,
  User,
} from "lucide-react";
import SearchInput from "./SearchInput";
import { useState } from "react";
import { courses } from "@/data";
import CategoryDropdown from "./CategoryDropdown";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

export default function Header() {
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const handleCategoryDropdown = () => {
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
  };
  return (
    <Disclosure as="nav" className="bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between ">
          <div className="absolute inset-y-0 right-0 flex gap-2 items-center sm:hidden">
            <button className="bg-gray-100 p-2 text-muted rounded-full">
              <ShoppingCartIcon />
            </button>
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>

          <div className="flex shrink-0 items-center">
            <h1 className="text-red-600 font-bold">CT EDU</h1>
          </div>
          <div>
            <div className="hidden md:flex ml-8 items-center space-x-6">
              <CategoryDropdown />

              <a href="#" className="text-gray-700 hover:text-gray-600">
                Roadmap
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-600">
                Teach on CT EDU
              </a>
            </div>
          </div>
          <SearchInput />
          <div className="hidden md:flex gap-2 ">
            <button className=" p-2 text-gray-600 rounded-full hidden md:block lg:hidden">
              <SearchIcon />
            </button>
            <button className=" p-2 text-gray-600 rounded-full">
              <ShoppingCartIcon />
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <button className="  p-2 text-gray-600 rounded-full">
                  <User />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                
                <DropdownMenuItem>Register</DropdownMenuItem>
                <DropdownMenuItem asChild><Link to='/auth-login'>Login</Link></DropdownMenuItem>
               
              </DropdownMenuContent>
            </DropdownMenu>

            <button className=" p-2 text-gray-600 rounded-full">
              <Languages />
            </button>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="md:hidden bg-white border-t border-gray-200 py-2">
          <div className="container mx-auto px-4">
            <div className="mb-4"></div>
            <nav className="space-y-3">
              <div>
                <button
                  onClick={() => handleCategoryDropdown()}
                  className="flex  items-center justify-between w-full py-2 text-gray-700 !rounded-button whitespace-nowrap cursor-pointer"
                >
                  <span>Categories</span>

                  <div>
                    {isCategoryDropdownOpen ? (
                      <ChevronUp className=" text-xs" />
                    ) : (
                      <ChevronDown className=" text-xs" />
                    )}
                  </div>
                </button>
                {isCategoryDropdownOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {courses.slice(0, 5).map((category, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block py-1 text-gray-700"
                      >
                        {category.title}
                      </a>
                    ))}
                    <a href="#" className="block py-1 text-blue-600">
                      View all categories
                    </a>
                  </div>
                )}
              </div>
              <a href="#" className="block py-2 text-gray-700">
                Business
              </a>
              <a href="#" className="block py-2 text-gray-700">
                Teach on LearnHub
              </a>
              <a href="#" className="block py-2 text-gray-700">
                <i className="fas fa-shopping-cart mr-2"></i> Shopping Cart
              </a>
              <div className="pt-2 flex space-x-2">
                <button className="flex-1 bg-white text-red-600 border border-red-600 py-2 rounded-full hover:bg-blue-50 !rounded-button whitespace-nowrap cursor-pointer">
                  Log in
                </button>
                <button className="flex-1 bg-red-600 text-white py-2 rounded-full hover:bg-red-700 !rounded-button whitespace-nowrap cursor-pointer">
                  Sign up
                </button>
              </div>
            </nav>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
