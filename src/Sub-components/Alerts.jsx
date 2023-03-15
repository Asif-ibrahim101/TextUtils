import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


function AlertDismissibleExample(props) {
  const [show, setShow] = useState(true);

  const Capitalize = (word) => {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  if (show) {
    return (
      <div style={{height: '50px'}}>
        {props.alert && <Alert variant={props.alert.type} onClose={() => setShow(false)} dismissible>
          <h4><strong>{Capitalize(props.alert.type)}</strong> : {props.alert.msg}</h4>
        </Alert>}
      </div>
    );
  }
}

export default AlertDismissibleExample;