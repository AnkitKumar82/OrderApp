import Express from 'express'
import { OrderController } from '../controllers/index.mjs'
import { RequestHandlers } from '../middlewares/index.mjs'

const {
  routeMatched
} = RequestHandlers

const {
  add,
  updateById,
  updateStatusById,
  deleteById
} = OrderController

const OrderRouter = new Express.Router()

OrderRouter.post('/add', routeMatched, add)

OrderRouter.patch('/update/:id', routeMatched, updateById)
OrderRouter.patch('/update-status/:id', routeMatched, updateStatusById)
OrderRouter.delete('/delete/:id', routeMatched, deleteById)



export default OrderRouter
