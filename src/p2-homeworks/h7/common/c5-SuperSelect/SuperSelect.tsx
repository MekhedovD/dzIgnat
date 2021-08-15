import React, {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes} from "react";
import s from "./SuperSelect.module.css";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
// type DefaultSelectPropsType = DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {

  // const mappedOptions: any[] = options ? options.map((el, i) => (
  //   <option className={s.option} key={el + "-" + i} value={el}>{el}</option>
  // )) : []; // map options with key

  const mappedOptions: any[] = options ? options.map((el, i) => (
    <option key={i} className={s.option}>{el}</option>
  )) : []; // map options with key

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(e);
    onChangeOption && onChangeOption(e.currentTarget.value);
    // onChange, onChangeOption
  }


  return (
    <select className={s.select} onChange={onChangeCallback} {...restProps}>
      {mappedOptions}
    </select>
  );
}

export default SuperSelect;
