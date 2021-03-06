'use strict';

const {nanoid} = require(`nanoid`);
const {MAX_ID_LENGTH} = require(`../../constants`);

class OfferService {
  constructor(offers) {
    this._offers = offers;
  }

  create(offer) {
    const newOffer = {id: nanoid(MAX_ID_LENGTH), comments: [], ...offer};
    this._offers.push(newOffer);

    return newOffer;
  }

  drop(id) {
    const offer = this.findOne(id);
    if (!offer) {
      return null;
    }

    this._offers = this._offers.filter((i) => i.id !== id);
    return offer;
  }

  findAll() {
    return this._offers;
  }

  findOne(id) {
    return this._offers.find((i) => i.id === id);
  }

  update(id, offer) {
    const oldOffer = this.findOne(id);
    return Object.assign(oldOffer, offer);
  }
}

module.exports = OfferService;
