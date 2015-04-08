/** @jsx React.DOM */
var React = require('flux-react');
var ResultList = React.createClass({
  render: function() {
    var results = this.props.results.map(function (result) {
      return <div><span>{result.name}</span><img src={result.thumbnails} width="50px" /></div>
    }, this);

    return (
      <ul class="resultList">
        {results}
      </ul>
    );
  }
});

module.exports = ResultList;
