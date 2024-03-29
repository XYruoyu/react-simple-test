import React from 'react'

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            translateX: 0,
            translateY: 0,
        };
        this.moving = false;
        this.lastX = null;
        this.lastY = null;
        window.onmouseup = e => this.onMouseUp(e);
        window.onmousemove = e => this.onMouseMove(e);
    }

    onMouseDown(e) {
        e.stopPropagation();
        this.moving = true;
    }

    onMouseUp() {
        this.moving = false;
        this.lastX = null;
        this.lastY = null;
    }

    onMouseMove(e) {
        this.moving && this.onMove(e);
    }

    onMove(e) {
        if(this.lastX && this.lastY) {
            let dx = e.clientX - this.lastX;
            let dy = e.clientY - this.lastY;
            // this.setState({ translateX: this.state.translateX + dx, translateY: this.state.translateY + dy })
            this.setState({ translateX: this.state.translateX + dx})
        }
        this.lastX = e.clientX;
        this.lastY = e.clientY;
    }

    render() {
        return (
            <div
                onMouseDown={e => this.onMouseDown(e)}
                style={{transform: `translateX(${this.state.translateX}px)translateY(${this.state.translateY}px)`}}
            >
                <div style={{ width: 100, height: 100, backgroundColor: 'blue' }} />
            </div>
        )
    }
};