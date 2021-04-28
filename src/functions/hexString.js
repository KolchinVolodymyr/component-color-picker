import {rgbToHex} from "./rgbToHex";

export const hexString = (r, g, b) => {
    return "#" + rgbToHex(r) + "" + rgbToHex(g) + rgbToHex(b);
};