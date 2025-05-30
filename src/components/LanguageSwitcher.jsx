import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { languages } from "@/data";
import { Globe, Languages } from "lucide-react";
import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

//   const languages = [
//     { code: 'en', name: 'English' },
//     { code: 'fr', name: 'Français' },
//   ];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === i18n.language)?.code || 'ENG';
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="p-1 flex items-center gap-2 text-gray-600 rounded border outline-0 border-gray-200 hover:border-gray-300">
        
          <Globe  size={15}/>
          <span className="tex-xs">{getCurrentLanguage()}</span>
        
      </DropdownMenuTrigger>
      <DropdownMenuContent>
       
        {/* <DropdownMenuSeparator /> */}
        {languages.map((lang) => (
          <DropdownMenuItem key={lang.code} asChild>
            <button onClick={() => changeLanguage(lang.code)}>{lang.name}</button>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
