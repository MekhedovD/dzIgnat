import React, {ChangeEvent, useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> //
    addUserCallback: (name: string) => void //
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>(""); //
    const [error, setError] = useState<string>("");

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
         setName(e.currentTarget.value);
    };
    const addUser = () => {
        if (name) {
            addUserCallback(name)
            setName("")
            alert(`Hello ${name} !`)
        } else {
            setError("error 1")
            // alert('Enter your name')
            setName('Enter your name')
        }
    };
    const totalUsers = users.length;
    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    );
}

export default GreetingContainer;
