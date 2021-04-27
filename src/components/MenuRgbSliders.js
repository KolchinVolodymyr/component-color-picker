import {useRef, useState} from "react";
import useOnClickOutside from "../hooks/OnClick.hook";


export const MenuRgbSliders = ({dispatch, setModalOpenRGB, state}) => {

    // Create a ref that we add to the element for which we want to detect outside clicks
    const ref = useRef();
    // Call hook passing in the ref and a function to call on outside click
    useOnClickOutside(ref, () => setModalOpenRGB(false));

    //
    const [form, setForm] = useState({red:state.red, green: state.green, blue: state.blue});

    return (
        <div ref={ref}>
            <div className="box">
                <label>
                    R
                    <input
                        type="range"
                        min="0"
                        max="255"
                        onChange={e => setForm({...form, red: e.target.value })}
                        value={form.red}
                    />
                </label>

                <label>
                    G
                    <input
                        type="range"
                        min="0"
                        max="255"
                        onChange={e => setForm({...form, green: e.target.value })}
                        value={form.green}
                    />
                </label>
                <label>
                    B
                    <input
                        type="range"
                        min="0"
                        max="255"
                        onChange={e => setForm({...form, blue: e.target.value })}
                        value={form.blue}
                    />
                </label>
                <button onClick={() => setModalOpenRGB(false)}>
                    Cancel
                </button>
                <button onClick={e => {
                    dispatch({ type: "SET_RED", value: form.red });
                    dispatch({ type: "SET_GREEN", value: form.green });
                    dispatch({ type: "SET_BLUE", value: form.blue });
                    setModalOpenRGB(false);
                }}>
                    Ok
                </button>
            </div>
        </div>
    )
}