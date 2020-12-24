import React, { useState } from 'react';
import "../css/Karen.css";


const Karen = () => {

    const [karenface, setKarenface] = useState(true)


    return (
        <div>
            <input id="normal" type="radio" name="expression" checked/>
            <label for="normal" class="btn">Normal</label>
            <input id="smile" type="radio" name="expression"/>
            <label for="smile" class="btn">Smile</label>
            <input id="angry" type="radio" name="expression"/>
            <label for="angry" class="btn">Angry</label> 
            <div class="girl"></div>
        </div>
    )
}

export default Karen
