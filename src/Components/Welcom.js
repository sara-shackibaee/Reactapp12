import React, { Component } from 'react'

class Welcom extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    
    render() {
       console.log(this.props.i)
        return (
            <div>
                {/* <p>{this.props.items.firstname}</p>
                <p>{this.props.items.lastname}</p>
                <p>{this.props.items.email}</p> */}
            </div>
        )
    }
}
export default  Welcom;