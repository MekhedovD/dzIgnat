import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import s from "./StyleHW11.module.css";

function HW11() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(100);

  const setMinValue = (newMinValue: number): void => {
    setValue1(newMinValue)
  }

  const handleChange = (newValue: number | number[]): void => {
    if (typeof newValue === "object") {
      setValue1(newValue[0])
      setValue2(newValue[1])
    }
  }

  let value = [value1, value2];

  return (
    <div>
      <hr/>
      homeworks 11

      {/*should work (должно работать)*/}
      <div className={s.wrapperHW11}>
        <div className={s.range}>
          <span>{value1}</span>
          <SuperRange
            onChangeRange={setMinValue}
            minValue={value1}
            // сделать так чтоб value1 изменялось
          />
        </div>

        <div className={s.doubleRange}>
          <span>{value1}</span>
          <SuperDoubleRange
            handleChange={handleChange}
            value={value}
            // сделать так чтоб value1 и value2 изменялось
          />
          <span>{value2}</span>
        </div>
      </div>


      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperRange/>*/}
      {/*<AlternativeSuperDoubleRange/>*/}
      <hr/>
    </div>
    );
}

export default HW11;
