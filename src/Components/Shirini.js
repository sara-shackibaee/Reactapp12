import React, { Component } from 'react'
import {cakelist} from '../Lib/Cakelist'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Resultshirini from '../Components/Resultshirini.js'
import Table from 'react-bootstrap/Table'
import  "../Components/Css/Resultgolarayi1.css"
class Shirini extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.history.goBack}>back</button> 

                <Table responsive >
                    <thead >
                        <tr className='myth1'>
                            <th >flower Name</th>
                            <th>flower color</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        { cakelist.map((cake,key=cake.id)=><Resultshirini cake={cake}></Resultshirini>) }
                    </tbody>
                
                   
                </Table> 
            </div>
        )
    }
}
export default Shirini;
