import React, {useReducer} from "react";

function reducer(count, action) {
    switch (action.type) {
        case 'increase': return count+1;
        case 'decrease': return count-1;
        case 'double': return count*2;
        case 'divby2': return count/2;
        default: return count;
    }
}
export default function UseReducerApp() {
    const [count, dispatch] = useReducer(reducer, 0);
    // syntax: const [state, dispatch] = useReducer(reducer, initialValue)
    // hoat dong: dispatch({type='tpye'}) => dinh nghia action vua xay ra, dong thoi goi reducer
    // reducer(state, dispatch) => xu ly state theo loai dispatch duoc truyen vao
    //  ex: dispatch({type='a'}) => call reducer(state, 'a')

    return (
        <div>
            <h3 style={{color: "green", fontSize: "20px"}}>Count: {count}</h3>
            <button onClick={() => dispatch({type:"increase"})}>+1</button>
            <button onClick={() => dispatch({type:"decrease"})}>-1</button>
            <button onClick={() => dispatch({type:"double"})}>x2</button>
            <button onClick={() => dispatch({type:"divby2"})}>/2</button>
        </div>
    )
}