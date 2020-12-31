import './App.css';
import React from "react";
import ListItem from './ListItem';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { glow: 0, test: "Test" };
        // this.listItems = [];
        // for (let index = 1; index < 5; index++) {
        //     this.listItems.push = <ListItem id={index} update={this.updateGlow} getGlow={this.getGlow} glow={this.state.glow} shineIfGlowing={this.shineIfGlowing} />
        // }
        this.updateGlow = this.updateGlow.bind(this);
        this.getGlow = this.getGlow.bind(this);
        this.shineIfGlowing = this.shineIfGlowing.bind(this);
    }

    updateGlow = function (update) {
        this.setState(prevState => ({
            glow: update,
            test: "Test",
        }));

    }

    getGlow = function () {
        return this.state.glow;
    }

    shineIfGlowing = function (id) {
        if (id <= this.state.glow) {
            return " bg-yellow-300";
        }
        return "";
    };

    render() {

        return (
            <div className="h-full w-full flex flex-col justify-center items-center">
                <h1 className="font-bold text-8xl text-center">{this.state.test}</h1>
                <ul className="flex">
                    <ListItem id="1" update={this.updateGlow} getGlow={this.getGlow} glow={this.state.glow} shineIfGlowing={this.shineIfGlowing} />
                    <ListItem id="2" update={this.updateGlow} getGlow={this.getGlow} glow={this.state.glow} shineIfGlowing={this.shineIfGlowing} />
                    <ListItem id="3" update={this.updateGlow} getGlow={this.getGlow} glow={this.state.glow} shineIfGlowing={this.shineIfGlowing} />
                    <ListItem id="4" update={this.updateGlow} getGlow={this.getGlow} glow={this.state.glow} shineIfGlowing={this.shineIfGlowing} />
                </ul>
            </div>
        );
    }
}
