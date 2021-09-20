export const Increment ="Increment";
export const Decrement ="Decrement";
export const Reset = "Reset";

const CountReducer =(state={count:0},action)=>
{
    
    switch(action.type)
    {
        case Increment:{
           return {count:state.count+1}
        }
        case Decrement:{
            return {count:state.count-1}
        }
        case Reset :{
            return {count:0}
        }
        default:{
            return state;
        }
    }
    
}
export default CountReducer;
