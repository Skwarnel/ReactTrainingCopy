import React, {Component} from "react";
import {createRoot} from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

const ParentComponent = (props) => {
    return <ChildComponent>
        {props.children}
    </ChildComponent>
};

const ChildComponent = (props) => {
    return <GrandChildComponent>
        {props.children}
    </GrandChildComponent>
}

const GrandChildComponent = (props) => {
    return <h2>{props.children}</h2>
}

root.render(
    <ParentComponent >
        <h2>To działa</h2>
    </ParentComponent>
);