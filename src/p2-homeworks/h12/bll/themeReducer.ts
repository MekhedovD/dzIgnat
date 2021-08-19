export type ThemesInitState = {
    themes: string
}

type SetDarkThemeAC = {
    type: "SET-DARK-THEME"
}

type SetRedThemeAC = {
    type: "SET-RED-THEME"
}

type SetSomeThemeAC = {
    type: "SET-SOME-THEME"
}

export type ThemeACType = SetDarkThemeAC | SetRedThemeAC | SetSomeThemeAC;

const initState = {
    themes: "some"
};

export const themeReducer = (state:ThemesInitState = initState, action: ThemeACType): ThemesInitState => { // fix any
    switch (action.type) {
        case "SET-DARK-THEME": {
            return {themes: "dark"};
        }
        case "SET-RED-THEME": {
            return {themes: "red"}
        }
        case "SET-SOME-THEME": {
            return {themes: "some"}
        }
        default: return state;
    }
};

export const changeThemeC = (): any => {}; // fix any