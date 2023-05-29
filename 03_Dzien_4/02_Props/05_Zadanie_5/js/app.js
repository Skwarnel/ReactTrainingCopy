import React, {Component} from "react";
import { createRoot} from "react-dom";

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

class Menu extends Component {
    render() {
        return (
            <ul>
                { menu.map(item => <li key={item.url}><a href={item.url}>{item.text}</a></li>) }
            </ul>
        )
    }
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(Menu);
