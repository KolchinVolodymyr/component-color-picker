import './App.css';
import React from 'react'
import {ColorPicker} from "./components/ColorPicker";


const App = () => {

    //
    const colors = [
        {name:'RED', value:'#ff0000'},
        {name:'YELLOW', value:'#ffcc33'},
        {name:'GREEN', value:'#17a459'},
        {name:'BLUE', value:'#17b3ec'},
    ];

    return (
        <>
            <ColorPicker value={'#DD8C03'} colors={colors} />
        </>
    );
};

export default App;