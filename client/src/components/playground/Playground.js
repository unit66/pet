import React, { Component } from 'react';
import Case1 from './cases/case1/Case1';
import Case2 from './cases/case2/Case2';
import Case3 from './cases/case3/Case3';
import Case4 from './cases/case4/Case4';

export default class Playground extends Component{
    constructor() {
        super()
        this.state = {
            activeCase: 'case4'
        };
        this.showCase = this.showCase.bind(this);
    }

    showCase = ({ target }) => {
        this.setState(() => {
            return {
                activeCase: target.id,
            }
        })
    };

    render(){
        return (
            <section className="playground">
                <p>This is my <span className="teal">playground</span></p>
                {/*Если ничего нет - заглушка*/}
                {/*<img src="./img/misc/officer-barbrady.jpg"/>*/}
                {/*<p>There`s nothing to see here atm - just move along.</p>*/}
                <nav className="caseLinks">
                    <a href="#" className={ this.state.activeCase === 'case1' ? 'active' : undefined } onClick={ this.showCase } id="case1">Case 1</a>
                    <a href="#" className={ this.state.activeCase === 'case2' ? 'active' : undefined } onClick={ this.showCase } id="case2">Case 2</a>
                    <a href="#" className={ this.state.activeCase === 'case3' ? 'active' : undefined } onClick={ this.showCase } id="case3">Case 3</a>
                    <a href="#" className={ this.state.activeCase === 'case4' ? 'active' : undefined } onClick={ this.showCase } id="case4">Case 4</a>
                </nav>
                <ul className="caseList">
                    { this.state.activeCase === 'case1' ? <Case1/> : false }
                    { this.state.activeCase === 'case2' ? <Case2/> : false }
                    { this.state.activeCase === 'case3' ? <Case3/> : false }
                    { this.state.activeCase === 'case4' ? <Case4/> : false }
                </ul>
            </section>
        );
    }
}
