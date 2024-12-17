import { useState, useEffect } from 'react'
import './App.css'
import JuiceForm from './components/JuiceForm';
import { Link } from 'react-router-dom';
import {juiceService} from './services/juice';

function Admin() {

  

    const [checker, setChecker] = useState(false)
    const [juice, setJuice] = useState()

    const getJuice = async () =>{
      const response = await juiceService.getJuice();
      setJuice(response)
    }

    useEffect(()=>{
      getJuice();
    },[])


    const renderForm = () => {
        if(checker === false){
            return(
                <button onClick={()=>{setChecker(true)}}>Add Juice</button>
            )
        }else{
            return(
                <JuiceForm onCancel={()=>{setChecker(false)}}/> 
            )
        }
    }

  return (
    <>
      <h1>this is the secret admin page</h1>
      <p>are you sure you want to be here?</p>
      {renderForm()}
    </>
  )
}

export default Admin
