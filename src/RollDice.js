import React, {Component} from 'react';
import Die from './Die';
import './RollDice.css';

export default class RollDice extends React.Component {
    static defaultProps = {
       sides: ['One', 'Two', 'Three', 'Four', 'Five', 'Six'] 
    }
    state = {
        die1:"One",
        die2:"Two",
        isRolling: false
    }
    roll = () => {
        const newDie1 = this.props.sides[Math.floor(Math.random()* this.props.sides.length)];
        const newDie2 = this.props.sides[Math.floor(Math.random()* this.props.sides.length)];
        this.setState({
            die1: newDie1,
            die2: newDie2,
            isRolling: true, 
        });

        setTimeout(()=> {
            this.setState({isRolling: false})
        }, 1000);
    }

    render = () => {
        return(
            <div className='RollDice'>
                <div className='RollDice-wrapper'>
                    <Die face={this.state.die1} rolling={this.state.isRolling}/> 
                    <Die face={this.state.die2} rolling={this.state.isRolling}/>
                </div>
                 
                <button onClick={this.roll} disabled={this.state.isRolling}>
                    {this.state.isRolling ? 'Rolling...' : 'Roll Dice!' }
                </button>
            </div>
        )    
    }
}