import { SvgIconProps } from "@mui/material";

export type Page ={
    caption: string;
    link?: string;
    startIcon?: React.ElementType<SvgIconProps>;
    children?: Page[];
};