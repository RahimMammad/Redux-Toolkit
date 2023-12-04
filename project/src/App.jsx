import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decreament, increment, increaseByAkhmad } from './redux/CounterSlice'

export function Counter() {
  const count = useSelector(state => state.counter.akif);
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decreament())}


        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(increaseByAkhmad(69))}

        >
          Increment by Amount
        </button>
      </div>
    </div>
  )
}

export default Counter