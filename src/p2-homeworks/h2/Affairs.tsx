import React from "react";
import Affair from "./Affair";
import {AffairType, FilterType} from "./HW2";
import s from "./Affairs.module.css";

type AffairsPropsType = {
  data: Array<AffairType>
  setFilter: (filter: FilterType) => void
  deleteAffairCallback: (id: number) => void
  filter: FilterType
}

function Affairs(props: AffairsPropsType) {
  const mappedAffairs = props.data.map((a: AffairType) => (
    <Affair
      key={a._id}
      affair={a}
      deleteAffairCallback={props.deleteAffairCallback}
    />
  ))

  // const setAll = () => {
  //   props.setFilter('all')
  // }; // need to fix
  // const setHigh = () => {
  //   props.setFilter('high')
  // };
  // const setMiddle = () => {
  //   props.setFilter('middle')
  // };
  // const setLow = () => {
  //   props.setFilter('low')
  // };

  const set = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    props.setFilter(e.currentTarget.value as FilterType)
  };

  // const onAll = s.button + " " + (props.filter === 'all' ? s.active : '');
  // const onHigh = s.button + " " + (props.filter === 'high' ? s.active : '');
  // const onMiddle = s.button + " " + (props.filter === 'middle' ? s.active : '');
  // const onLow = s.button + " " + (props.filter === 'low' ? s.active : '');

  const setClass = (filter: FilterType) => {
    return s.button + (props.filter === filter ? " " + s.active : "")
  }

  return (
    <div className={s.wrapper}>

      {mappedAffairs}

      {/*<button className={onAll} onClick={setAll}>All</button>*/}
      {/*<button className={onHigh} onClick={setHigh}>High</button>*/}
      {/*<button className={onMiddle} onClick={setMiddle}>Middle</button>*/}
      {/*<button className={onLow} onClick={setLow}>Low</button>*/}

      <button className={setClass("all")} value={"all"} onClick={set}>All</button>
      <button className={setClass("high")} value={"high"} onClick={set}>High</button>
      <button className={setClass("middle")} value={"middle"} onClick={set}>Middle</button>
      <button className={setClass("low")} value={"low"} onClick={set}>Low</button>

    </div>
  );
}

export default Affairs;
