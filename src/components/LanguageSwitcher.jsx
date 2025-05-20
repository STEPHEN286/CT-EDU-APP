
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { languages } from "@/data";
import { Languages } from "lucide-react";
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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button className="p-2 text-gray-600 rounded-full">
          <Languages />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {languages.map((lang) => (
          <DropdownMenuItem key={lang.code} asChild>
            <button onClick={() => changeLanguage(lang.code)}>{lang.name}</button>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
