import React, { Component } from 'react'
import  "../Components/Css/Resultgolarayi1.css"
class Resultgolarayi extends Component {
    render() {
        console.log(this.props)

        return (
           

                <React.Fragment>
                    
                    <tr className='mytr'>
                        <td>{this.props.flower.name}</td>
                        <td>{this.props.flower.color}</td>
                        <td>{this.props.flower.price}</td>
                    </tr>
                </React.Fragment>
                
            
        )
    }
}
export default   Resultgolarayi;