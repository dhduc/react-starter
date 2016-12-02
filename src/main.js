console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

document.addEventListener('DOMContentLoaded', function () {
    console.log('READY');
});

ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('hello')
);

ReactDOM.render(
    <h1>Main</h1>,
    document.getElementById('main')
);

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