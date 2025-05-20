import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, ChevronRight } from "lucide-react"
import categoriesData from "@/data"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

const CategoryDropdown = () => {
  const {t} =  useTranslation('navbar')

  const navigate = useNavigate()

  return (
    <DropdownMenu className="">
     <DropdownMenuTrigger asChild className="mt-0 p-0">
  <Button variant="ghost" className="text-gray-700 hover:text-gray-600 flex items-center gap-1">
  <span>{t('categories')}</span> <ChevronDown className="h-4 w-4" />
  </Button>
</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 p-0 overflow-visible">
        {categoriesData.map((category) => (
          <div key={category.slug} className="relative group">
            <div
              onClick={() => navigate(`/categories/${category.slug}`)}
              className="flex justify-between items-center px-3 py-2 cursor-pointer hover:bg-muted transition"
            >
              <span>{category.name}</span>
              {category.subcategories.length > 0 && (
                <ChevronRight className="w-4 h-4" />
              )}
            </div>

            {category.subcategories.length > 0 && (
              <div className="absolute hidden left-full overflow-hidden top-0 ml-1 group-hover:block bg-background border rounded-md shadow-lg w-56 z-50">
                {category.subcategories.map((sub) => (
                  <div
                    key={sub.slug}
                    onClick={(e) => {
                      e.stopPropagation()
                      navigate(`/categories/${category.slug}/${sub.slug}`)
                    }}
                    className="px-3 py-2 hover:bg-muted cursor-pointer transition"
                  >
                    {sub.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default CategoryDropdown