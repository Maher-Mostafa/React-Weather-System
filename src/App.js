
import React, { Component, Fragment } from 'react'
import InputForm from './Component/InputForm'
import OutputForm from './Component/OutputForm'


import './App.css';

const API_key = '0862dbb62fe671f953334cc739892c0d';
// API_LINK = 'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={API_key}'

class App extends Component {

  state = {
    description: '',
    country: '',
    tempreture: '',
    error: ''

  }

  getWeather = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = fetch('https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={API_key}');
    const data = api.json();
    console.log(data);
    if (city && country) {
      this.setState({
        description: data.weather[0].description,
        country: data.sys.country,
        tempreture: data.main.temp,
        error: ''
      })
    }
    else {
      this.setState({ 
        description: '',
        country: '',
        tempreture: '',
        error: 'Please Enter Data'
      })
    }
  }
  render() {
    return (
      <div>
        My name is Maher Mostafa I will do anything want

        <InputForm getWeather={this.getWeather} />
        <OutputForm description= {this.state.description}
        country = {this.state.country}
        tempreture={this.state.tempreture}
        />

      </div>
    );
  }

}

export default App;
