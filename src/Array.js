/*
//this is normal redux
import {store} from "./store";
export default function Array()
{
      console.log(store.getState());
      store.dispatch({type:"push"});
      store.dispatch({type:"push"});
      console.log(store.getState());
      store.dispatch({type:"pop"});
      console.log(store.getState());
    return(
        <>
        <p>Array component</p>
        </>
    );
}*/

//without hooks
/*
import {connect} from "react-redux";
import {push,pop,empty} from "./Reducers/ArrayReducer";
 function Array(props)
{
    console.log(props);

    return(
        <>
        <p>Array component</p>
        <ul>
            {
                props.numbers.map((n)=>{
                   return <li key={n}>{n}</li>
                })
            }
        </ul>
        <button onClick={props.push}>Push</button>
        <button onClick={props.pop}>Pop</button>
        <button onClick={props.empty}>Empty</button>
        </>
    );
}

const mapStateToProps =(state)=>{
  return state.Array;
}
const mapDispatchToProps=(dispatch)=>{
   return{
       push: function()
       {
           dispatch({type:push});
       },
       pop:()=>{dispatch({type:pop})},
       empty:()=>{dispatch({type:empty})}
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Array);*/


//with hooks
import {push,pop,empty} from "./Reducers/ArrayReducer";
import {useSelector,useDispatch} from "react-redux";
import { useState } from "react";

function Array(props)
{
   const state= useSelector(({Array})=>Array);
   const dispatch = useDispatch();

    return(
        <>
        <p>Array component</p>
        <ul>
            {
                state.numbers.map((n)=>{
                   return <li key={n}>{n}</li>
                })
            }
        </ul>
        <button onClick={()=>{dispatch({type:push})}}>Push</button>
        <button onClick={()=>{dispatch({type:pop})}}>Pop</button>
        <button onClick={()=>{dispatch({type:empty})}}>Empty</button>
        </>
    );
}
export default Array;