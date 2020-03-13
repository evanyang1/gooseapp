const { Schema, model } = require('mongoose')

const Item = model('item', new Schema({
  text: String
}))

module.exports = Item
