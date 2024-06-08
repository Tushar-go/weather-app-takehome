import { useEffect, useState } from "react";

export default function WeatherCard({ tempInfo, themeMode }) {
  const [weatherState, setWeatherState] = useState("");
  const { temp, humidity, pressure, weathermood, name, speed, country, sunset } = tempInfo;

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Mist":
          setWeatherState("wi-dust");
          break;
        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);

  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-secondaryBgLight dark:bg-secondaryBgDark md:h-[400px] w-[90vw] md:w-[650px] rounded-xl mx-auto text-primaryTextLight dark:text-primaryTextDark">
      <div className="min-h-[100px] md:col-span-1 lg:col-span-4">
        <div className="flex h-full justify-center items-center">
          <i
            className={`wi ${weatherState} dark:text-white`}
            style={{ fontSize: "70px", width: "70px", height: "70px" }}
          ></i>
        </div>
      </div>
      <div className="bg-black min-h-[100px] md:col-span-2 lg:col-span-3">
        <div className="flex justify-center sm:justify-start gap-6 items-center h-full w-full">
          <div className="ml-4 md:ml-10">
            <span className="text-4xl font-semibold text-white">{temp}&deg;</span>
          </div>
          <div className="ml-4 md:ml-10">
            <div className="text-sm font-semibold">
              {weathermood}
            </div>
            <div className="font-semibold text-white">
              {name}, {country}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primaryBgLight dark:bg-primaryBgDark p-4 min-h-[100px] md:col-span-1 lg:col-span-1">
        <div className="flex flex-0 items-center justify-around h-full text-primaryTextLight dark:text-primaryTextDark text-2xl font-medium">
          {new Date().toLocaleString()}
        </div>
      </div>
      <div className="bg-primaryBgLight dark:bg-primaryBgDark p-4 min-h-[100px] md:col-span-1 lg:col-span-1">
        <div className="flex flex-col items-center justify-center h-full">
          <i className="wi wi-humidity text-4xl"></i>
          <div>{humidity}%</div>
          <div>Humidity</div>
        </div>
      </div>
      <div className="bg-primaryBgLight dark:bg-primaryBgDark p-4 min-h-[100px] md:col-span-1 lg:col-span-1">
        <div className="flex flex-col items-center justify-center h-full">
          <i className="wi wi-barometer text-4xl"></i>
          <div>{pressure} hPa</div>
          <div>Pressure</div>
        </div>
      </div>
      <div className="bg-primaryBgLight dark:bg-primaryBgDark p-4 min-h-[100px] md:col-span-1 lg:col-span-1">
        <div className="flex flex-col items-center justify-center h-full">
          <i className="wi wi-strong-wind text-4xl"></i>
          <div>{speed} m/s</div>
          <div>Wind</div>
        </div>
      </div>
      <div className="bg-primaryBgLight dark:bg-primaryBgDark p-4 min-h-[100px] md:col-span-1 lg:col-span-1">
        <div className="flex flex-col items-center justify-center h-full">
          <i className={`wi wi-sunset text-4xl ${themeMode === "light" ? "text-skyblue" : "text-white"}`}></i>
          <div className="font-semibold dark:text-white">
            {timeStr} PM <br />
            Sunset
          </div>
        </div>
      </div>
    </article>
  );
}
