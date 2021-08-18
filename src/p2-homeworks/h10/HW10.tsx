import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import s from "./StyleHW10.module.css"

function HW10() {
  // useSelector, useDispatch
  const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading);
  const dispatch = useDispatch()

  const setLoading = () => {
    // dispatch
    // setTimeout
    dispatch(loadingAC(true))
    setTimeout(() => dispatch(loadingAC(false)), 1500)
    console.log("loading...");
  };

  return (
    <div>
      <hr/>
      homeworks 10
      <div className={s.wrapperHW10}>
        {/*should work (должно работать)*/}
        {loading
          ? (
            <div>крутилка...</div>
          ) : (
            <div>
              <SuperButton onClick={setLoading}>set loading...</SuperButton>
            </div>
          )
        }
      </div>

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<Alternative/>*/}
      <hr/>
    </div>
  );
}

export default HW10;
