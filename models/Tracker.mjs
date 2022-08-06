import { TrackerSchema } from '../Schema/index.mjs'
import mongoose from 'mongoose'
import moment from 'moment-timezone'
import { Errors } from '../constants/index.mjs'
const { model } = mongoose

const Tracker = new model('Tracker', TrackerSchema)

const TrackerModel = {
  add,
  checkCapacity,
  todayTracker,
  findByUniqueIdf,
  updateCapacityById
}

async function add(attrs = {}) {
  try {
    const tracker = await Tracker.create(attrs)
    return tracker
  } catch (error) {
    if (error.name === 'MongoServerError' && error.code === 11000) {
      throw Errors.TRACKER_ALREADY_EXISTS
    }
    throw error
  }
}

async function updateCapacityById(id = '', attrs = {}) {
  const options = {
    new: true 
  } 
  const order = await Tracker.findByIdAndUpdate(id, attrs, options)
  if (!order) {
    throw Errors.TRACKER_NOT_FOUND_BY_ID
  }
  return order
}

async function checkCapacity(date) {
  if (!date) {
    throw Errors.BAD_REQUEST
  }
  const uniqueIdf = moment(date, 'DD-MM-YYYY').format('DDMMYYYY')
  const tracker = await findByUniqueIdf(uniqueIdf)
  const { remainingCapacity, totalCapacity } = tracker
  return { remainingCapacity, totalCapacity }
}

async function todayTracker() {
  const uniqueIdf = moment().format('DDMMYYYY')
  const tracker = await findByUniqueIdf(uniqueIdf)
  return tracker
}

async function findByUniqueIdf(uniqueIdf) {
  const tracker = await Tracker.findOne({ uniqueIdf })
  if(!tracker) {
    throw Errors.TRACKER_NOT_FOUND_BY_UNIQUE_IDF
  }
  return tracker
}


export default TrackerModel
