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
  ShoppingCart,
  ShoppingCartIcon,
  User,
} from "lucide-react";
import SearchInput from "../SearchInput";

import CategoryDropdown from "../CategoryDropdown";

// import { ScrolLink } from "react-router-dom";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link as ScrolLink } from "react-scroll";
import { Link } from "react-router-dom";

export default function Header() {
  const { t } = useTranslation("navbar");

  const navLinks = [
    { to: "why-teach", label: "whyTeach" },
    { to: "how-it-works", label: "howItworks" },
    { to: "tools", label: "tools" },
    { to: "testimonials", label: "testimonials" },
    { to: "requirement", label: "requirement" }
  ];

  return (
    <Disclosure
      as="nav" 
      className="bg-white border-b border-gray-200 fixed w-full top-0 z-50"
    >
      {({ open, close }) => (
        <>
        <div className="hidden sm:flex items-center justify-center px-2 lg:ml-6">
  
</div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="text-red-600 text-xl sm:text-2xl font-bold">
                  CT EDU HUB
                </Link>
              </div>

              <div className="hidden sm:flex items-center justify-center  px-2 lg:ml-6 lg:justify-start">
                <div className="flex space-x-4 ">
                  <Link to="/" className="text-gray-700 hover:text-gray-600 px-3 py-2 text-sm lg:text-base font-medium">
                    {t("home")}
                  </Link>
                  {navLinks.map((link) => (
                 
                    <ScrolLink
                      key={link.to}
                      smooth={true}
                      spy={true}
                      offset={-70}
                      to={link.to}
                      className=" hidden lg:block   text-gray-700 hover:text-gray-600 px-3 py-2 text-sm lg:text-base font-medium"
                      onClick={() => close()}
                    >
                      {t(link.label)}
                    </ScrolLink>
                  ))}

                  {/* <span><SearchInput /></span> */}
                </div>
              </div>

             
              <div className="hidden sm:flex items-center space-x-4 lg:space-x-6">
                <button className="p-2  text-gray-600 rounded-full  md:hidden">
                  <SearchIcon className="h-5 w-5" />
                </button>

                {/* <Link 
                  to="../auth/login"
                  className="text-gray-700 hidden border border-red-600 lg:block hover:text-gray-600 px-3 py-2 text-sm lg:text-base font-medium"
                >
                  {t("login")}
                </Link> */}
                
                <Link
                  to="/teach-on-ct/register-instructor"
                  className="bg-red-600 text-white  sm:block px-4 py-2 rounded-full text-sm lg:text-base font-medium hover:bg-red-700 transition-colors"
                >
                  {t("startTeachingToday")}
                </Link>

              <p className=" hidden lg:block ">  <LanguageSwitcher /></p>
              </div>

              
              <div className="flex items-center lg:hidden">
                <LanguageSwitcher />
                <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Mobile menu panel */}
          <DisclosurePanel className="">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => close()}
              >
                {t("home")}
              </Link>
              
               {navLinks.map((link) => (
                <ScrolLink
                  key={link.to}
                  smooth={true}
                  spy={true}
                  offset={-70}
                  to={link.to}
                  className="block px-3 py-2  rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => close()}
                >
                  {t(link.label)}
                </ScrolLink>
              ))} 

            </div>
          </DisclosurePanel>

      {/* <div className="hidden sm:flex justify-center space-x-4">
    {navLinks.map((link) => (
      <ScrolLink
        key={link.to}
        smooth={true}
        spy={true}
        offset={-70}
        to={link.to}
        className="text-gray-700 hover:text-gray-600 px-3 py-2 text-sm lg:text-base font-medium"
        onClick={() => close()}
      >
        {t(link.label)}
      </ScrolLink>
    ))}
  </div>  */}
        </>
      )}
    </Disclosure>
  );
}
