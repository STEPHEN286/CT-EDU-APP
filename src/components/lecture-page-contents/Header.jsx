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
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const { t } = useTranslation("navbar");
  
  return (
    <Disclosure
      as="nav" 
      className="bg-white border-b border-gray-200 fixed w-full top-0 z-50"
    >
      {({ open }) => (
        <>
        <div className="hidden sm:flex text-sm items-center justify-center px-2 lg:ml-6">
  
</div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="text-red-600 text-md md:text-xl font-bold">
                  CT EDU HUB
                </Link>
              </div>

              <div className="flex items-center justify-center  px-2 lg:ml-6 lg:justify-start">
                <div className="flex space-x-4 ">
                  <Link to="/" className="text-gray-700 hover:text-gray-600 px-3 py-2 text-sm lg:text-base font-medium">
                    {t("home")}
                  </Link>
                 

                </div>
              </div>

             
            

                
                
               <div className="flex gap-2 items-center">
                  <Link
                    to="/teach-on-ct/register-instructor"
                    className="bg-red-600 text-white  sm:block p-1 rounded   hover:bg-red-700 transition-colors"
                  >
                    {t("startTeachingToday")}
                  </Link>
  
                <p className=" block ">  <LanguageSwitcher /></p>
               </div>
              </div>

              
              
            </div>
        

        

   
        </>
      )}
    </Disclosure>
  );
}
