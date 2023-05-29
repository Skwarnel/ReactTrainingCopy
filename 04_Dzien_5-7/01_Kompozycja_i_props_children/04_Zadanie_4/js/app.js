import React, { Component } from "react";
import { createRoot } from "react-dom/client";

function Chat(props) {
    const {list} = props;
    return (
        <section className="chat">
            <ChatHeader />
            <ChatMessage list={list}/>
            <NewChatMessage />
        </section>
    );
}

const ChatHeader = () => {
    return (
        <header>
            <h1>Chat prywatny</h1>
        </header>
    )
}

const ChatMessage = (props) => {
    const {list} = props;
    return (
        <div>
            <ul>
                {list.map((item, index)=> {
                    return (
                        <li key={index}>
                            {item}
                        </li>
                    );
                })}
            </ul>
        </div>
    )
};

const NewChatMessage = () => {
    return (
        <footer>
            <form>
                <input type="text" />
                <button>Wyślij</button>
            </form>
        </footer>
    )
};

const data = ["Wpis z chatu 1", "Wpis z chatu 2", "Wpis z chatu 3", "Wiadomość od GPS: jest cudownie"];

function App(props) {
    const {messages} = props;
  return <Chat list={messages}/>;
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App messages={data}/>);
