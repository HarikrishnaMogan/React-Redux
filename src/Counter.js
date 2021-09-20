
// this is normal redux
/*import {store} from "./store";
function Counter()
{
      console.log(store.getState());
      store.dispatch({type:"Increment"});
      console.log(store.getState());
      store.dispatch({type:"Decrement"});
      store.dispatch({type:"Decrement"});
      console.log(store.getState());

    return<p>Counter</p>
}
export default Counter;*/


//without using hooks
/*
import {connect} from "react-redux";
import {Increment,Decrement,Reset} from "./Reducers/Countreducer";
function Counter(props)
{
   console.log(props);
    return(
    <>
    <p>Counter Component</p>
    <p>Count:{props.count}</p>
    <button onClick={props.increment}>Increment</button>
    <button onClick={props.decrement}>Decremnt</button>
    <button onClick={props.reset}>Reset</button>
    </>
    )
}

const mapStateToProps=(state)=>{
  return state.counter;
}
const mapDispatchToProps =(dispatch)=>{
   return {
       increment: ()=>{dispatch({type:Increment})},
       decrement: ()=>{dispatch({type:Decrement})},
       reset: ()=>{dispatch({type:Reset})},
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
*/

//with hooks
import { Increment,Decrement,Reset } from "./Reducers/Countreducer";
import {useSelector,useDispatch} from "react-redux";

function Counter(props)
{
   const state = useSelector(({counter})=> counter);
    const dispatch = useDispatch();
   
    return(
    <>
    <p>Counter Component</p>
    <p>Count:{state.count}</p>
    <button onClick={()=>{dispatch({type:Increment})}}>Increment</button>
    <button onClick={()=>{dispatch({type:Decrement})}}>Decremnt</button>
    <button onClick={()=>{dispatch({type:Reset})}}>Reset</button>
    </>
    )
}
export default Counter;