var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../Constants.js');
var Request = require('superagent');

var WikipediaActions = {
  search: function() {
    Request.get('https://api-dev012.mercari.jp/store/get_items?_access_token=21fc0d9246439e70a400e8d97c569babd4f2d907&limit=60&status=on_sale%2Ctrading%2Csold_out')
      .end(function(err, res) {
        AppDispatcher.handleViewAction({
          actionType: Constants.SEARCH,
          results: res.body
        });
      });
  }
};

module.exports = WikipediaActions;
