
import React, { Component } from 'react'
import axios from 'axios'
import Iframe from 'react-iframe'
import firstpage  from '../Components/Css/firstpage.css'

class Ashpazi extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             url : ''
        }
    }
    


    componentDidMount= ()=>{
        // axios.get('https://persianv.com/',{
        //         headers: {
        //         'Access-Control-Allow-Origin': true,},})
        //         .then((response) => this.setState({url:response.data}))
        // <iframe src="https://www.example.com/show?data..." width="540" height="450"></iframe>

        
    }
    render() {
        return (
            <div>
             <br></br>
              <iframe className='myiframe' src="https://ashpaz.tv/film/" ></iframe>

            </div>
        )
    }
}
export default   Ashpazi;