import React, {useState} from "react";
import SuperEditableSpan from "./common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {restoreState, saveState} from "./localStorage/localStorage";
import "./styleHW6.css";

function HW6() {
    const [value, setValue] = useState<string>("");

    const save = () => {
        saveState<string>("editable-span-value", value);
    };
    const restore = () => {
      const restoreValue = restoreState("editable-span-value", value);
      setValue(restoreValue);
    };

    return (
      <div>
        <hr/>
        homeworks 6

        {/*should work (должно работать)*/}
        <div className="wrapperHW6">
          <div className="spanHW6">
            <SuperEditableSpan
              value={value}
              onChangeText={setValue}
              spanProps={{children: value ? undefined : "enter text..."}}
            />
          </div>
            <SuperButton onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>
        </div>

        <hr/>
        {/*для личного творчества, могу проверить*/}
        {/*<AlternativeSuperEditableSpan/>*/}
        <hr/>
      </div>
    );
}

export default HW6;
