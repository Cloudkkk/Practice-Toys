import './App.css';
import html2canvas from 'html2canvas';
import { useReducer} from 'react';

const initialState = {count:0};

const  reducer   = (state = initialState, type) => {
switch (type) {

case "ADD":
  return { count:state.count++ }

default:
  return state
}
}
function App() {
  // useEffect(()=>{
   
  // })
  // const captureElement = (element) => {
  //   html2canvas(element).then(canvas => {
  //   document.body.appendChild(canvas)
  //   })
  //   }


  const [state,dispatch] = useReducer(reducer,initialState);

    
  return (
    <div className="App">
           {/* <img
                alt="some value"
                src=""
                width="120"
                height="120"
            ></img> */}

           {state.count}
           <button onClick={()=>{
            dispatch('ADD')
           }}>
ADD
           </button>
    {/* <button onClick={()=>{captureElement(document.body)}}>
点击截屏
    </button> */}
    </div>
    
  );
}

export default App;
