import React, { useState } from "react";

const Weather = ({ weather, temp }) => {
  // console.log(weather)
  const [isCelsius, setIsCelsius] = useState(true);

  const changeUnitTemp = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <div>
      <section className="text-xl">
        <h2 className=" rounded-3xl py-2 px-2 text-red-1000 text-center mb-4 font-bold text-[25px] tracking-wider sm:text-[40px]">
          {weather.name}, {weather.sys.country}
        </h2>
        {/* sm es media */}
        <section className="grid gap-4 sm:grid-cols-two justify-items-center">
          <article className="bg-slate-300/50 rounded-3xl grid grid-cols-2 justify-items-center items-center w-[280px] py-2 sm:grid-cols-1 sm:w-[350px] sm:py-1">
            <h3 className="capitalize text-lg col-start-1 col-end-3 sm:text-[25px]">
              {weather.weather[0].description}
            </h3>

            <h2 className="text-[45px] font-light sm:text-7xl">
              {isCelsius ? `${temp.celsius}°C` : `${temp.farenheit}°F`}
            </h2>

            <div>
              <img
                className="sm:w-[139px]"
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt=""
              />
            </div>
          </article>

          <article className="bg-slate-300/50 rounded-3xl grid grid-cols-3 justify-center justify-items-stretch py-2 sm:grid-cols-1 sm:px-2 sm:py-0">
            <div className="flex text-base justify-center items-center">
              <div>
                <img src="/images/speed.png" alt="" />
              </div>
              <h5 className="sm:text-[22px]">{weather.wind.speed} m/s</h5>
            </div>

            <div className="flex text-base justify-center items-center">
              <div>
                <img src="/images/humidity.png" alt="" />
              </div>
              <h5 className="sm:text-[22px]">{weather.main.humidity} %</h5>
            </div>

            <div className="flex text-base justify-center items-center">
              <div>
                <img src="/images/pressure.png" alt="" />
              </div>
              <h5 className="sm:text-[22px]">{weather.main.pressure} hPa</h5>
            </div>
          </article>
        </section>
        <button
          className="bg-red-950 text-sm block mx-auto mt-4 py-2 px-6 text-white font-bold rounded-full hover:bg-blue-800 duration-200 sm:text-[25px] sm:py-4"
          onClick={changeUnitTemp}
        >
          Change °C/°F
        </button>
        <div className="mt-5 overflow-hidden pb-[56.25%] relative h-0">
          <iframe
            className=" left-0 top-0 h-[100%] w-[100%] absolute"
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1898056.043331925!2d${weather.coord.lon}!3d${weather.coord.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2smx!4v1692246731467!5m2!1ses-419!2smx`}
            style={{ border: 0 }}
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Weather;
