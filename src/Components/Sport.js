import React, { Component } from 'react'
import axios from 'axios'
import firstpage  from '../Components/Css/firstpage.css'
class Sport extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             url:[]
        }
    }
    

    
    render() {
        return (
            <div>
                 <iframe className='myiframe' src="https://www.varzesh3.com/" ></iframe>

            </div>
        )
    }
}
export default  Sport;