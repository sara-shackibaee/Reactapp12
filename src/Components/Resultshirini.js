
import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import  "../Components/Css/Resultgolarayi1.css"
class Resultshirini extends Component {
    render() {
        return (
            // <React.Fragment>
                    
                    <tr className='mytr1'>
                        <td>{this.props.cake.name}</td>
                        
                        <td>{this.props.cake.price}</td>
                    </tr>
                // </React.Fragment>
        )
    }
}

export default Resultshirini;