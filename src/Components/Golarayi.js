




import React, { Component } from 'react'
import {Flowerlist} from '../Lib/Flowerslist'
import  "../Components/Css/Resultgolarayi1.css"
import Table from 'react-bootstrap/Table'
import  Resultgolarayi from "./Resultgolarayi"

class Golarayi extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.history.goBack}>back</button> 

                <Table responsive >


                    <thead >
                        <tr className='myth'>
                            <th >flower Name</th>
                            <th>flower color</th>
                            <th>flower price</th>
                        </tr>
                    </thead>
                    <tbody>
                       { Flowerlist.map((flower,key =flower.id)=>< Resultgolarayi flower={flower}></ Resultgolarayi>) }
                    </tbody>
                
                   
                </Table>  
               
                
            </div>
        )
    }
}

export default Golarayi;