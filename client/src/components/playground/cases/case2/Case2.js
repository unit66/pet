import React, { Component } from 'react';

export default class Case2 extends Component{
    constructor() {
        super();
        this.state = {
            elements: [
                {
                    name: 'front-bumper',
                    price: 100,
                    active: false
                },
                {
                    name: 'hood',
                    price: 250,
                    active: false
                },
                {
                    name: 'front-wing',
                    price: 100,
                    active: false
                },
                {
                    name: 'roof',
                    price: 150,
                    active: false
                },
                {
                    name: 'front-door',
                    price: 150,
                    active: false
                },
                {
                    name: 'rear-door',
                    price: 150,
                    active: false
                },
                {
                    name: 'rear-wing',
                    price: 175,
                    active: false
                },
                {
                    name: 'trunk',
                    price: 150,
                    active: false
                },
                {
                    name: 'rear-bumper',
                    price: 100,
                    active: false
                },
                {
                    name: 'skirts',
                    price: 50,
                    active: false
                }
            ]
        };
        this.selectItem = this.selectItem.bind(this);
    }

    selectItem = (e) => {
        e.preventDefault();
        let target = e.target;
        this.setState((prevState) => {
            let newState = prevState.elements.map((e) => {
                if (e.name === target.title ) {
                    return {
                        name: e.name,
                        price: e.price,
                        active: !e.active
                    }
                } else {
                    return e
                }
            })
            return {
                elements: newState
            }
        })
    }

    render() {
        return (
            <li className="case case2">
                <h1>Case 2: <span className="teal">BodyWork Calculator</span></h1>
                <section className="calculator">
                    <section className="graphics">
                        <h2>Click on element to see the price</h2>
                        <img src="./img/cases/case2/car.png" title="Click to see element price" id="car"/>
                        <img className={ this.state.elements[0].active ? 'active' : 'inactive' } src="./img/cases/case2/front-bumper.png" />
                        <img className={ this.state.elements[1].active ? 'active' : 'inactive' } src="./img/cases/case2/hood.png" />
                        <img className={ this.state.elements[2].active ? 'active' : 'inactive' } src="./img/cases/case2/front-wing.png" />
                        <img className={ this.state.elements[3].active ? 'active' : 'inactive' } src="./img/cases/case2/roof.png" />
                        <img className={ this.state.elements[4].active ? 'active' : 'inactive' } src="./img/cases/case2/front-door.png" />
                        <img className={ this.state.elements[5].active ? 'active' : 'inactive' } src="./img/cases/case2/rear-door.png" />
                        <img className={ this.state.elements[6].active ? 'active' : 'inactive' } src="./img/cases/case2/rear-wing.png" />
                        <img className={ this.state.elements[7].active ? 'active' : 'inactive' } src="./img/cases/case2/trunk.png" />
                        <img className={ this.state.elements[8].active ? 'active' : 'inactive' } src="./img/cases/case2/rear-bumper.png" />
                        <img className={ this.state.elements[9].active ? 'active' : 'inactive' } src="./img/cases/case2/skirts.png" />
                        <img src="./img/cases/case2/map-hack.png" useMap="#map"/>
                        <map name="map">
                            <area onClick={ this.selectItem } target="_blank" alt="front-bumper" title="front-bumper" href="#" coords="126,233,123,209,127,183,139,166,156,156,149,147,124,151,103,167,93,171,76,173,63,175,58,188,58,205,56,222,70,229" shape="poly" />
                            <area onClick={ this.selectItem } target="_blank" alt="hood" title="hood" href="#" coords="124,149,71,157,89,143,128,130,157,123,195,117,223,112,250,116,255,121,248,141,196,144,178,140,156,143,148,148" shape="poly" />
                            <area onClick={ this.selectItem } target="_blank" alt="front-wing" title="front-wing" href="#" coords="251,213,235,215,233,197,222,173,210,161,192,153,170,152,157,156,149,147,165,143,189,141,199,145,247,142,247,181,248,201" shape="poly" />
                            <area onClick={ this.selectItem } target="_blank" alt="front-door" title="front-door" href="#" coords="257,120,420,113,414,144,412,172,414,199,413,206,413,219,253,222,248,201,247,154,252,131" shape="poly" />
                            <area onClick={ this.selectItem } target="_blank" alt="rear-door" title="rear-door" href="#" coords="421,113,556,108,570,127,558,146,519,200,512,213,496,218,469,217,435,219,413,219,412,166,414,140" shape="poly" />
                            <area onClick={ this.selectItem } target="_blank" alt="rear-wing" title="rear-wing" href="#" coords="557,108,605,106,600,92,578,83,568,81,572,72,601,81,630,91,664,103,684,109,715,112,732,114,731,124,685,125,699,139,693,152,685,162,652,166,639,167,616,156,591,154,571,160,556,174,547,188,542,206,533,210,515,210,533,182,554,154,567,134,572,125" shape="poly" />
                            <area onClick={ this.selectItem } target="_blank" alt="rear-bumper" title="rear-bumper" href="#" coords="639,167,687,162,699,142,741,140,738,157,750,169,751,187,748,205,735,219,663,228,655,228,659,210,652,184" shape="poly" />
                            <area onClick={ this.selectItem } target="_blank" alt="trunk" title="trunk" href="#" coords="730,112,717,107,690,100,614,77,579,65,574,71,685,109" shape="poly" />
                            <area onClick={ this.selectItem } target="_blank" alt="roof" title="roof" href="#" coords="566,79,578,66,499,53,385,53,337,62,314,77,248,115,255,121,319,82,362,67,410,62,452,64,501,67,546,74" shape="poly" />
                            <area onClick={ this.selectItem } target="_blank" alt="skirts" title="skirts" href="#" coords="235,214,251,214,253,222,504,218,516,209,543,207,541,230,233,233" shape="poly" />
                        </map>

                    </section>
                    <section className="prices">
                        {
                            this.state.elements
                                .filter( e => e.active )
                                .map(e =>
                                    <div className="item" key={ e.name } onClick={ this.selectItem } title={ e.name }>{ e.name } <span className="price">{ e.price } $</span> </div>
                                )
                        }
                    </section>
                    <section className="total">
                        <h3>Total price: </h3>
                        <span>{ this.state.elements.filter(e => e.active).length > 0 ? this.state.elements.filter(e => e.active).map(e => e.price).reduce((acc, cur) => acc + cur) : 0 } $</span>

                    </section>
                </section>
                <section className="tags">
                    #html5 #css3 #area-map #react
                </section>
            </li>
        );
    }
}
