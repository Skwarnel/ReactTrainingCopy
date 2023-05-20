import React from "react";

function ShowUserFunc({ name, surname }) {

    const handleClick = () => {
        console.log(name, surname);
    }

    return <button onClick={handleClick}>Dane użytkownika</button>;

}
