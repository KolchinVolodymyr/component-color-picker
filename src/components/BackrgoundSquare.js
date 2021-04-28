import React, {useEffect, useRef, useState} from "react";
import useOnClickOutside from "../hooks/OnClick.hook";
import {hexString} from "../functions/hexString";


export const BackrgoundSquare = ({dispatch, state}) => {

    const [newColor, setNewColor] = useState({red:state.red, green: state.green, blue: state.blue});

    // State for modal RGB
    const [isModalOpenRGB, setModalOpenRGB] = useState(false);

    // Create a ref that we add to the element for which we want to detect outside clicks
    const ref = useRef();
    // Call hook passing in the ref and a function to call on outside click
    useOnClickOutside(ref, () => {
        setModalOpenRGB(false);
        setNewColor({red:state.red, green: state.green, blue: state.blue});
    });

    //Update the color setNewColor if changed state
    useEffect(()=>{
        setNewColor(state);
    }, [state]);

    return (
        <>
            <div className="BackgroundSquare__border">
                <div
                    onClick={() => setModalOpenRGB(true)}
                    className="BackgroundSquare"
                    style={{background: hexString(state.red, state.green, state.blue)}}
                >
                </div>
                <div
                    onClick={() => setModalOpenRGB(true)}
                    className="BackgroundSquare"
                    style={{background: hexString(newColor.red, newColor.green, newColor.blue)}}
                >
                </div>
            </div>
            <div className="RGB_Item__box">
                {isModalOpenRGB ? (
                    <div ref={ref}>
                        <div className="box" >
                            <label>
                                R
                                <input
                                    className="slider red_slider"
                                    type="range"
                                    min="0"
                                    max="255"
                                    onChange={e => setNewColor({...newColor, red: e.target.value })}
                                    value={newColor.red}
                                />
                            </label>
                            <label>
                                G
                                <input
                                    className="slider green_slider"
                                    type="range"
                                    min="0"
                                    max="255"
                                    onChange={e => setNewColor({...newColor, green: e.target.value })}
                                    value={newColor.green}
                                />
                            </label>
                            <label>
                                B
                                <input
                                    className="slider blue_slider"
                                    type="range"
                                    min="0"
                                    max="255"
                                    onChange={e => setNewColor({...newColor, blue: e.target.value })}
                                    value={newColor.blue}
                                />
                            </label>
                            <div className="flex-end">
                                <button
                                    className="cancel__btn"
                                    onClick={() => {
                                        setNewColor({red:state.red, green: state.green, blue: state.blue})
                                        setModalOpenRGB(false);
                                    }}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="ok__btn"
                                    onClick={() => {
                                        dispatch({ type: "SET_RED", value: newColor.red });
                                        dispatch({ type: "SET_GREEN", value: newColor.green });
                                        dispatch({ type: "SET_BLUE", value: newColor.blue });
                                        setModalOpenRGB(false);
                                    }}
                                >
                                    Ok
                                </button>
                            </div>
                        </div>
                    </div>
                ) : ( null )}
            </div>
        </>

    )
}