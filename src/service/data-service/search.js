'use strict';

class SearchService {
  constructor(offers) {
    this._offers = offers;
  }

  findAll(searchText) {
    return this._offers.filter(({title}) => title.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}

module.exports = SearchService;
