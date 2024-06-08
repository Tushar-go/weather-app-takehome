import { useEffect, useState } from "react";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [searchValue, setSearchValue] = useState("jaipur");
  const [tempInfo, setTempInfo] = useState({});
  const [themeMode, setThemeMode] = useState("light");

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  function darkTheme() {
    setThemeMode("dark");
  }
  function lightTheme() {
    setThemeMode("light");
  }

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${import.meta.env.VITE_REACT_APP_KEY}`;

      const res = await fetch(url);
      const data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };
      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log("There is some problem while fetching data" + error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, [searchValue]);

  function handleSubmit(e) {
    e.preventDefault();
    getWeatherInfo();
  }

  return (
    <div className="bg-primaryBgLight dark:bg-primaryBgDark min-h-screen w-screen flex flex-col justify-center items-center gap-4 px-4 text-primaryTextLight dark:text-primaryTextDark">
      <div className="flex flex-row items-center gap-3">
        <form
          className="max-w-md w-full md:w-[350px] mx-auto"
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm border rounded-lg bg-secondaryBgLight focus:ring-primaryAccentLight focus:border-primaryAccentLight dark:bg-secondaryBgDark dark:border-primaryBorderDark dark:placeholder-secondaryTextDark dark:text-primaryTextDark dark:focus:ring-primaryAccentDark dark:focus:border-primaryAccentDark"
              placeholder="Enter City Name"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-buttonBgLight hover:bg-buttonHoverBgLight focus:ring-4 focus:outline-none focus:ring-primaryAccentLight font-medium rounded-lg text-sm px-4 py-2 dark:bg-buttonBgDark dark:hover:bg-buttonHoverBgDark dark:focus:ring-primaryAccentDark"
            >
              Search
            </button>
          </div>
        </form>
        <div>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onChange={onChangeBtn}
              checked={themeMode === "dark"}
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primaryAccentLight dark:peer-focus:ring-primaryAccentDark rounded-full peer dark:bg-secondaryBgDark peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-primaryBorderDark peer-checked:bg-primaryAccentDark"></div>
            <span className="ms-3 text-sm font-medium text-primaryTextLight dark:text-primaryTextDark">
              Dark Mode
            </span>
          </label>
        </div>
      </div>

      <WeatherCard tempInfo={tempInfo} themeMode={themeMode} />
    </div>
  );
}

export default App;
