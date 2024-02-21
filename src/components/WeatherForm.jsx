import React, { useState } from "react";

const WeatherForm = ({ onFormSubmit }) => {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
        console.log("Latitude : ",lat, "Loading : ", lon)
        onFormSubmit(lat, lon);
      }

  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-auto" >
        <input
            type="text"
            className="form-control"
            placeholder="Latitude"
            id="lat"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
          />
   

        </div>
        <div className="col-auto" >
        <input
            type="text"
            className="form-control"
            placeholder="Longitude"
            id="lon"
            value={lon}
            onChange={(e) => setLon(e.target.value)}
            onKeyDown={handleSubmit}
          />
        </div>
        <div className="col-auto" >
        </div>    
      </div>
    </form>
  );
};

export default WeatherForm;
