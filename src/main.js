console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

document.addEventListener('DOMContentLoaded', function () {
    console.log('READY');
});
// Intro
ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('hello')
);

// Hello
ReactDOM.render(
    <h1>Main</h1>,
    document.getElementById('main')
);

// JSX
const User = {
    firstname: 'John',
    lastname: 'Smith'
};

function formatName(user) {
    return user.firstname + ' ' + user.lastname;
}

const element = (
    <h1>
        Hello, {formatName(User)}
    </h1>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);

// Elements
function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('time')
    );
}

setInterval(tick, 1000);