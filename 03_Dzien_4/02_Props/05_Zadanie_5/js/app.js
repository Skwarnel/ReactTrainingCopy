import React from "react";
import ReactDOM from "react-dom";

const menu = [
    {
        url: '/',
        text: 'Strona główna'
    },
    {
        url: '/blog',
        text: 'Blog'
    },
    {
        url: '.cennik',
        text: 'Cennik'
    },
    {
        url: '/kontakt',
        text: 'Kontakt'
    }
];

class Menu extends React.Component {
    render() {
        return (
            <ul>
                { menu.map(item => <li key={item.url}><a href={item.url}>{item.text}</a></li>) }
            </ul>
        )
    }
}

ReactDOM.render(
    <Menu />,
    document.getElementById("app")
);