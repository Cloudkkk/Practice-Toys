import React from 'react'
import { useState,useEffect} from 'react';
import './index.css';

//测试PV打点
export default function App() {
    const [element,setElement] = useState([]);
    
    let callback = (entries)=>{
        if(entries[0].isIntersecting){
            //此时是进入视窗
            console.log('PVPVPVPVPVPVP');
        }else{
            //划出视窗不计算
        }
        console.log(entries);
        // 特殊情况会存在entries中有两个元素
        //entries.length>1?console.log(entries):console.log();;
    }
     //初始化observer
    useEffect(()=>{
        let options = {
            root: document.querySelector('#scrollArea'),
            rootMargin: '0px',
            // threshold: [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9],
            threshold: 1.0
          }
          console.log(options);
        window.observer = new IntersectionObserver(callback, options);
        return ()=>{
            IntersectionObserver.disconnect()
        }
    },[])
    const addElement = ()=>{
        setElement(element.concat(['test'+Math.floor(100*Math.random(1))]))
        
    }
    //点击元素订阅
    const addObserve = (i)=>{
        i.target.innerHTML += '订阅';
        window.observer.observe(i.target);
    }
  return (
    <>
    <div id='scrollArea' className='container'>
    {element.map((item,index)=>{
        return (
            <div key={index} className='element'onClick={addObserve}>{item}</div>
                )
    })}
    </div>
    <button onClick={addElement}>add元素</button>
    </>
  )
}
