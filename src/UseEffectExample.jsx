import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {
    const[count,setCount]=useState(0);
    console.log('component Rendered');
    useEffect(()=>{
        console.log('useeffect executed');
    }   );
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>click</button>
      <br/>
      {count}Test
    </div>
  )
}

export default UseEffectExample
