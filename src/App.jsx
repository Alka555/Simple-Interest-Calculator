
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';



function App() {



const[principle,setPrinciple]=useState(0)
const[rate,setRate]=useState(0)
const[year,setYear]=useState(0)
const[interest,setInterest]=useState(0)
const [isPrinciple, setIsPrinciple] = useState(true)
const [isRate, setIsRate] = useState(true)
const [isYear, setIsYear] = useState(true)


const validate =(e) => {
    const name = e.target.name
    const value = e.target.value
    

  if(!!value.match(/^[0-9]*$/)){
    if(name == 'principle'){
      setPrinciple(value)
      setIsPrinciple(true)
    }
    else if(name == 'rate'){
      setRate(value)
      setIsRate(true)

    }
    else{
      setYear(value)
      setIsYear(true)

    }
  }
  else{
    if(name == 'principle'){
      setPrinciple(value)
      setIsPrinciple(false)
    }
    else if(name == 'rate'){
      setRate(value)
      setIsRate(false)

    }
    else{
      setYear(value)
      setIsYear(false)

    }
  }
}
 
const handleReset = () => {
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setIsPrinciple(true)
  setIsRate(true)
  setIsYear(true)
}

const handleCalculate = (e) => {
  e.preventDefault()
  if(principle=="" || rate=="" || year==""){
    alert('Please fill the form completely')
  }
  else{
    setInterest((principle*rate*year)/100)
  }
}

  return (
    <>
    <div style={{backgroundColor:'black'}} className='p-5 d-flex justify-content-center align-items-center'>
      <div style={{backgroundColor:'white',width:'450px', height:'600px'}} className='p-3 rounded'>
          <h1 className='text-center'>Simple Interest App</h1>
          <p className='text-center'>Calculate your simple interest easily</p>
          <div style={{height:'100px', backgroundColor:'orange'}} className='p-3 mt-5 shadow rounded d-flex justify-content-center align-items-center flex-column'>
            <h1 className='fw-bold'>₹ {interest}</h1>
            <p>Total Simple Interest</p>

           
          </div>
          <form className='mt-4' onSubmit={handleCalculate}>
              <div className="mb-3">
              <TextField id="outlined-basic" label="₹ Principle Amount" value={principle||''} variant="outlined" className='w-100' onChange={(e)=>validate(e)} name='principle'/>
              {!isPrinciple &&
                <p className='text-danger'>*Invalid Input</p>
              }
              </div>

              
              <div className="mb-3">
              <TextField id="outlined-basic" label="Rate of Interest(p.a)%" value={rate||''} variant="outlined" className='w-100' onChange={(e)=>validate(e)} name='rate' />
              {!isRate &&
                <p className='text-danger'>*Invalid Intput</p>}

              </div>
              <div className="mb-3">
              <TextField id="outlined-basic" label="Year(Yr)" variant="outlined" value={year||''} className='w-100' onChange={(e) => validate(e)} name='year'/>
                {!isYear &&
                  <p className='text-danger'>*Invalid Input</p>
                }
              </div>

              <div className='mb-3 d-flex justify-content-between'>
                <Button variant="contained" color="success" style={{width:"180px",padding:"15px"}} disabled={isPrinciple && isRate && isYear ? false : true} type="submit">Calculate</Button>
                <Button variant="outlined" color="warning" style={{width:"180px",padding:"15px"}} onClick={handleReset}>Reset</Button>
              </div>
             
            </form>
      </div>
    </div>
    </>
  )
}

export default App