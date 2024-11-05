"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import Button from "./Button";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    React.useEffect(() => {
        console.log("Current theme:", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <div className="flex w-full justify-end p-2">
            <Button onClick={toggleTheme} className="border border-[var(--text)] rounded-md p-2">
                <SunIcon className="h-[1.2rem] w-[1.2rem] transition-all dark:hidden" />
                <MoonIcon className="h-[1.2rem] w-[1.2rem] transition-all hidden dark:flex" />
            </Button>
        </div>
    );
}
