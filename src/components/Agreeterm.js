import React, { useState } from "react";

function Agree() {
    const [agree, setAgree] = useState(false);
  
    const checkboxHandler = () => {
      setAgree(!agree);
    }
    const btnHandler = () => {
      alert('Your file has been uploaded ');
    };
    return (
        <div className="App">
          <div className="container">
            <div>
              <input type="checkbox" id="agree" onChange={checkboxHandler} />
              <label> I agree to <b>terms and conditions</b></label>
            </div>
    
            <button disabled={!agree} className="btn btn-primary" onClick={btnHandler}>
              Summit
            </button>
          </div>
        </div>
    )
}
export default Agree
