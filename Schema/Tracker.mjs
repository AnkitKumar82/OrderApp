import mongoose from 'mongoose'
import moment from 'moment-timezone'
import { Status } from '../constants/index.mjs'

const { Schema } = mongoose

const OrderSchema = new Schema({
  //uniqueIdf = DDMMYYYY - unique for each day - done by cron each day, later can be edited or will be considered last day automatically
  uniqueIdf: { type: String, default: moment().format('DDMMYYYY') , unique: true, required: true, index: true },
  totalCapacity: {type: Number, required: true},
  remainingCapacity: {type: Number, required: true},
  pricePerUnit: {type: Number, required: true}
})

export default OrderSchema
