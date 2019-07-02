import React, { Component } from 'react';

export default class Case2 extends Component{
    constructor() {
        super();
        this.state = {
            elements: [
                {
                    name: 'front-bumper',
                    price: 100,
                    active: true
                },
                {
                    name: 'hood',
                    price: 250,
                    active: true
                },
                {
                    name: 'front-wing',
                    price: 100,
                    active: true
                },
                {
                    name: 'roof',
                    price: 150,
                    active: true
                },
                {
                    name: 'front-door',
                    price: 150,
                    active: true
                },
                {
                    name: 'rear-door',
                    price: 150,
                    active: true
                },
                {
                    name: 'rear-wing',
                    price: 175,
                    active: true
                },
                {
                    name: 'trunk',
                    price: 150,
                    active: true
                },
                {
                    name: 'rear-bumper',
                    price: 100,
                    active: true
                },
            ]
        };
        this.selectItem = this.selectItem.bind(this);
    }

    selectItem = (e) => {
        console.log(e);
        // e.preventDefault;
        // const item = e.target.value;
        // this.setState(() => {
        //     return {
        //         size,
        //     }
        // })
    };

    render() {
        return (
            <li className="case case2">
                <h1>Case 2: <span className="teal">BodyWork Calculator</span></h1>
                <section className="calculator">
                    <section className="graphics">
                        <h2>Click on element to see the price</h2>
                        <img src="./img/cases/case2/car.png" title="Click to see element price" id="car"/>
                    </section>
                    <section className="prices">
                        {
                            this.state.elements
                                .filter( e => e.active )
                                .map(e =>
                                    <div className="item" key={ e.name } onClick={ this.selectItem }>{ e.name } <span className="price">{ e.price } $</span> </div>
                                )
                        }
                    </section>
                    <section className="total">
                        <h3>Total price: </h3>
                        <span>{ this.state.elements.filter(e => e.active).map(e => e.price).reduce((acc, cur) => acc + cur) } $</span>
                    </section>
                </section>
                <section className="tags">
                    #html5 #css3 #area-map #react
                </section>
            </li>
        );
    }
}
