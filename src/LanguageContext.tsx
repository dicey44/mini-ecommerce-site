import { createContext, useState } from "react";
import type { ReactNode } from "react";

interface LanguageContextType {
    language: "en" | "ja";
    changeLanguage: (lang: "en" | "ja") => void;
}

interface LanguageProviderProps {
    children: ReactNode
}

export const LanguageContext = createContext<LanguageContextType>({
    language: "en",
    changeLanguage: () => {},
})

export function LanguageProvider({ children }: LanguageProviderProps) {
    const [language, setLanguage] = useState<"en" | "ja">("en");

    function changeLanguage(lang: "en" | "ja") {
        lang === "ja" ? setLanguage("ja") : setLanguage("en");
    }

    return (
        <LanguageContext.Provider
            value={{
                language, changeLanguage
            }}
        >
            {children}
        </LanguageContext.Provider>
    )
}