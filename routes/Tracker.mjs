import Express from 'express'
import { TrackerController } from '../controllers/index.mjs'
import { RequestHandlers } from '../middlewares/index.mjs'

const {
  routeMatched
} = RequestHandlers

const {
  add,
  checkCapacity
} = TrackerController

const TrackerRouter = new Express.Router()

TrackerRouter.post('/add', routeMatched, add)
TrackerRouter.get('/checkCapacity/:date', routeMatched, checkCapacity)

export default TrackerRouter
