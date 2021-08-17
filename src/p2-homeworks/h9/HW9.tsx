import React from "react";
import Clock from "./Clock";
import s from "./StyleHW9.module.css";

function HW9() {
    return (
        <div>
            <hr/>
            homeworks 9

            {/*should work (должно работать)*/}
          <div className={s.wrapperHW9}>
            <Clock/>
          </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}
            <hr/>
        </div>
    );
}

export default HW9;
