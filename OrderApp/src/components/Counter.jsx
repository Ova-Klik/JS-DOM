import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement} from '../slice/counterSlice';

const Counter = ()=>{
    const value = useSelector((state)=> state.counter.count);
    const dispatch = useDispatch();

    return(
        <div>
           <p>{value}</p>
           <button onClick={() => dispatch(increment())}>+</button>
           <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}
export default Counter;