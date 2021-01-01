import React ,{useState} from 'react'
import { Button, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap'
import  Welcom from '../Components/Welcom.js'

function Login(props) {

    
    const [items, setitems] = useState({firstname:'',lastname:'',email:''})
    

// {e =>setitems({...items,lastname:e.target.value})}
   function handleclick(e){
        alert("e is:",e.target.value)
        // document.body.style.backgroundColor = "red"
       
    }
    return (
        <div>
            <Form onSubmit={(e)=>e.preventDefault()}>
                Name:<FormControl type='text' onChange={e =>setitems({...items,firstname:e.target.value})}></FormControl>
                Family:<FormControl type='text' onChange={e =>setitems({...items,lastname:e.target.value})}></FormControl>
                Email:<FormControl type='text' onChange={e =>setitems({...items,email:e.target.value})}></FormControl>
                <Button type='submit' onClick={handleclick}>click me!</Button>
            </Form>
            <button onClick={props.history.goBack}>back</button>
            {/* <Welcom i={this.handleclick}/> */}
            {/* <p>{items.firstname}</p>
            <p>{items.lastname}</p>
            <p>{items.email}</p> */}
           
           
        </div>
    )
}
export default Login;