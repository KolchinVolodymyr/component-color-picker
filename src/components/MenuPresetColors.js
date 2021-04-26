import {useRef} from "react";
import useOnClickOutside from "../hooks/OnClick.hook";


export const MenuPresetColors = ({dispatch, setModalOpen}) => {

    // Create a ref that we add to the element for which we want to detect outside clicks
    const ref = useRef();

    // Call hook passing in the ref and a function to call on outside click
    useOnClickOutside(ref, () => setModalOpen(false));

    return (
            <div ref={ref}>
                <input
                    type="button"
                    onClick={e => {
                        dispatch({type: "SET_color", value: "#ff0000"});
                        setModalOpen(false)
                    }}
                    style={{background: '#ff0000'}}
                    value={"RED"}
                />
                <input
                    type="button"
                    onClick={e => {
                        dispatch({type: "SET_color", value: "#ffcc33"});
                        setModalOpen(false)
                    }}
                    style={{background: '#ffcc33'}}
                    value={"YELLOW"}
                />
                <input
                    type="button"
                    onClick={e => {
                        dispatch({type: "SET_color", value: "#17a459"});
                        setModalOpen(false)
                    }}
                    style={{background: '#17a459'}}
                    value={"GREEN"}
                />
                <input
                    type="button"
                    onClick={e => {
                        dispatch({type: "SET_color", value: "#17b3ec"});
                        setModalOpen(false)
                    }}
                    style={{background: '#17b3ec'}}
                    value={"BLUE"}
                />
            </div>
    )
}