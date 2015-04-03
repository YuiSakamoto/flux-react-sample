/** @jsx React.DOM */
var React = require('flux-react');
var WikiPediaThrower = require('./components/WikipediaThrower.js');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Wikipedia Search!</h1>
        <WikiPediaThrower/>
      </div>
    );
  }
});

module.exports = App;
