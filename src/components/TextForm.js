import React, {useState} from 'react'

export const TextForm = (props) => {


    const handleUpClick = () => {
        // console.log('Text On Change'+ text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleclearClick = () =>{
        let newText = '';
        setText(newText);
    }
    const handleOnChange  = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText]  = useState('');
    return (
        <>
            <div className='container'>
                <h3>{props.heading}</h3>
                <div className="form-group">
                    <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange}  rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h3>Your Text Summary</h3>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{ 0.008 * text.split(" ").length } Minutes read</p>
                <h5>Preview</h5>
                <p>{text}</p>
            </div>
        </>
    )
}