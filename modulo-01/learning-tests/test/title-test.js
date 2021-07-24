'use strict';
const React = require('react');
const ReactDOMServer = require('react-dom/server')
const Title = require('./title');
const $ = require('whacko')
const TitleComponent = ReactDOMServer.renderToStaticMarkup(
    React.createElement(Title)
)
console.log($(TitleComponent).get(0).tagName)