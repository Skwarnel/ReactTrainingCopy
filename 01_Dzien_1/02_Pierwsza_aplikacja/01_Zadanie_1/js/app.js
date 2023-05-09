import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.querySelector('#app');
const root = createRoot(container);

root.render(<h1>Hello :) GPS wystartował z React</h1>);