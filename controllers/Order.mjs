import { OrderModel } from '../models/index.mjs'

const OrderController = {
  add,
  updateById,
  updateStatusById,
  deleteById
}

async function add(request, response, next) {
  try {
    const { body } = request
    const data = await OrderModel.add(body)
    const responseBody = { data }
    response.body = responseBody
    process.nextTick(next)
  } catch (error) {
    response.status(error.status || 500)
    return response.send(error).end()
  }
}

async function updateById(request, response, next) {
  try {
    const { body, params: { id } } = request
    const data = await OrderModel.updateById(id, body)
    const responseBody = { data }    

    response.body = responseBody
    process.nextTick(next)
  } catch (error) {
    response.status(error.status || 500)
    return response.send(error).end()
  }
}

async function updateStatusById(request, response, next) {
  try {
    const { body, params: { id } } = request
    const data = await OrderModel.updateStatusById(id, body)
    const responseBody = { data }    

    response.body = responseBody
    process.nextTick(next)
  } catch (error) {
    response.status(error.status || 500)
    return response.send(error).end()
  }
}

async function deleteById(request, response, next) {
  try {
    const { params: { id } } = request
    const data = await OrderModel.deleteById(id)
    const responseBody = { data }

    response.body = responseBody
    process.nextTick(next)
  } catch (error) {
    response.status(error.status || 500)
    return response.send(error).end()
  }
}

export default OrderController
