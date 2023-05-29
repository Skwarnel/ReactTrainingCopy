import React from 'react';
import {useState} from "react";

const Form = () => {
    const [form, setForm] = useState({login: "login", password: "pass"})

    const handleChange = e => {
        setForm({
            name: e.target.value,
        })
    }

    return (
        <form>
            <label>
                Login
                <input type="text" name="login" value={form.login} onChange={handleChange} />
            </label>
            <label>
                Password
                <input type="text" name="password" value={form.password} onChange={handleChange}/>
            </label>
            <input type="submit" value="Zaloguj"/>
        </form>
    )
}

export default Form;