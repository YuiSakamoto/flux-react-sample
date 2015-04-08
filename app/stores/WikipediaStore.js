var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../Constants');
var merge = require('react/lib/merge');

var CHANGE_EVENT = 'change';

var _term;
var _results = [];

var WikipediaStore = merge(EventEmitter.prototype, {

  getResults: function() {
    return _results;
  },

  getTerm: function() {
    return _term;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register to handle all updates
AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    case Constants.SEARCH:
      _results = action.results.data;
      break;

    default:
      return true;
  }

  // This often goes in each case that should trigger a UI change. This store
  // needs to trigger a UI change after every view action, so we can make the
  // code less repetitive by putting it here.  We need the default case,
  // however, to make sure this only gets called after one of the cases above.
  WikipediaStore.emitChange();

  return true; // No errors.  Needed by promise in Dispatcher.
});

module.exports = WikipediaStore;
