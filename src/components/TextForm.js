import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Upper Button pressed");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Updated","success");
        
    }

    const handleLoClick = () => {
        console.log("Lower Button pressed");
        setText(text.toLowerCase())
    }

    const handleOnChange = (event) => {
        console.log("On changed pressed");
        setText(event.target.value)
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to ClipBoard!","success");

    }

    const handleSpaces = () => {
        let newText = text.split(/[ ]+/); // RegEx
        newText = newText.join(" ");
        setText(newText)
    }

    const handleClear = () => {
        setText("");
    }
    const [text, setText] = useState('Enter text here');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 >{props.heading}</h1>
                <div className="mb-3" >
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary my-3 mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleClear}>Remove Text</button>
            </div>

            <div className="container px-0" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text Summary</h1>
                <p>{text === "" ? 0 : text.split(" ").length} words and {text.length} characters</p>
                <h1>Preview</h1>
                <p>{text}</p>
            </div>
        </>
    )
}
