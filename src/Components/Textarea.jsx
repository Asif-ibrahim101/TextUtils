import React, { useState } from 'react';
import Button from '../Sub-components/Button';

// Bootstrap Css 
import 'bootstrap/dist/css/bootstrap.min.css';

function Textarea(props) {
    const [text, setText] = useState("");

    // const words = text.split(" ").length;
    const timeToRead = text.length * 0.008;


    // converting text into uppercase
    const convertToUpper = () => {
        let uppertext = text.toUpperCase();
        setText(uppertext);
    };

    // copying text
    const copyText = () => {
        navigator.clipboard.writeText(text);
        props.ShowAlert("text copied", "success");
    };

    // converting text into lowercase
    const convertToLower = () => {
        let uppertext = text.toLowerCase();
        setText(uppertext);
        props.ShowAlert("Text has been cleared", "primary");

    };

    // clear all text
    const ClearAll = () => {
        setText("")
        props.ShowAlert("Text has been cleared", "danger");
    };

    // cut extra spacess in an text
    const cutSpaces = () => {
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
    };

    const changer = (e) => {
        setText(e.target.value);
    };

    return (
        <>
            <div className='container' style={{marginTop: '4rem'}}>
                <h2 className='my-4'>Enter text to analyze</h2>
                <textarea
                    style={{
                        backgroundColor: props.mode === 'dark' ? 'rgb(25, 45, 74)' : 'white',
                        color: props.mode === 'dark' ? 'white' : 'black', fontWeight: 'bold'
                    }}
                    id="mybox"
                    onChange={changer} value={text}
                    className='form-control'
                    rows="8">

                </textarea>

                <div className='my-4'>
                    <Button
                        convertToUp={convertToUpper}
                        ClearAll={ClearAll}
                        convertToLo={convertToLower}
                        copyText={copyText}
                        cutSpaces={cutSpaces}
                        text = {text} />
                </div>
            </div>

            <div className="container">
                <p>{text.split(" ").filter((e)=> {return e.length!== 0}).length} words and {text.length} charecters</p>
                <p>it will take {timeToRead} minutes</p>
            </div>

            <div className='container my-4'>
                <h2>Preview</h2>
                <p>{text.length === 0 ? <h5 className='text-danger'>'Please enter text above'</h5> : text}</p>
            </div>
        </>
    )
}

export default Textarea;