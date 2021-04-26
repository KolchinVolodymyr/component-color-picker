import './App.css';
import {useState, useReducer} from 'react';
import {MenuPresetColors} from "./components/MenuPresetColors";
import {MenuRgbSliders} from "./components/MenuRgbSliders";

const App = () => {

    const rgbToHex = rgb => {
        let hex = Number(rgb).toString(16);
        if (hex.length < 2) {
            hex = "0" + hex;
        }
        return "" + hex;
    };

    const hexString = (r, g, b) => {
        return "#" + rgbToHex(r) + "" + rgbToHex(g) + rgbToHex(b);
    };

    const initialState = {
        red: "221",
        green: "140",
        blue: "19"
    };

    function reducer(state, action) {
        switch (action.type) {
            case "SET_RED":
                return { ...state, red: action.value };
            case "SET_BLUE":
                return { ...state, blue: action.value };
            case "SET_GREEN":
                return { ...state, green: action.value };

            case "SET_color":
                //Transform HEX to RGB
                function hexToRgb(hex) {
                    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                    return result ? {
                        r: parseInt(result[1], 16),
                        g: parseInt(result[2], 16),
                        b: parseInt(result[3], 16)
                    } : null;
                }
            return {
                    ...state,
                    red:  hexToRgb(action.value).r,
                    green: hexToRgb(action.value).g,
                    blue: hexToRgb(action.value).b
            };
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    document.body.style.background = '#e4e0df'

    // State for our modal
    const [isModalOpen, setModalOpen] = useState(false);
    // State for modal RGB
    const [isModalOpenRGB, setModalOpenRGB] = useState(false);

    return (
        <>
            <div className="ColorPickerMenu">
                <div className="ColorHex">
                    <div>
                        {hexString(state.red, state.green, state.blue)}
                    </div>
                </div>
                <div className="BackgroundSquare__border">
                    <div
                        onClick={() => setModalOpenRGB(true)}
                        className="BackgroundSquare"
                        style={{background: hexString(state.red, state.green, state.blue)}}
                    >
                    </div>
                </div>
                <div className="RGB_Item__box">
                    {isModalOpenRGB ? (
                        <MenuRgbSliders setModalOpenRGB={setModalOpenRGB} dispatch={dispatch} state={state}/>
                    ) : ( null )}
                </div>

                <div className="MenuItem__svg">
                    <svg
                        onClick={() => setModalOpen(true)}
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="caret-down"
                        className="svg-inline--fa fa-caret-down fa-w-10"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512">
                        <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                    </svg>
                </div>
                <div className="MenuItem__box">
                    {isModalOpen ? (
                        <MenuPresetColors dispatch={dispatch} setModalOpen={setModalOpen}/>
                    ) : ( null )}
                </div>
            </div>

        </>
    );
};

export default App;