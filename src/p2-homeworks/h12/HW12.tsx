import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";

const themes: Array<string> = ['dark', 'red', 'some'];

function HW12() {
  const theme = useSelector((state: AppStoreType) => state.theme.themes); // useSelector
  const dispatch = useDispatch();
  const onChangeCallback = (option: string): void => {
    if (option === "dark") {
      dispatch({type: "SET-DARK-THEME"})
    }
    if (option === "red") {
      dispatch({type: "SET-RED-THEME"})
    }
    if (option === "some") {
      dispatch({type: "SET-SOME-THEME"})
    }
  }

  // useDispatch, onChangeCallback

  return (
    <div className={s[theme]}>
      <hr/>
      <span className={s[theme + '-text']}>
                homeworks 12
            </span>
      <div className={s.themeHW12}>
        <SuperSelect
          options={themes}
          onChangeOption={onChangeCallback}
        />
      </div>
      {/*should work (должно работать)*/}
      {/*SuperSelect or SuperRadio*/}

      <hr/>
    </div>
    );
}

export default HW12;
