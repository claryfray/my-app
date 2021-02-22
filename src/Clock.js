import React from 'react';

class Clock extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString(),
            london: this.calcTime(0)
        };
    }

    calcTime(offset) {

        // create Date object for current location
        let d = new Date();
       
        // convert to msec
        // add local time zone offset
        // get UTC time in msec
        let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
       
        // create new Date object for different city
        // using supplied offset
        let nd = new Date(utc + (3600000*offset));
       
        // return time as a string
        return nd.toLocaleTimeString();
    
    }

    componentDidMount() {
        this.intervalID = setInterval(
          () => this.tick(),
          1000
        );
      }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    tick() {
        this.setState({
          time: new Date().toLocaleTimeString(),
          london: this.calcTime(0)
        });
    }
    render() {
        return (
            <p>
                Sydney, Australia: {this.state.time}.<br></br>
                London, United Kingdom: {this.state.london}.
            </p>
    );
  }
}

export default Clock;