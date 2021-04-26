import './App.css';
//
 import { CirclePicker  } from 'react-color'
// import SketchExample from "./SketchExample";
// import {useState} from "react";
//
//
// function App() {
//   const colors = {
//       'Red': "#ff33cc",
//       'Yellow': "#ffcc33",
//       'Green': "#00ff33",
//       'Blue': "#0AB8E592",
//   };
//     const colors2 = [
//         "#ff33cc",
//         "#ffcc33",
//         "#00ff33",
//         "#0AB8E592",
//     ]
//     const animalsList = [
//         {
//             value: 'Red',
//             hex: '#ff33cc'
//         },
//         {
//             value: 'Yellow',
//             hex: "#ffcc33"
//         },
//         {
//             value: 'Green',
//             hex: "#00ff33"
//         },
//         {
//             value: 'Blue',
//             hex: "#0AB8E592"
//         }
//     ];
//     const initialState = {
//         red: "1",
//         green: "157",
//         blue: "189"
//     };
//
//     const rgbToHex = rgb => {
//         let hex = Number(rgb).toString(16);
//         if (hex.length < 2) {
//             hex = "0" + hex;
//         }
//         return "" + hex;
//     };
//
//   const [background, setBackground] = useState('#ff00ff');
//     const changeHandler = event => {
//         setBackground({...background, [event.target.name]: event.target.value});
//     }
//   return (
//     <div className="App" style={{background: background}}>
//         Hello
//         <div className="container">
//             <div className="card">
//                 <input type="text" value={background}/>
//                 <div className="color-slider-wrap">
//                     {
//                         animalsList.map(option =>
//                            <div>
//                                <option value={option.value} style={{background:option.hex}}
//                                        onClick={()=>setBackground(option.hex)}>
//                                    {option.value}
//                                </option>
//                            </div>
//                         )
//                     }
//               </div>
//             </div>
//         </div>
//
//             <div className="box">
//                 <label>Red</label>
//                 <input
//                     type="range"
//                     min="0"
//                     max="255"
//                     // value={initialState.red}
//                     onChange={changeHandler}
//                 />
//                 <label>Green</label>
//                 <input
//                     type="range"
//                     min="0"
//                     max="255"
//                     //value={initialState.green}
//                 />
//                 <label>Blue</label>
//                 <input
//                     type="range"
//                     min="0"
//                     max="255"
//                     value={initialState.blue}
//                 />
//             </div>
//
//         {/*<SketchPicker />*/}
//         {/*<SketchExample />*/}
//     </div>
//   );
// }
//
// export default App;





import { useReducer } from "react";

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
    document.body.style.background = hexString(
        state.red,
        state.green,
        state.blue
    );


    console.log('state', state)
    return (
        <>

            <div className="box">Component will go here</div>
            <div className="results">
                <div>
                    {hexString(state.red, state.green, state.blue)}
                    <br />
                    rgb({state.red}, {state.green}, {state.blue})
                </div>
            </div>
            <div className="box">
                <label>Red</label>
                <input
                    type="range"
                    min="0"
                    max="255"
                    onChange={e => dispatch({ type: "SET_RED", value: e.target.value })}
                    value={state.red}
                />
                <label>Green</label>
                <input
                    type="range"
                    min="0"
                    max="255"
                    onChange={e => dispatch({ type: "SET_GREEN", value: e.target.value })}
                    value={state.green}
                />
                <label>Blue</label>
                <input
                    type="range"
                    min="0"
                    max="255"
                    onChange={e => dispatch({ type: "SET_BLUE", value: e.target.value })}
                    value={state.blue}
                />
                <input
                    type="button"
                    onClick={e => dispatch({ type: "SET_color", value: "#0033ff" })}
                    value={"#SET_color"}
                />
            </div>
        </>
    );
};

export default App;