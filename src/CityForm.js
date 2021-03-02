import React from 'react';

class CityForm extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        city: "Sample City",
        country: "Sample Country",
        offset: 0
      };
  
      this.handleChange = this.handleChange.bind(this);

    }
  
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value});
    }


  
    render() {
      return (
        <form>
            <label>
                City: 
                <input name="city" type="text" value={this.state.city} onChange={this.handleChange} />
            </label>
            <br />
            <label>
                Country: 
                <input name="country" type="text" value={this.state.country} onChange={this.handleChange} />
            </label>
            <br />
            <label>
                GMT Offset: 
                <input name="offset" type="number" value={this.state.offset} onChange={this.handleChange} />
            </label>
            
            
            
            <Clock city={this.state.city} country={this.state.country} offset={this.state.offset}/>
        </form>
        
      );
    }
  }



  class Clock extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            city: this.props.city,
            country: this.props.country,
            offset: this.props.offset
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
          city: this.props.city,
          country: this.props.country,
          offset: this.props.offset
        });
    }
    render() {
        const data = this.state
        return (
            <p>
                
              {data.city}, {data.country}: {this.calcTime(data.offset)}
            </p>
        );
    }
}

export default CityForm;
  