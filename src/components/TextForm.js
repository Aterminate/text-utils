import React, {useState} from 'react'

export const TextForm = (props) => {


    const handleUpClick = () => {
        console.log('Text On Change'+ text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange  = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText]  = useState('');
    return (
        <div>
            <h2>{props.heading}</h2>
            <div className="form-group">
                <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange}  rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    )
}