const Errors = {
  ORDER_NOT_FOUND_BY_ID: {
    status: 401,
    message: 'Order Not Found By Id',
    code: 'ERROR_01'
  },
  BAD_REQUEST: {
    status: 402,
    message: 'Bad Request',
    code: 'ERROR_02'
  },
  TRACKER_NOT_FOUND_BY_UNIQUE_IDF: {
    status: 401,
    message: 'Tracker Not Found',
    code: 'ERROR_03'
  },
  INSUFFICIENT_CAPACITY: {
    status: 401,
    message: 'Insufficient Capacity',
    code: 'ERROR_04'
  },
  TRACKER_NOT_FOUND_BY_ID: {
    status: 401,
    message: 'Tracker Not Found By Id',
    code: 'ERROR_05'
  },
  TRACKER_ALREADY_EXISTS: {
    status: 401,
    message: 'Tracker Already Exists',
    code: 'ERROR_05'
  }
}

export default Errors
