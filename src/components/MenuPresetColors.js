import React from 'react'
import {useRef} from "react";
import useOnClickOutside from "../hooks/OnClick.hook";

export const MenuPresetColors = ({colors, dispatch, setModalOpen}) => {

    // Create a ref that we add to the element for which we want to detect outside clicks
    const ref = useRef();

    // Call hook passing in the ref and a function to call on outside click
    useOnClickOutside(ref, () => setModalOpen(false));

    return (
            <div ref={ref}>
                {colors.map(color => {
                    return (
                        <label key={color.value}>
                            {color.name}
                            <input
                                type="button"
                                onClick={() => {
                                    dispatch({type: "SET_COLOR", value: color.value});
                                    setModalOpen(false)
                                }}
                                style={{background: color.value}}
                            />
                        </label>
                    )
                })}
            </div>
    )
}