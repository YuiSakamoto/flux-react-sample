/** @jsx React.DOM */
var React = require('flux-react');
var ResultList = React.createClass({
  render: function() {
    var results = this.props.results.map(function (result, index) {
      return <li><a href={"http://ja.wikipedia.org/wiki/"+ result} target="_blank">{result}</a></li>
    }, this);

    return (
      <ul class="resultList">
        {results}
      </ul>
    );
  }
});

module.exports = ResultList;
