import React, { Component} from 'react';
import { FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive, FaDiceSix } from 'react-icons/fa';
import './Die.css';

export default class Die extends Component {

    render = () => {
        const face = this.props.face;
        return(
            <div className={`Die ${this.props.rolling && 'rolling'}`}>
                {(face==='One') && < FaDiceOne /> }   
                {(face==='Two') && < FaDiceTwo /> }   
                {(face==='Three') && < FaDiceThree /> }   
                {(face==='Four') && < FaDiceFour /> }   
                {(face==='Five') && < FaDiceFive /> }   
                {(face==='Six') && < FaDiceSix /> }   
            </div>
        );   
    }
}