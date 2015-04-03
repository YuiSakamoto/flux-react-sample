var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../Constants.js');

var WikipediaActions = {
  search: function(term) {
    $.ajax({
      url: 'http://ja.wikipedia.org/w/api.php?&callback=JSON_CALLBACK',
      jsonp: 'callback',
      dataType: 'jsonp',
      data: {
        action: 'opensearch',
        search: term,
        format: 'json'
      }
    })
    .done(function(msg) {
      AppDispatcher.handleViewAction({
        actionType: Constants.SEARCH,
        term: term,
        results: msg[1]
      });
    });
  }
};

module.exports = WikipediaActions;
