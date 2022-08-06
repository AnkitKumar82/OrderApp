import { ResponseHandlers } from '../middlewares/index.mjs'
import OrderRouter from './Order.mjs'
import TrackerRouter from './Tracker.mjs'

const {
  responseSend
} = ResponseHandlers

const Routes = [
  { path: '/order', router: OrderRouter },
  { path: '/tracker', router: TrackerRouter }
]

Routes.init = (app) => {
  if (!app || !app.use) {
    console.error('[Error] Route Initialization Failed: app / app.use is undefined')
    return process.exit(1)
  }

  // Custom Routes
  Routes.forEach(route => app.use(route.path, route.router))

  // Final Route Pipeline
  app.use('*', responseSend)
}

export default Routes
