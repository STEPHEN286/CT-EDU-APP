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
import { useState } from "react";
import { courses } from "@/data";
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
import { Link as ScrolLink} from "react-scroll";
import { Link } from "react-router-dom";

export default function Header() {
  const { t } = useTranslation("navbar");
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const handleCategoryDropdown = () => {
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
  };
  return (
    <Disclosure as="nav" className="bg-white border-b border-gray-200">
      <div className="bg-white md:hidden  h-12 ">
        {/* <div className="flex  justify-between h-full items-center mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <ScrolLink to="teach-on-ct" className="text-gray-700 hover:text-gray-600">
            
            {t("teachOnCtEdu")}
          </ScrolLink>

         
        </div> */}
      </div>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between ">
          <div className="absolute inset-y-0 right-0 flex gap-2 items-center sm:hidden">
            <button className=" p-2 text-gray-600 rounded-full">
            <LanguageSwitcher />
          </button>
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-red-50 hover:text-gray-500">
              <span className="absolute -inset-0.5 pointer-events-none" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 " />
              <XMarkIcon aria-hidden="true" className="hidden size-6 " />
            </DisclosureButton>
          </div>

          <div className="flex shrink-0 items-center">
            <Link to="/" className="text-red-600 font-bold">
              CT EDU
            </Link>
          </div>
          <div>
            <div className="hidden md:flex ml-8 items-center space-x-6">
              {/* <CategoryDropdown /> */}

              <Link to="/" className="text-gray-700 hover:text-gray-600">
                {t("home")}
              </Link>
              <ScrolLink smooth={true} to="why-teach" className="text-gray-700 hover:text-gray-600">
                {t("whyTeach")}
              </ScrolLink>
              <ScrolLink to="how-it-works" className="text-gray-700 hover:text-gray-600">
                {t("howItworks")}
              </ScrolLink>
              <ScrolLink smooth to="tools" className="text-gray-700 hover:text-gray-600">
                {t("tools")}
              </ScrolLink>
              <ScrolLink smooth
                to="testimonials"
                className="text-gray-700 hover:text-gray-600"
              >
                {t("testimonials")}
              </ScrolLink>
              <ScrolLink
                to="requirement"
                className="text-gray-700 hover:text-gray-600"
              >
                {t("requirement")}
              </ScrolLink>
            </div>
          </div>
          {/* <SearchInput /> */}
          <div className="hidden md:flex gap-2 ">
            <button className=" p-2 text-gray-600 rounded-full hidden md:block lg:hidden">
              <SearchIcon />
            </button>

            <div className="flex gap-4 items-center">
              <ScrolLink to="/auth-login">{t("login")}</ScrolLink>
              <ScrolLink
                className="bg-red-600 text-white rounded-full p-2"
                to="/auth-login"
              >
                {t("startTeachingToday")}
              </ScrolLink>
            </div>
         

            <LanguageSwitcher />
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="md:hidden bg-white border-t border-gray-200 py-2">
          <div className="container mx-auto px-4">
            <div className="mb-4"></div>
            <nav className="space-y-3">
              <div>
               
              </div>
              
              
              <div className="pt-2 flex space-x-2">
                <button className="flex-1 bg-white text-red-600 border border-red-600 py-2 rounded-full hover:bg-blue-50 !rounded-button whitespace-nowrap cursor-pointer">
                  {t("login")}
                </button>
                <button className="flex-1 bg-red-600 text-white py-2 rounded-full hover:bg-red-700 !rounded-button whitespace-nowrap cursor-pointer">
                  {t('startTeachingToday')}
                </button>
              </div>
            </nav>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
