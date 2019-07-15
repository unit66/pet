import React, { Component } from 'react';

export default class Case3 extends Component{
    constructor() {
        super();
        this.state = {
            px: 400,
            py: 480,
            xv: 0,
            yv: 0,
            xvmax: 20,
            yvmax: 15,
            grav: 1,
            onG: false,
            holdLeft: false,
            holdRight: false,
            holdUp: false,
            interval: {}
        };
        this.keyDown = this.keyDown.bind(this);
        this.keyUp = this.keyUp.bind(this);
    }

    componentDidMount() {
        this.loadCanvas();
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.keyDown);
        document.removeEventListener("keyup", this.keyUp);
        clearInterval(this.state.interval);
    }

    loadCanvas() {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        let intervalId = setInterval( () => { this.updateCanvas(ctx) }, 1000/30 );
        this.setState(() => {
            return {
                interval: intervalId
            }
        });
        document.addEventListener("keydown", this.keyDown );
        document.addEventListener("keyup", this.keyUp );
    }

    updateCanvas(ctx) {
        if(this.state.holdLeft && this.state.xv < this.state.xvmax) {
            this.setState((prevState) => {
                return {
                    xv: this.state.px > 0 ? prevState.xv + 1 : 0
                }
            });
        }
        if(this.state.holdRight && this.state.xv > -this.state.xvmax) {
            this.setState((prevState) => {
                return {
                    xv: this.state.px < this.refs.canvas.width - 20 ? prevState.xv - 1 : 0
                }
            });
        }
        if(this.state.holdUp && this.state.yv > -this.state.yvmax) {
            this.setState((prevState) => {
                return {
                    yv: this.state.py >= 0 && this.state.py <= this.refs.canvas.height - 20 ? prevState.yv - 2.5 : 0
                }
            });
        }

        this.setState((prevState) => {
            return {
                px: this.state.px < 0 ? 0 : this.state.px > this.refs.canvas.width - 20 ? this.refs.canvas.width - 20 : prevState.px - this.state.xv,
                py: this.state.py < 0 ? 0 : this.state.py > this.refs.canvas.height - 20 ? this.refs.canvas.height - 20 : prevState.py + this.state.yv
            }
        });

        if(this.state.onG) {
            this.setState((prevState) => {
                return {
                    xv: prevState.xv * 0.8,
                    yv: 0
                }
            });
        } else {
            this.setState((prevState) => {
                return {
                    yv: prevState.yv + this.state.grav
                }
            });
        }

        if(this.state.py >= this.refs.canvas.height - 20){
            this.setState(() => {
                return {
                    onG: true
                }
            });
        } else {
            this.setState(() => {
                return {
                    onG: false
                }
            });
        }

        if(!this.state.onG && this.state.yv <= this.state.yvmax * -1){
            this.setState(() => {
                return {
                    holdUp: false
                }
            });
        }

        ctx.fillStyle = "black";
        ctx.fillRect(0,0, this.refs.canvas.width, this.refs.canvas.height);
        ctx.fillStyle = "white";
        ctx.fillRect(this.state.px, this.state.py,20,20);
    }

    keyDown = (e) => {
        let up = 38;
        let left = 37;
        let right = 39;
        let direction = 0;
        if(!e.target.title){
            direction = e.keyCode;
        }else{
            switch (e.target.title) {
                case 'Up':
                    direction = up;
                    break;
                case 'Left':
                    direction = left;
                    break;
                case 'Right':
                    direction = right;
                    break;
            }
        }
        switch(direction) {
            case 37:
                this.setState(() => {
                    return {
                        holdLeft: true
                    }
                });
                break;
            case 38:
                if(this.state.onG) {
                    this.setState(() => {
                        return {
                            holdUp: true
                        }
                    });
                }
                break;
            case 39:
                this.setState(() => {
                    return {
                        holdRight: true
                    }
                });
                break;
        }

    }

    keyUp = (e) => {
        let up = 38;
        let left = 37;
        let right = 39;
        let direction = 0;
        if(!e.target.title){
            direction = e.keyCode;
        }else{
            switch (e.target.title) {
                case 'Up':
                    direction = up;
                    break;
                case 'Left':
                    direction = left;
                    break;
                case 'Right':
                    direction = right;
                    break;
            }
        }
        switch(direction) {
            case 37:
                this.setState(() => {
                    return {
                        xv: 0,
                        holdLeft: false
                    }
                });
                break;
            case 38:
                this.setState(() => {
                    return {
                        holdUp: false
                    }
                });
                break;
            case 39:
                this.setState(() => {
                    return {
                        xv: 0,
                        holdRight: false
                    }
                });
                break;
        }
    }

    render() {
        return (
            <li className="case case3">
                <h1>Case 3: <span className="teal">Canvas Platformer</span></h1>
                { window.innerWidth > 720 ? <canvas id="canvas" ref="canvas" width={800} height={500}></canvas> : <canvas id="canvas" ref="canvas" width={320} height={240}></canvas>}
                <aside className="controls">
                    <div className={ this.state.holdLeft ? 'goLeft active' : 'goLeft'} title="Left" onMouseDown={ this.keyDown } onTouchStart={ this.keyDown } onMouseUp={ this.keyUp } onTouchEnd={ this.keyUp } onMouseLeave={ this.keyUp }></div>
                    <div className={ this.state.holdUp ? 'goUp active' : 'goUp' } title="Up" onMouseDown={ this.keyDown } onTouchStart={ this.keyDown } onMouseUp={ this.keyUp } onTouchEnd={ this.keyUp } onMouseLeave={ this.keyUp }></div>
                    <div className={ this.state.holdRight ? 'goRight active' : 'goRight' } title="Right" onMouseDown={ this.keyDown } onTouchStart={ this.keyDown } onMouseUp={ this.keyUp } onTouchEnd={ this.keyUp } onMouseLeave={ this.keyUp }></div>
                </aside>
                <section className="tags">
                    #html5 #css3 #canvas #react
                </section>
            </li>
        );
    }
}
