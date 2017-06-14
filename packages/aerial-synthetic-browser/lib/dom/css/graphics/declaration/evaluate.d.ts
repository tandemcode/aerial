import { ITreeWalker, Observable, ObservableCollection } from "aerial-common";
import { ISyntheticObject } from "aerial-sandbox";
import { CSSUnitType, CSSDeclValueExpression } from "./ast";
export declare const BUILTIN_CSS_COLOR_MAP: {
    "aliceblue": string;
    "antiquewhite": string;
    "aqua": string;
    "aquamarine": string;
    "azure": string;
    "beige": string;
    "bisque": string;
    "black": string;
    "blanchedalmond": string;
    "blue": string;
    "blueviolet": string;
    "brown": string;
    "burlywood": string;
    "cadetblue": string;
    "chartreuse": string;
    "chocolate": string;
    "coral": string;
    "cornflowerblue": string;
    "cornsilk": string;
    "crimson": string;
    "cyan": string;
    "darkblue": string;
    "darkcyan": string;
    "darkgoldenrod": string;
    "darkgray": string;
    "darkgrey": string;
    "darkgreen": string;
    "darkkhaki": string;
    "darkmagenta": string;
    "darkolivegreen": string;
    "darkorange": string;
    "darkorchid": string;
    "darkred": string;
    "darksalmon": string;
    "darkseagreen": string;
    "darkslateblue": string;
    "darkslategray": string;
    "darkslategrey": string;
    "darkturquoise": string;
    "darkviolet": string;
    "deeppink": string;
    "deepskyblue": string;
    "dimgray": string;
    "dimgrey": string;
    "dodgerblue": string;
    "firebrick": string;
    "floralwhite": string;
    "forestgreen": string;
    "fuchsia": string;
    "gainsboro": string;
    "ghostwhite": string;
    "gold": string;
    "goldenrod": string;
    "gray": string;
    "grey": string;
    "green": string;
    "greenyellow": string;
    "honeydew": string;
    "hotpink": string;
    "indianred": string;
    "indigo": string;
    "ivory": string;
    "khaki": string;
    "lavender": string;
    "lavenderblush": string;
    "lawngreen": string;
    "lemonchiffon": string;
    "lightblue": string;
    "lightcoral": string;
    "lightcyan": string;
    "lightgoldenrodyellow": string;
    "lightgray": string;
    "lightgrey": string;
    "lightgreen": string;
    "lightpink": string;
    "lightsalmon": string;
    "lightseagreen": string;
    "lightskyblue": string;
    "lightslategray": string;
    "lightslategrey": string;
    "lightsteelblue": string;
    "lightyellow": string;
    "lime": string;
    "limegreen": string;
    "linen": string;
    "magenta": string;
    "maroon": string;
    "mediumaquamarine": string;
    "mediumblue": string;
    "mediumorchid": string;
    "mediumpurple": string;
    "mediumseagreen": string;
    "mediumslateblue": string;
    "mediumspringgreen": string;
    "mediumturquoise": string;
    "mediumvioletred": string;
    "midnightblue": string;
    "mintcream": string;
    "mistyrose": string;
    "moccasin": string;
    "navajowhite": string;
    "navy": string;
    "oldlace": string;
    "olive": string;
    "olivedrab": string;
    "orange": string;
    "orangered": string;
    "orchid": string;
    "palegoldenrod": string;
    "palegreen": string;
    "paleturquoise": string;
    "palevioletred": string;
    "papayawhip": string;
    "peachpuff": string;
    "peru": string;
    "pink": string;
    "plum": string;
    "powderblue": string;
    "purple": string;
    "rebeccapurple": string;
    "red": string;
    "rosybrown": string;
    "royalblue": string;
    "saddlebrown": string;
    "salmon": string;
    "sandybrown": string;
    "seagreen": string;
    "seashell": string;
    "sienna": string;
    "silver": string;
    "skyblue": string;
    "slateblue": string;
    "slategray": string;
    "slategrey": string;
    "snow": string;
    "springgreen": string;
    "steelblue": string;
    "tan": string;
    "teal": string;
    "thistle": string;
    "tomato": string;
    "turquoise": string;
    "violet": string;
    "wheat": string;
    "white": string;
    "whitesmoke": string;
    "yellow": string;
    "yellowgreen": string;
};
export declare abstract class SyntheticCSSValue extends Observable implements ISyntheticObject {
    readonly $uid: any;
    constructor();
    readonly uid: any;
    abstract clone(deep?: boolean): any;
    visitWalker(walker: ITreeWalker): void;
}
export interface IRGBA {
    r: number;
    b: number;
    g: number;
    a?: number;
}
export declare class SyntheticCSSColor extends SyntheticCSSValue {
    r: number;
    g: number;
    b: number;
    a: number;
    constructor(r: number, g: number, b: number, a?: number);
    static fromRGBA({r, g, b, a}: IRGBA): SyntheticCSSColor;
    clone(): SyntheticCSSColor;
    toHex(): string;
    toString(): any;
}
export declare abstract class SyntheticCSSFilter extends SyntheticCSSValue {
    readonly name: string;
    readonly params: any[];
    constructor(name: string, params: any[]);
    clone(): any;
    abstract toString(): any;
    abstract setProperty(name: string, value: any): any;
}
export declare class SyntheticAmountFilter extends SyntheticCSSFilter {
    name: string;
    amount: SyntheticCSSMeasurment;
    constructor(name: string, params: SyntheticCSSMeasurment[]);
    setProperty(name: string, value: any): void;
    toString(): string;
}
export declare class SyntheticDropShadowFilter extends SyntheticCSSFilter {
    x: SyntheticCSSMeasurment;
    y: SyntheticCSSMeasurment;
    blur: SyntheticCSSMeasurment;
    spread: SyntheticCSSMeasurment;
    color: SyntheticCSSColor;
    constructor(name: string, params: any[]);
    setProperty(name: string, value: any): void;
    toString(): string;
}
export declare class SyntheticCSSDegree extends SyntheticCSSValue {
    value: number;
    constructor(value: number);
    clone(): SyntheticCSSDegree;
    toString(): string;
}
export declare class SyntheticCSSMeasurment extends SyntheticCSSValue {
    value: number;
    unit: CSSUnitType;
    constructor(value: number, unit: CSSUnitType);
    clone(): SyntheticCSSMeasurment;
    toString(): string;
    static cast(value: any): any;
}
export declare class SyntheticCSSGradientColorStop extends SyntheticCSSValue {
    color: SyntheticCSSColor;
    stop: number;
    constructor(color: SyntheticCSSColor, stop?: number);
    clone(): SyntheticCSSGradientColorStop;
}
export declare class SyntheticCSSLinearGradient extends SyntheticCSSValue {
    angle: number;
    colorStops: ObservableCollection<SyntheticCSSGradientColorStop>;
    constructor(angle: number, colorStops: SyntheticCSSGradientColorStop[]);
    clone(): SyntheticCSSLinearGradient;
    toString(): string;
}
export declare const CSS_FILTER_TYPES: string[];
export declare const evaluateCSSDeclValue: (expression: CSSDeclValueExpression) => any;