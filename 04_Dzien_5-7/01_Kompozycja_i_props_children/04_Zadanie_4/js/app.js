import React, { Component } from "react";
import { createRoot } from "react-dom/client";

// function Chat(props) {
//   return (
//     <section className="chat">
//       <header>
//         <h1>Chat prywatny</h1>
//       </header>
//       <div>
//         <ul>
//           <li>Wpis z chatu 1</li>
//           <li>Wpis z chatu 2</li>
//           <li>Wpis z chatu 3</li>
//         </ul>
//       </div>
//       <footer>
//         <form>
//           <input type="text" />
//           <button>Wyślij</button>
//         </form>
//       </footer>
//     </section>
//   );
// }

function Chat(props) {
    return (
        <section className="chat">
            <ChatHeader />
            <ChatMessage messages={props}/>
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
    const {messages} = props;
    return (
        <div>
            <ul>
                {messages.map((item, index)=> {
                    return (
                        <li key={index}>
                            {messages}
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

const messages = ["Wpis z chatu 1", "Wpis z chatu 2", "Wpis z chatu 3"];

function App(props) {
  return <Chat messages={messages}/>;
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
