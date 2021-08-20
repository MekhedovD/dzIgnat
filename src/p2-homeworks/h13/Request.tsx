import React, {useState} from "react";
import {requestAPI} from "./RequestAPI";

function Request() {

  const [checkStatus, setCheckStatus] = useState(false);
  const [requestRes, setRequestRes] = useState("");

  function sendRequestRes(checkStatus: boolean) {
    requestAPI.post(checkStatus).then(data => {
      setRequestRes(data)
    })
  }

  return (
    <div>
      <div>
        <button onClick={() => sendRequestRes(checkStatus)}>REQUEST</button>
        <input type="checkbox" onClick={() => setCheckStatus(!checkStatus)}/>CHANGE
      </div>
      <p>Response server: <span>{requestRes}</span></p>
    </div>
  )
}

export default Request;