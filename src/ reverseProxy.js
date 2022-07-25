import React from 'react';
import axios from 'axios';

axios
.get('ajax/comingList?ci=1&limit=10&movieIds=&token=&optimus_uuid=4F69D3700C1711ED861D91A1316D61D973531665562F41C781A20752109EA13D&optimus_risk_level=71&optimus_code=10')
.then((res)=>{
    console.log(res.data);
})
export default function App() {
  return (
    <div>电影</div>
  )
}
