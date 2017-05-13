import {colorStyleProperty, GsbButtonBase, sizeStyleProperty} from "./gsb-common";
import {GsbButtonColorStyle, GsbButtonSizeStyle} from "./index";

declare const com: any;
declare const android: any;


// https://developers.google.com/android/reference/com/google/android/gms/common/SignInButton.html#COLOR_AUTO
enum NativeColors {
    DARK = 0,
    LIGHT = 1,
    AUTO = 2
}

// https://developers.google.com/android/reference/com/google/android/gms/common/SignInButton.html#SIZE_ICON_ONLY
enum Sizes {
    STANDARD = 0,
    WIDE = 1,
    ICON_ONLY = 2
}

export class GsbButton extends GsbButtonBase {

    public static tapEvent = "tap";

    createNativeView(): Object {
        const btn = new com.google.android.gms.common.SignInButton(this._context);
        const me = new WeakRef(this);
        btn.setOnClickListener(new android.view.View.OnClickListener(
            {
                get owner() {
                    return me.get();
                },

                onClick: function (v) {
                    if (this.owner) {
                        this.owner._emit("tap");
                    }
                }
            }));

        return btn;
    }

    [colorStyleProperty.setNative](value: GsbButtonColorStyle) {
        switch (value) {
            case "dark":
                this.nativeView.setColorScheme(NativeColors.DARK);
                break;
            case "light":
                this.nativeView.setColorScheme(NativeColors.LIGHT);
                break;
            default:
                this.nativeView.setColorScheme(NativeColors.AUTO);
                break;
        }
    }

    [sizeStyleProperty.setNative](value: GsbButtonSizeStyle) {
        switch (value) {
            case "wide":
                this.nativeView.setSize(Sizes.WIDE);
                break;
            case "icon":
                this.nativeView.setSize(Sizes.ICON_ONLY);
                break;
            default:
                this.nativeView.setSize(Sizes.STANDARD);
                break;
        }
    }


}
