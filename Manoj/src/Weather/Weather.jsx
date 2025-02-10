import React, { useEffect, useRef, useState } from "react";

const api = {
  baseurl: "https://api.openweathermap.org/data/2.5/weather",
  key: "0bcafc8ae711aa2ccaad0c114bfa8389",
};

const Home = () => {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");
  const input = useRef();

  function handle() {
    setCity(input.current.value);
  }

  useEffect(() => {
    if (!city) return;

    fetch(`${api.baseurl}?q=${city}&appid=${api.key}&units=metric`)
      .then((res) => res.json())
      .then((d) => setWeather(d));
  }, [city]);

  return (
    <div>
      <div >
        <h1 >Weather App</h1>

        <div >
          <input
            type="text"
            placeholder="Enter city name"
            ref={input}
          />
          <button
            onClick={handle}
            
          >
            Search
          </button>
        </div>

        {weather.main !== undefined ? (
          <div>
            <h2>{weather.name}, {weather.sys?.country}</h2>
            <p>{weather.main.temp}°C</p>
            <p>{weather.weather[0]?.main}</p>
            <p>{weather.weather[0]?.description}</p>
          </div>
        ) : (
          <p className="mt-4 text-red-500 font-semibold">City Not Found</p>
        )}
      </div>
    </div>
  );
};

export default Home;