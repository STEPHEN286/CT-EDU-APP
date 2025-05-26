// import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { navMenu } from "@/data";
import { useNavigate } from "react-router-dom";
import { toSlug } from "@/utils/actions";
import { NavigationMenuTrigger } from "./ui/navigation-menu";

const slugify = (text) =>
  text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

const CategoryDropdown = () => {
  const { t } = useTranslation("navbar");
  // const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const containerWidth = activeCategory ? "w-[600px]" : "w-[300px]";
const navigate = useNavigate()
const handleCategoryClick = (category) => {
  navigate(`/categories/${toSlug(category.title)}`);
  console.log("isActive" , category.slug)
  setDropdownOpen(false);
};

const handleModuleClick = (category, module) => {
  navigate(`/categories/${toSlug(category.title)}/${toSlug(module.name)}`);
  setDropdownOpen(false);
};

  return (
    <div
      className="relative"
      onMouseLeave={() => {
        setDropdownOpen(false);
        setActiveCategory(null);
      }}
    >
   
      <NavigationMenuTrigger onMouseEnter={() => setDropdownOpen(true)} className="text-black hover:text-red-600">Categories</NavigationMenuTrigger>
      {/* Dropdown Panel */}
      {dropdownOpen && (
        <div
          className={`absolute top-full left-0 z-50 bg-white border shadow-xl flex transition-all duration-200 ease-in-out ${containerWidth}`}
        >
          {/* Left Column (Always shown while dropdownOpen) */}
          <div className="w-[300px] border-r max-h-[400px] overflow-y-auto">
            {navMenu.map((category) => (
              <div
              onClick={() => handleCategoryClick(category)}
                key={category.title}
                onMouseEnter={() => setActiveCategory(category)}
                className={`px-4 py-3 cursor-pointer hover:bg-purple-50 ${
                  activeCategory?.title === category.title
                    ? "bg-gray-100 text-red-600"
                    : ""
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>{category.title}</span>
                  {category.modules.length > 0 && <ChevronRight className="w-4 h-4" />}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column (Only shown when hovering a category) */}
          {activeCategory && (
            <div className="w-[300px] p-3 max-h-[400px] overflow-y-auto">
              {activeCategory.modules.map((sub) => (
                <div
                  key={sub.code}
                  onClick={() =>
                    navigate(
                      `/categories/${slugify(activeCategory.title)}/${slugify(sub.name)}`
                    )
                  }
                  className="px-3 py-2 rounded hover:bg-gray-100 hover:text-red-600 cursor-pointer"
                >
                  <div className="font-medium">{sub.name}</div>
                  <div className="text-xs text-gray-500">{sub.topics}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
