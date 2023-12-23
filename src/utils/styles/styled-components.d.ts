import { Theme } from "@mui/material";


declare module "styled-components" {
    /* eslint-disable @typescript-eslint/no-empty-interface */
    declare interface DefaultTheme extends Theme {}
}
