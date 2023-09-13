import React, { useState } from 'react'

// const [text, setText] = useState('Enter TEXT');
export default function Textform(props) {
    const handleClick = () => {
        console.log("CLICKEDDDD   UR TEXTT ==> "+text);
        let newtext = text.toUpperCase(text)
        setText("WHAT ARE U TEXTING...I CANN SEE UUU!!!!");
        setText(newtext);
    }
    
    const handleClickLOWER = () => {
        // console.log("CLICKEDDDD   UR TEXTT ==> "+text);
        let newtext = text.toLowerCase(text)
        setText("WHAT ARE U TEXTING...I CANN SEE UUU!!!!");
        setText(newtext);
    }
    
    const handleClear = () => {
        // console.log("CLICKEDDDD   UR TEXTT ==> "+text);
        let newtext = ""
        setText("WHAT ARE U TEXTING...I CANN SEE UUU!!!!");
        setText(newtext);
    }


    const handleOnChange = (event) => {
        console.log("ON CLICKK")
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter TEXT');

    
    
    return (
        <>
        <div className = "container">
            <h1>{props.heading}  </h1>
            {/* <label htmlFor="myBox my-3" >{props.heading}</label>  */}
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows={8} ></textarea>
            </div>
            

            <button className="btn btn-dark my-2 mx-2" onClick={handleClick}>To UPPER</button>
            <button className="btn btn-dark mx-2" onClick={handleClickLOWER}>To LOWER</button>
            <button className="btn btn-dark my-2" onClick={handleClear}>CLEAR</button>
        </div>
        <div className = "container my-4">
            
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.08 * text.split(" ").length} Minutes to Read</p>
            <h7>UR TEXTT == {text}</h7>
        </div>
        </>
    )
}

