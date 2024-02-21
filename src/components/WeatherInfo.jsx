import React from "react";

const WeatherInfo = ({ weatherData }) => {
  if (!weatherData) {
    return <div>Loading weather data...</div>;
  }

  const { main, name, sys, weather, wind,dt,clouds } = weatherData;
  const { country } = sys;
  const { description, icon } = weather[0];

  return (
    <div>
      <div className="row mt-5">
        <div className="col-md-6">
          <div className="row text-white">
            <h2 className="card-title ">
              {name}, {country}
            </h2>
            <h4 >{dt}</h4>
          </div>
          <div className="row text-white">
       
            <div className="col ">
              <img
                // height={250}
                // width={250}
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt={description}
                className="img-fluid"
              />
            </div>
            <div className="col pt-5">

                <h1>{main.temp}</h1>
                <p>{weather[0].main}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6" >
          <div className="card-body text-white">
            <div className="row">
              <div className="col-4">
                {main.temp_max} <br />
                <strong>High</strong>{" "}
              </div>
              <div className="col-4">
                {wind.speed} mph <br />
                <strong>Wind</strong>
              </div>
              <div className="col-4">
                {" "}
                {sys.sunrise} <br />
                <strong>Sunrise</strong>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-4">
                {main.temp_max} <br />
                <strong>Low</strong>{" "}
              </div>
              <div className="col-4">
                {clouds.all} % <br />
                <strong>Rain</strong>
              </div>
              <div className="col-4">
                {sys.sunset}
                <br />
                <strong>Sunset</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
