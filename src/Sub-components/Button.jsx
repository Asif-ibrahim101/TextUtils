import React from 'react';
import Button from 'react-bootstrap/Button';


function Buttons(props) {
    return (
        <>
            <Button disabled={props.text.length === 0} className='mx-1 my-1' onClick={props.convertToUp}>Uppercase</Button>
            <Button disabled={props.text.length === 0} className='mx-1 my-1'  variant='secondary' onClick={props.convertToLo}>lowercase</Button>
            <Button disabled={props.text.length === 0} className='mx-1 my-1' variant='danger' onClick={props.ClearAll}>Clear Text</Button>
            <Button disabled={props.text.length === 0} className='mx-1 my-1' variant='success' onClick={props.copyText}>Copy Text</Button>
            <Button disabled={props.text.length === 0} className='mx-1 my-1' variant='warning' onClick={props.cutSpaces}>Cut Extra Space</Button>
        </>
    )
}

export default Buttons