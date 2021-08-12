import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string //
    setNameCallback: (name: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void //
    error: string //
    totalUsers: number //
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error !== "" ? s.error : s.someClass; // need to fix with
    return (
        <div className={`${s.wrapper} `}>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
          {/*<div>{error}</div>*/}
          <span>{}</span>
            <button onClick={addUser} style={{margin: "0px 10px 0 10px"}}>add</button>
            <span>{totalUsers}</span>
        </div>
    );
}// то есть функцию вызовет ончэньдж и он не может передать строку зато такая чтука всегда передает ивент

export default Greeting;
