import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./theme.css";

const Theme = () => {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme','dark');
        localStorage.setItem("selectedTheme","dark");
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme','light');
        localStorage.setItem("selectedTheme","light");
    }
    const selectedTheme = localStorage.getItem("selectedTheme");
    if(selectedTheme === "light"){
        setLightMode();
    }
    else
    {
        setDarkMode();
    }
    const toggleTheme = (e) => {
        if(e.target.checked)
            setDarkMode();
        else
            setLightMode();
    }
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                defaultChecked={selectedTheme === "light"}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default Theme;