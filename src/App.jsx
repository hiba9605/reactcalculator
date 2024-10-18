
import { useState } from 'react'
import './App.css'

function App() {

  const [input,setInput]=useState('')
  const [result,setResult]=useState('')

  const handleClick=(value)=>{
    setInput(input+value)

  }

  const clear=()=>{
    setInput('')
    setResult('')
  }
  const del=()=>{
    setInput((pre)=>pre.slice(0,-1));

  }

  const handleCalculate=()=>{
    try{
      setResult(eval(input))
    }catch(error){
      setResult('error')
    }
  }

  
 
  

  

  return (
    <>


       <div style={{width:'100%',height:'100vh'}} className='bg-warning justify-content-center align-items-center d-flex '>
        <div style={{height:'520px',width:'410px',background:'aliceblue',borderRadius:'10px'}}>
          <input style={{marginTop:'10px',width:'390px',height:'50px',marginLeft:'10px',color:'white',textAlign:'right',fontSize:'50px',border:'none',background:"transparent"}} className='bg-dark' type="text" placeholder='0' value={input}  /> <br /> 

          <input style={{marginTop:'10px',width:'390px',height:'50px',marginLeft:'10px',color:'white',textAlign:'right',fontSize:'50px',border:'none',marginTop:'-1px'}} className='bg-dark' type="text"  value={result} /> 
            

          <button onClick={clear} style={{marginLeft:'10px',marginTop:'10px',width:'190px',height:'70px',background:'white',color:'black',border:'none',fontWeight:'bolder',borderRadius:'5px'}}>AC</button>
          <button onClick={del} style={{height:'70px',width:'90px',marginLeft:'10px',background:'white',border:'none',fontWeight:'bolder',borderRadius:'5px'}}>DEL</button>
          <button onClick={()=>handleClick("/")} style={{height:'70px',width:'90px',marginLeft:'10px',marginTop:'10px',background:'white',border:'none',fontWeight:'bolder',borderRadius:'5px'}}>/</button>

          <button onClick={()=>handleClick("7")} style={{height:'70px',width:'90px',marginLeft:'10px',marginTop:'10px',background:'white',border:'none',fontWeight:'bolder',borderRadius:'5px'}}>7</button>
          <button onClick={()=>handleClick("8")} style={{height:'70px',width:'90px',marginLeft:'10px',background:'white',border:'none',fontWeight:'bolder',borderRadius:'5px'}}>8</button>
          <button onClick={()=>handleClick("9")} style={{height:'70px',width:'90px',marginLeft:'10px',background:'white',border:'none',fontWeight:'bolder',borderRadius:'5px'}}>9</button>
          <button onClick={()=>handleClick("*")} style={{height:'70px',width:'90px',marginLeft:'10px',background:'white',border:'none',fontWeight:'bolder',borderRadius:'5px'}}>*</button>

          <button onClick={()=>handleClick("4")} style={{height:'70px',width:'90px',marginLeft:'10px',marginTop:'10px',background:'white',border:'none',fontWeight:'bolder'}}>4</button>
          <button onClick={()=>handleClick("5")} style={{height:'70px',width:'90px',marginLeft:'10px',background:'white',border:'none',fontWeight:'bolder',borderRadius:'5px'}}>5</button>
          <button onClick={()=>handleClick("6")} style={{height:'70px',width:'90px',marginLeft:'10px',background:'white',border:'none',fontWeight:'bolder',borderRadius:'5px'}}>6</button>
          <button onClick={()=>handleClick("+")} style={{height:'70px',width:'90px',marginLeft:'10px',background:'white',border:'none',fontWeight:'bolder'}}>+</button>

          <button onClick={()=>handleClick("1")} style={{height:'70px',width:'90px',marginLeft:'10px',marginTop:'10px',background:'white',border:'none',fontWeight:'bolder'}}>1</button>
          <button onClick={()=>handleClick("2")} style={{height:'70px',width:'90px',marginLeft:'10px',background:'white',border:'none',fontWeight:'bolder',borderRadius:'5px'}}>2</button>
          <button onClick={()=>handleClick("3")} style={{height:'70px',width:'90px',marginLeft:'10px',background:'white',border:'none',fontWeight:'bolder',borderRadius:'5px'}}>3</button>
          <button onClick={()=>handleClick("-")} style={{height:'70px',width:'90px',marginLeft:'10px',background:'white',border:'none',fontWeight:'bolder',borderRadius:'5px'}}>-</button>

          <button onClick={()=>handleClick("0")} style={{height:'70px',width:'90px',marginLeft:'10px',marginTop:'10px',background:'white',border:'none',fontWeight:'bolder'}}>0</button>
          <button onClick={()=>handleClick(".")} style={{height:'70px',width:'90px',marginLeft:'10px',background:'white',border:'none',fontWeight:'bolder',borderRadius:'5px'}}>.</button>
          <button onClick={handleCalculate} style={{height:'70px',width:'190px',marginLeft:'10px',background:'white',border:'none',fontWeight:'bolder',borderRadius:'5px'}}>=</button>
        </div>
        
         </div>
    </>
  )
}

export default App
