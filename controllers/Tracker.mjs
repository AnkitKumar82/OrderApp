import { TrackerModel } from '../models/index.mjs'

const TrackerController = {
  add,
  checkCapacity
}

async function add(request, response, next) {
  try {
    const { body } = request
    const data = await TrackerModel.add(body)
    const responseBody = { data }
    response.body = responseBody
    process.nextTick(next)
  } catch (error) {
    response.status(error.status || 500)
    return response.send(error).end()
  }
}

async function checkCapacity(request, response, next) {
  try {
    const { params: { date } } = request
    const data = await TrackerModel.checkCapacity(date)
    const responseBody = { data }
    response.body = responseBody
    process.nextTick(next)
  } catch (error) {
    response.status(error.status || 500)
    return response.send(error).end()
  }
}

export default TrackerController
