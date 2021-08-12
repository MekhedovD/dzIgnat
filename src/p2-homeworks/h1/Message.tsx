import React from "react";
import m from './Message.module.css';

type MessageType = {
  avatar: string
  name: string
  message: string
  time: string
}

function Message(props: MessageType) {
  return (
    <div className={m.block_message}>
      <div className={m.message_wr}>
        <img src={props.avatar} alt=''/>
        <div className={m.message_item}>
          <p>{props.name}</p>
          <div className={m.message}>
            <p>{props.message}
              <span className={m.time}>{props.time}</span>
            </p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Message;
