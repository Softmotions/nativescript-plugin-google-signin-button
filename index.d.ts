import {View} from "ui/core/view";

type GsbButtonColorStyle = "dark" | "light" | "auto"

type GsbButtonSizeStyle = "standard" | "wide" | "icon"

export declare class GsbButton extends View {

    colorStyle: GsbButtonColorStyle;

    sizeStyle: GsbButtonSizeStyle

}