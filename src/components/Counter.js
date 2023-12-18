import classes from './Counter.module.css';
import { useSelector , useDispatch } from 'react-redux';
import { counterActions } from '../store/index';

const Counter = () => {
  const counter = useSelector(state=>state.counter.counter);
  const show = useSelector(state=>state.counter.showToggle);
  const dispatch = useDispatch();

  const incrementDispatch=()=>{
    // dispatch({type:'increment'});
    dispatch(counterActions.increment());
  }
  const decrementDispatch=()=>{
    // dispatch({type:'decrement'});
    dispatch(counterActions.decrement());
  }
  
  const toggleCounterHandler = () => {
    // dispatch({type:'toggle'});
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show &&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementDispatch}>Increment</button>
        <button onClick={decrementDispatch}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
