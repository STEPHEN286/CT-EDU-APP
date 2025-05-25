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
import SearchInput from "./SearchInput";
import { useState } from "react";
import { courses, navMenu} from "@/data";
import CategoryDropdown from "./CategoryDropdown";

import { Link } from "react-router-dom";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const { t } = useTranslation('navbar');
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const handleCategoryDropdown = () => {
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
  };
  return (
    <>
      <div className="h-[88px] md:h-[64px]" /> {/* Spacer for fixed header */}
      <Disclosure as="nav" className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
        {({ close }) => (
          <>
            {/* <div className="bg-white md:hidden h-12">
              <div className="flex justify-between h-full items-center mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <Link 
                  to="teach-on-ct" 
                  className="text-gray-700 hover:text-gray-600"
                  onClick={() => close()}
                >
                  {t('teachOnCtEdu')}
                </Link>

                <button 
                  className="p-2 text-gray-600 rounded-full"
                  onClick={() => close()}
                  
                >
                  <LanguageSwitcher />
                </button>
              </div>
            </div> */}
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 right-0 flex gap-2 items-center sm:hidden">
               
                  <button 
                    className="bg-gray-100 p-2 rounded-full"
                    onClick={() => close()}
                  >
                    <ShoppingCartIcon />
                  </button>
                  <button 
                  className="p-2 text-gray-600 rounded-full"
                  onClick={() => close()}
                  
                >
                  <LanguageSwitcher />
                </button>
                  <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-red-50 hover:text-gray-500">
                    <span className="absolute -inset-0.5 pointer-events-none" />
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon
                      aria-hidden="true"
                      className="block size-6"
                    />
                    <XMarkIcon
                      aria-hidden="true"
                      className="hidden size-6"
                    />
                  </DisclosureButton>
                </div>

                <div className="flex shrink-0 items-center">
                  <Link 
                    to='/' 
                    className="text-red-600 font-bold"
                    onClick={() => close()}
                  >
                    CT EDU HUB
                  </Link>
                </div>
                <div>
                  <div className="hidden sm:flex ml-8 items-center space-x-6">
                    <CategoryDropdown />
                    <Link  to="roadmap" className="text-gray-700 hover:text-gray-600">
                      {t('roadmap')}
                    </Link>
                    <Link
                      to="teach-on-ct"
                      className="text-gray-700 hover:text-gray-600"
                      onClick={() => close()}
                    >
                      {t('teachOnCtEdu')}
                    </Link>
                  </div>
                </div>
                <SearchInput />
                <div className="hidden sm:flex gap-2">
                  <button className="p-2 text-gray-600 rounded-full hidden md:block lg:hidden">
                    <SearchIcon />
                  </button>
                  <Link to="carts" className="p-2 text-gray-600 rounded-full">
                    <ShoppingCartIcon />
                  </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <button className="p-2 text-gray-600 rounded-full">
                        <User />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem asChild>
                        <Link to="/auth/signup">{t('signup')}</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/auth/login">{t('login')}</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

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
                      <button
                        onClick={() => handleCategoryDropdown()}
                        className="flex items-center justify-between w-full py-2 text-gray-700 !rounded-button whitespace-nowrap cursor-pointer"
                      >
                        <span>{t('categories')}</span>
                        <div>
                          {isCategoryDropdownOpen ? (
                            <ChevronUp className="text-xs" />
                          ) : (
                            <ChevronDown className="text-xs" />
                          )}
                        </div>
                      </button>
                      {isCategoryDropdownOpen && (
                        <div className="pl-4 mt-2 space-y-2">
                          {navMenu.slice(0, 5).map((category, index) => (
                            <Link
                              key={index}
                              to={`/categories/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                              className="block py-1 text-gray-700"
                              onClick={() => close()}
                            >
                              {category.title}
                            </Link>
                          ))}
                          <Link 
                            to="/categories" 
                            className="block py-1 text-blue-600"
                            onClick={() => close()}
                          >
                            {t('viewAllCategories')}
                          </Link>
                        </div>
                      )}
                    </div>
                    <a 
                      href="#" 
                      className="block py-2 text-gray-700"
                      onClick={() => close()}
                    >
                      Business
                    </a>
                    <a 
                      href="#" 
                      className="block py-2 text-gray-700"
                      onClick={() => close()}
                    >
                      Teach on LearnHub
                    </a>
                    <div className="pt-2 flex space-x-2">
                      <Link 
                        to="/auth/login" 
                        className="flex-1 bg-white text-red-600 border border-red-600 py-2 px-4 rounded-full hover:bg-red-50 transition-colors duration-200 text-center font-medium !rounded-button whitespace-nowrap cursor-pointer"
                        onClick={() => close()}
                      >
                        {t('login')}
                      </Link>
                      <Link 
                        to="/auth/signup" 
                        className="flex-1 bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 transition-colors duration-200 text-center font-medium !rounded-button whitespace-nowrap cursor-pointer"
                        onClick={() => close()}
                      >
                        {t('signup')}
                      </Link>
                    </div>
                  </nav>
                </div>
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </>
  );
}
