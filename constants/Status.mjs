const MAP = {
  PLACED: 'PLACED',
  PACKED: 'PACKED',
  DISPATCHED: 'DISPATCHED',
  DELIVERED: 'DELIVERED'
}

const ENUM = Object.values(MAP)

const DEFAULT = MAP.PLACED

const status = {
  ENUM,
  DEFAULT,
  MAP
}

export default status
