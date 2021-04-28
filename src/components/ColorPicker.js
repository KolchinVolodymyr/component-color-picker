import React, {useReducer, useState} from "react";
import {hexString} from "../functions/hexString";
import {BackrgoundSquare} from "./BackrgoundSquare";
import {MenuPresetColors} from "./MenuPresetColors";
import {hexToRgb} from "../functions/hexToRgb";


export const ColorPicker = ({value, colors, onChange}) => {

    const initialState = {
        red: hexToRgb(value).red,
        green: hexToRgb(value).green,
        blue: hexToRgb(value).blue
    };

    function reducer(state, action) {
        switch (action.type) {
            case "SET_RED":
                return { ...state, red: action.value };
            case "SET_BLUE":
                return { ...state, blue: action.value };
            case "SET_GREEN":
                return { ...state, green: action.value };
            case "SET_COLOR":
                return {
                    ...state,
                    red:  hexToRgb(action.value).red,
                    green: hexToRgb(action.value).green,
                    blue: hexToRgb(action.value).blue
                };
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    // State for our modal
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <>
            <div className="ColorPickerMenu">
                <div className="ColorHex">
                    <div>
                        {hexString(state.red, state.green, state.blue)}
                    </div>
                </div>
                <BackrgoundSquare
                    dispatch={dispatch}
                    state={state}
                />
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
                        <MenuPresetColors
                            onChange={onChange}
                            colors={colors}
                            dispatch={dispatch}
                            setModalOpen={setModalOpen}
                        />
                    ) : ( null )}
                </div>
            </div>
        </>

    )
}