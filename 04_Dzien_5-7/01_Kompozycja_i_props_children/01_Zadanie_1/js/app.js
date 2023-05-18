import React, {Component} from "react";
import {createRoot} from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

const ParentComponent = (props) => {
    return <ChildComponent>
        <h1>{props.children}</h1>
    </ChildComponent>
}

const ChildComponent = (props) => {
    return <GrandChildComponent>
        <h1>{props.children}</h1>
    </GrandChildComponent>
}

const GrandChildComponent = (props) => {
    return <h1>{props.children}</h1>
}


// const App = () => {
//     return (
//         <div>
//         <Wrapper title="I am the wrapper">
//             <Child body="Child component" />
//         </Wrapper>
//         <Child body="I am not wrapped"></Child>
//         </div>
//     );
// };
//
// const Wrapper = (props) => {
//     return (
//         <div className="wrapper">
//             <h1>{props.title}</h1>
//             {props.children}
//         </div>
//     );
// };
//
// const Child = (props) => {
//     return <h4>{props.body}</h4>;
// };

root.render(
    <ParentComponent>
        <h1>To działa!</h1>
    </ParentComponent>

);