import React, { Component } from 'react';
import styles from './red.module.css';

class TestComponent extends Component {
    constructor(props){
        super(props);
        this.state = {"message": this.props.message};
    }

    render() {

        return <h1 className={styles.red}>{this.state.message}</h1>;
    }

}

TestComponent.defaultProps = {
    "message": "Yo!"
}

class App extends Component {
    render () {
        return (
        <div className={styles.appClass}>
            <Header/>
            <div className={styles.flexOne}>
                <Navigation/>
                <Main/>
            </div>

            {this.props.children}
        </div>
        );
    } 
}

class Header extends Component {
    render () {
        return (
        <div className={styles.headerClass}>{this.props.children}</div>
        );
    } 
}

class Navigation extends Component {
    render () {
        return (
        <div className={styles.navClass}>{this.props.children}</div>
        );
    } 
}

class Main extends Component {
    render () {
        return (
        <div className={styles.mainClass}>
            <div className={styles.flexTwo}>
                <Subcontent/>
                <Subcontent/>
                <Subcontent/>
            </div>
            <Advertisement/>
            {this.props.children}
        </div>
        );
    } 
}

class Subcontent extends Component {
    render () {
        return (
        <div className={styles.subClass}>{this.props.children}</div>
        );
    } 
}

class Advertisement extends Component {
    render () {
        return (
        <div className={styles.adClass}>{this.props.children}</div>
        );
    } 
}

export default App;