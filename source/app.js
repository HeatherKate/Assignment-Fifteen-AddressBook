var React = require('react');
var ReactDom = require('react-dom');
var AddressBook = require('./AddressBook');

ReactDom.render(<AddressBook name="hey" />, document.getElementById('app'));