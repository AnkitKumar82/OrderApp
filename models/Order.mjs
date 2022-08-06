import { OrderSchema } from '../Schema/index.mjs'
import mongoose from 'mongoose'
import moment from 'moment-timezone'
import { Errors } from '../constants/index.mjs'
import TrackerModel from './Tracker.mjs'
const { model } = mongoose

const Order = new model('Order', OrderSchema)

const OrderModel = {
  add,
  updateById,
  updateStatusById,
  deleteById
}

async function add(attrs = {}) {
  const { 
    orderedUnits = 0 
  } = attrs
  const tracker = await TrackerModel.todayTracker()
  const { 
    _id: trackerId,
    remainingCapacity,
    pricePerUnit 
  } = tracker
  
  if(remainingCapacity < orderedUnits) {
    throw Errors.INSUFFICIENT_CAPACITY
  }

  const createProps = {
    totalAmount: pricePerUnit*orderedUnits,
    pricePerUnit,
    orderedUnits
  }

  const order = await Order.create(createProps)
  if(order) {
    await TrackerModel.updateCapacityById(trackerId, {remainingCapacity : remainingCapacity - orderedUnits})
  }
  return order
}

async function updateById(id = '', attrs = {}) {
  const options = {
    new: true 
  } 
  const order = await Order.findByIdAndUpdate(id, attrs, options)
  if (!order) {
    throw Errors.ORDER_NOT_FOUND_BY_ID
  }
  return order
}

async function updateStatusById(id = '', attrs = {}) {
  //Allow only status update
  const { status = '' } = attrs
  const options = {
    new: true 
  } 
  const order = await Order.findByIdAndUpdate(id, { status }, options)
  if (!order) {
    throw Errors.ORDER_NOT_FOUND_BY_ID
  }
  return order
}

async function deleteById(id = '') {
  const order = await Order.findByIdAndDelete(id) 
  if (!order) {
    throw Errors.ORDER_NOT_FOUND_BY_ID
  }
  return order
}

export default OrderModel
