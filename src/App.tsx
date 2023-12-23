import Home from "./pages/Home.tsx";
import { GlobalStyle } from "./utils/styles/GlobalStyle.tsx";
import { AppProvider } from "./utils/providers/AppProvider.tsx";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { MUI_THEME } from "./utils/constants/constants.commom.ts";

const App = () => {
    return (
        <AppProvider>
            <SCThemeProvider theme={MUI_THEME}>
                <MuiThemeProvider theme={MUI_THEME}>
                    <Home />
                    <GlobalStyle />
                </MuiThemeProvider>
            </SCThemeProvider>
        </AppProvider>
    );
};

export default App;
