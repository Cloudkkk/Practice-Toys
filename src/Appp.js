import React from 'react'
import { useContext,useReducer } from 'react'
const initialState = {
    a:'1',
    b:'2'
}
const reducer = (prevstate,action)=>{
    switch(action){
        case 'ADD1':
            return {...prevstate,a:prevstate.a + '1'}
        case 'ADD2':
            return {...prevstate,b:prevstate.b + '2'}
        default :
        return prevstate;
    }
    
}
export default function APPP() {
    const [state,dispatch] = useReducer(reducer,initialState);

  return (
    <>
    <Child1 dispatch = {dispatch}/>
    <Child2 {...state}/>
    <Child3 {...state}/>
    </>
  )
}

function Child1(props){
    let dispatch = props.dispatch;
    console.log(dispatch);
return (
    <>
    <button onClick={()=>{dispatch('ADD1')}}  > change 1</button>
    <button onClick={()=>{dispatch('ADD2')}}  > change 2</button>
    </>
    )
}
function Child2(props){
    let {a} = {...props}

return (
    <h2>{a}</h2>
)
}
function Child3(props){
    let {b} = {...props}
return (
    <h2>{b}</h2>
)
}