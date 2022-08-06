import mongoose from 'mongoose'
import moment from 'moment-timezone'

const { Schema } = mongoose

const OrderSchema = new Schema({
  uniqueIdf: { type: String, default: moment().format('DDMMYYYY') , unique: true, required: true, index: true },
  totalCapacity: {type: Number, required: true},
  remainingCapacity: {type: Number, required: true},
  pricePerUnit: {type: Number, required: true}
})

export default OrderSchema
