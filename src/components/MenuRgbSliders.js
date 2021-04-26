import {useRef} from "react";
import useOnClickOutside from "../hooks/OnClick.hook";


export const MenuRgbSliders = ({dispatch, setModalOpenRGB, state}) => {

    // Create a ref that we add to the element for which we want to detect outside clicks
    const ref = useRef();

    // Call hook passing in the ref and a function to call on outside click
    useOnClickOutside(ref, () => setModalOpenRGB(false));

    return (
        <div ref={ref}>
            <div className="box">
                <label>
                    R
                    <input
                        type="range"
                        min="0"
                        max="255"
                        onChange={e => dispatch({ type: "SET_RED", value: e.target.value })}
                        value={state.red}
                    />
                </label>

                <label>
                    G
                    <input
                        type="range"
                        min="0"
                        max="255"
                        onChange={e => dispatch({ type: "SET_GREEN", value: e.target.value })}
                        value={state.green}
                    />
                </label>
                <label>
                    B
                    <input
                        type="range"
                        min="0"
                        max="255"
                        onChange={e => dispatch({ type: "SET_BLUE", value: e.target.value })}
                        value={state.blue}
                    />
                </label>
                <button onClick={() => setModalOpenRGB(false)}>
                    Cancel
                </button>
                <button onClick={() => setModalOpenRGB(true)}>
                    Ok
                </button>
            </div>
        </div>
    )
}