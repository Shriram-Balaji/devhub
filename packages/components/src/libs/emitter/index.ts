import { EventEmitter, EventSubscription } from 'fbemitter'

export type EventEmitter = EventEmitter
export type EventSubscription = EventSubscription

export interface EmitterTypes {
  FOCUS_ON_COLUMN: {
    animated?: boolean
    columnId: string
    columnIndex: number
    focusOnVisibleItem?: boolean
    highlight?: boolean
    scrollTo?: boolean
  }
  SCROLL_DOWN_COLUMN: { columnId: string }
  SCROLL_UP_COLUMN: { columnId: string }
}

const _emitter = new EventEmitter()

export const emitter = {
  addListener<K extends keyof EmitterTypes>(
    key: K,
    listener: (payload: EmitterTypes[K]) => void,
  ) {
    return _emitter.addListener(key, listener)
  },
  emit<K extends keyof EmitterTypes>(key: K, payload: EmitterTypes[K]) {
    _emitter.emit(key, payload)
  },
}
