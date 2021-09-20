
export const push="push";
export const pop ="pop";
export const empty = "empty";

const ArrayReducer=(state={numbers:[]},action)=>{

    switch (action.type) {
        case push:{
            const numbers = [...state.numbers];
            numbers.push(Math.random());
            return {numbers}
         }
         case pop:{
             const numbers = [...state.numbers]
             numbers.pop();
             return {numbers}
         }
         case empty :{
             return {numbers:[]}
         }
         default:{
             return state;
         }
    }
}

export default ArrayReducer;