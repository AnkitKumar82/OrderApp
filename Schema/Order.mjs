import mongoose from 'mongoose'
import moment from 'moment-timezone'
import { Status } from '../constants/index.mjs'

const { Schema } = mongoose

const OrderSchema = new Schema({
  placedAt: { type: Date, default: moment(), required: true },
  status: {type: String, enum: Status.ENUM , default: Status.DEFAULT, required: true},
  
  totalAmount: {type: Number, required: true},
  pricePerUnit: {type: Number, required: true},
  orderedUnits: {type: Number, required: true},
})

export default OrderSchema
