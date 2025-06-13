"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe, ChevronDown, Check } from "lucide-react"

const languages = [
  { code: "en", name: "English", flag: "🇺🇸", nativeName: "English" },
  { code: "es", name: "Español", flag: "🇪🇸", nativeName: "Español" },
  { code: "fr", name: "Français", flag: "🇫🇷", nativeName: "Français" },
  { code: "de", name: "Deutsch", flag: "🇩🇪", nativeName: "Deutsch" },
  { code: "pt", name: "Português", flag: "🇧🇷", nativeName: "Português" },
]

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline text-sm font-medium">{selectedLanguage.name}</span>
          <span className="sm:hidden text-lg">{selectedLanguage.flag}</span>
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52">
        <div className="px-2 py-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Choose Language</div>
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            className="flex items-center justify-between space-x-3 cursor-pointer hover:bg-red-50 focus:bg-red-50"
            onClick={() => setSelectedLanguage(language)}
          >
            <div className="flex items-center space-x-3">
              <span className="text-lg">{language.flag}</span>
              <div className="flex flex-col">
                <span className="font-medium">{language.nativeName}</span>
                {language.name !== language.nativeName && (
                  <span className="text-xs text-gray-500">{language.name}</span>
                )}
              </div>
            </div>
            {selectedLanguage.code === language.code && <Check className="h-4 w-4 text-red-600" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
