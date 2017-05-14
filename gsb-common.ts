import * as definitions from "./index";
import {GsbButtonColorStyle, GsbButtonSizeStyle} from "./index";
import {View} from "ui/core/view";
import {Property} from "tns-core-modules/ui/core/properties";

export class GsbButtonBase extends View implements definitions.GsbButton {

    public static tapEvent = "tap";

    colorStyle: GsbButtonColorStyle;

    sizeStyle: GsbButtonSizeStyle;

    constructor() {
        super();
    }

    onLoaded() {
        super.onLoaded()
    }
}

export const colorStyleProperty =
    new Property<GsbButtonBase, GsbButtonColorStyle>(
        {
            name: "colorStyle",
            defaultValue: "auto"
        });
colorStyleProperty.register(GsbButtonBase);


export const sizeStyleProperty =
    new Property<GsbButtonBase, GsbButtonSizeStyle>(
        {
            name: "sizeStyle",
            defaultValue: "standard",
            affectsLayout: true
        });
sizeStyleProperty.register(GsbButtonBase);