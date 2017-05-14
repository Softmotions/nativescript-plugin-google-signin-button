import {View} from "ui/core/view";

export type GsbButtonColorStyle = "dark" | "light" | "auto"

export type GsbButtonSizeStyle = "standard" | "wide" | "icon"

export declare class GsbButton extends View {

    colorStyle: GsbButtonColorStyle;

    sizeStyle: GsbButtonSizeStyle;

}