import { createContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({children}) {
    const themes = ["light", "dark"];
    const [theme, setTheme] = useState(themes[0]);

    const setCssPropertyValue = (propertyName, value) => {
        document.documentElement.style.setProperty(
            "--" + propertyName,
            value,
        )
    }

    const getThemePropertyValue = (theme, propertyName) => {
        var calculatedProperty = '--' + theme + "-" + propertyName;
        return getComputedStyle(document.documentElement).getPropertyValue(calculatedProperty);
    }

    const toggleDarkmode = () => {
        var nextThemeValue = themes[(themes.indexOf(theme) + 1) % themes.length];
        setTheme(nextThemeValue);

        setCssPropertyValue("primary-color", getThemePropertyValue(theme, "primary-color"));
        setCssPropertyValue("secondary-color", getThemePropertyValue(theme, "secondary-color"));
        setCssPropertyValue("font-color", getThemePropertyValue(theme, "font-color"));
    }

    return(
        <ThemeContext.Provider value={{toggleDarkmode}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;