jest.dontMock('react/lib/merge');
jest.dontMock('react/lib/mergeInto');
jest.dontMock('react/lib/copyProperties');
jest.dontMock('../../dispatcher/AppDispatcher');
jest.dontMock('../WikipediaStore');

describe('WikipediaStore', function() {

  var Constants = require('../../Constants');

  var actionWikipediaSearch = {
    source: 'VIEW_ACTION',
    action: {
      actionType: Constants.SEARCH,
      results: ["山崎邦正", "山崎拓", "山崎和佳奈", "山崎まさよし", "山崎巌", "山崎裕太", "山崎武司", "山崎藩", "山崎努", "山崎製パン"]
    }
  };

  var AppDispatcher;
  var WikipediaStore;
  var callback;

  beforeEach(function() {
    AppDispatcher = require('../../dispatcher/AppDispatcher');
    WikipediaStore = require('../WikipediaStore');
    callback = AppDispatcher.register.mock.calls[0][0];
  });

  it('registers a callback with the dispatcher',  function() {
    expect(AppDispatcher.register.mock.calls.length).toBe(1);
  });

  it('initializes with no results',  function() {
    var r = WikipediaStore.getResults();
    expect(r).toEqual([]);
  });

  it('finds results',  function() {
    callback(actionWikipediaSearch);
    var r = WikipediaStore.getResults();
    expect(r.length).toEqual(10);
  });
});
