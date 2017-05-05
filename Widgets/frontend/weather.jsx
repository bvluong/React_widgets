import React from 'react';
import ReactDom from 'react-dom';

class Weather extends React.Component {
  constructor() {
    super();
    this.state = { city: "", temp: ""};
  }


  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function(position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let that = this;
      var request = new XMLHttpRequest();
      request.open('GET', `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ddaa2378e63fbcf10aa9145b74f5ac86`, true);
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          var resp = request.responseText;
          that.setState( { city: JSON.parse(resp).name } );
          that.setState( { temp: Math.floor(JSON.parse(resp).main.temp - 273)} );
        } else {
          console.log("error");

        }
      };

      request.onerror = function() {
      };

      request.send();
    }.bind(this));
  }

  componentWillUnmount() {

  }

  render () {
    const { city, temp } = this.state;
    return (
      <div className="weather">
      <h1>My Weather</h1>
        <ul>
          <li>

            <h1>{ city }</h1>
          </li>
          <li>
            <h1>{ temp }</h1>

          </li>
        </ul>
      </div>
  );
  }

}

export default Weather;
