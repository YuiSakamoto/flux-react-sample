/** @jsx React.DOM */
var React = require('flux-react');
var ResultList = require('../components/ResultList.js');
var WikipediaActions = require('../actions/WikipediaActions');
var WikipediaStore = require('../stores/WikipediaStore');

var WikipediaThrower = React.createClass({
  stores: [WikipediaStore],

  getInitialState: function () {
    return {
      results: []
    };
  },

  componentDidMount: function() {
    WikipediaStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    WikipediaStore.removeChangeListener(this._onChange);
  },

  updateTerm: function () {
    WikipediaActions.search(this.refs.input.getDOMNode().value);
  },

  render: function() {
    return (
      <div>
        <input ref="input" type="text" size="100" value={this.state.term} onChange={$.throttle(300, this.updateTerm)}/>
        <ResultList results={this.state.results} term={this.state.term} />
      </div>
    );
  },

  /*
   * Event handler for 'change' events coming from the WikiStore
   */
  _onChange: function() {
    this.setState({results: WikipediaStore.getResults()});
  }
});

module.exports = WikipediaThrower;
