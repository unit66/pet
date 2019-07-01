import React, { Component } from 'react';

export default class Case1 extends Component{
    constructor() {
        super();
        this.state = {
            color: '#222222',
            size: 3
        }
        this.setColor = this.setColor.bind(this);
        this.customColor = this.customColor.bind(this);
        this.changeSize = this.changeSize.bind(this);
    }

    componentDidMount() {
        this.updateCanvas();
    }

    changeSize = (e) => {
        e.preventDefault;
        const size = e.target.value;
        this.setState(() => {
            return {
                size,
            }
        })
    }

    setColor = ({ target }) => {
        const { color } = target.dataset;
        this.setState(() => {
            return {
                color,
            }
        })
    }

    customColor = ({ target }) => {
        this.setState(() => {
            return {
                color: target.value,
            }
        })
    }

    updateCanvas() {
        const canvas = document.getElementById('canvas');
        const ctx = this.refs.canvas.getContext('2d');

        canvas.onmousedown = () => {
            canvas.onmousemove = (e) => {
                let x = e.offsetX;
                let y = e.offsetY;
                ctx.lineWidth = this.state.size * 2;
                ctx.lineTo(x, y);
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(x, y, this.state.size, 0, Math.PI*2, false );
                ctx.fillStyle = this.state.color;
                ctx.strokeStyle = this.state.color;
                ctx.fill();
                ctx.beginPath();
                ctx.moveTo(x, y);
            }
            canvas.onmouseup = () => {
                ctx.beginPath();
                canvas.onmousemove = null;
            }
        }

        canvas.ontouchstart = (e) => {
            e.preventDefault();
            canvas.ontouchmove = (e) => {
                e.preventDefault();
                let BB=canvas.getBoundingClientRect();
                let bbLeft=BB.left;
                let bbTop=BB.top;
                let x = e.touches[0].clientX - bbLeft;
                let y = e.touches[0].clientY - bbTop;
                ctx.lineWidth = this.state.size * 2;
                ctx.lineTo(x, y);
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(x, y, this.state.size, 0, Math.PI*2, false );
                ctx.fillStyle = this.state.color;
                ctx.strokeStyle = this.state.color;
                ctx.fill();
                ctx.beginPath();
                ctx.moveTo(x, y);
            }
            canvas.ontouchend = (e) => {
                e.preventDefault();
                ctx.beginPath();
                canvas.ontouchmove = null;
            }
            canvas.ontouchcancel = (e) => {
                e.preventDefault();
                ctx.beginPath();
                canvas.ontouchmove = null;
            }
        }
    }

    clearCanvas = () => {
        const canvas = document.getElementById('canvas');
        const ctx = this.refs.canvas.getContext('2d');

        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height );
        ctx.beginPath();
        ctx.fillStyle = this.state.color;
    }

    render() {
        return (
            <li className="case case1">
                <h1>Case 1: <span className="teal">Canvas Drawer</span></h1>
                { window.innerWidth > 720 ? <canvas id="canvas" ref="canvas" width={800} height={500}></canvas> : <canvas id="canvas" ref="canvas" width={320} height={240}></canvas>}
                <aside className="colorPicker">
                    <input type="range" id="size" name="size" min="1" max="25" value={ this.state.size } step="1" onChange={ this.changeSize }/>
                    <div className={ this.state.color === '#222222' ? 'color black active' : 'color black'} data-color="#222222" onClick={ this.setColor }></div>
                    <div className={ this.state.color === '#4b4e6d' ? 'color blue active' : 'color blue'} data-color="#4b4e6d" onClick={ this.setColor }></div>
                    <div className={ this.state.color === '#84dcc6' ? 'color teal active' : 'color teal'} data-color="#84dcc6" onClick={ this.setColor }></div>
                    <div className={ this.state.color === '#ff3838' ? 'color red active' : 'color red'} data-color="#ff3838" onClick={ this.setColor }></div>
                    <input type="color" className="color custom" onInput={ this.customColor }/>
                    <div className="clear" onClick={ this.clearCanvas }>clear</div>
                </aside>
                <section className="tags">
                    #html5 #css3 #canvas #react
                </section>
            </li>
        );
    }
}
