// import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { toSlug } from "@/utils/actions";
import { NavigationMenuTrigger } from "./ui/navigation-menu";
import { useFetchCourses, useFetchModules } from "@/hooks/useModulesActions";



const CategoryDropdown = () => {
  const { data: courses } = useFetchCourses();
  const { data: modules } = useFetchModules();
  const { t } = useTranslation("navbar");
  const [activeCategory, setActiveCategory] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const containerWidth = activeCategory ? "w-[600px]" : "w-[300px]";
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/categories/${toSlug(category.title)}`);
    console.log("isActive", category.slug);
    setDropdownOpen(false);
  };

  const handleModuleClick = (category, module) => {
    navigate(`/categories/${toSlug(category.title)}/${toSlug(module.name)}`);
    setDropdownOpen(false);
  };

  // Get filtered modules for the active category
  const getFilteredModules = (courseId) => {
    return modules?.filter((module) => module.course_id === courseId) || [];
  };

  return (
    <div
      className="relative"
      onMouseLeave={() => {
        setDropdownOpen(false);
        setActiveCategory(null);
      }}
    >
      <NavigationMenuTrigger 
        onMouseEnter={() => setDropdownOpen(true)} 
        className="text-black hover:text-red-600"
      >
        Modules
      </NavigationMenuTrigger>

      {/* Dropdown Panel */}
      {dropdownOpen && (
        <div
          className={`absolute top-full left-0 z-50 bg-white border shadow-xl flex transition-all duration-200 ease-in-out ${containerWidth}`}
        >
          {/* Left Column (Always shown while dropdownOpen) */}
          <div className="w-[300px] border-r max-h-[400px] overflow-y-auto">
            {courses?.map((category) => {
              const filteredModules = getFilteredModules(category.id);
              
              return (
                <div
                  key={category.id} // Use category.id instead of category.title for better uniqueness
                  onClick={() => handleCategoryClick(category)}
                  onMouseEnter={() => setActiveCategory({ ...category, modules: filteredModules })}
                  className={`px-4 py-3 cursor-pointer hover:bg-purple-50 ${
                    activeCategory?.id === category.id
                      ? "bg-gray-100 text-red-600"
                      : ""
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span>{category.title}</span>
                    {filteredModules.length > 0 && <ChevronRight className="w-4 h-4" />}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column (Only shown when hovering a category) */}
          {activeCategory && (
            <div className="w-[300px] p-3 max-h-[400px] overflow-y-auto">
              {activeCategory.modules?.length > 0 ? (
                activeCategory.modules.map((module) => (
                  <div
                    key={module.id}
                    onClick={() => handleModuleClick(activeCategory, module)}
                    className="px-3 py-2 rounded hover:bg-gray-100 hover:text-red-600 cursor-pointer"
                  >
                    <div className="font-medium">{module.name}</div>
                    <div className="text-xs text-gray-500">
                      {module.description || 'No description available'}
                    </div>
                  </div>
                ))
              ) : (
                <div className="px-3 py-2 text-gray-500 text-sm">
                  No modules available for this course
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;