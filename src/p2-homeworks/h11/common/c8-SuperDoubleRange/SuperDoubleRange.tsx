import React, {ChangeEvent} from "react";
import {Slider} from "@material-ui/core";
import s from "../../StyleHW11.module.css";

type SuperDoubleRangePropsType = {
    handleChange: (newValue: number | number[]) => void
    value: Array<number>
    // value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
      handleChange, value,
        // min, max, step, disable, ...
    }
) => {
  const handleChangeSlider = (event: ChangeEvent<{}>, newValue: number | number[]): void => {
    handleChange(newValue)
  }
    // сделать самому, можно подключать библиотеки

    return (
        <>
          <div className={s.sliderHW11}>
            <Slider
              value={value}
              onChange={handleChangeSlider}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
            />
          </div>

        </>
    );
}

export default SuperDoubleRange;
