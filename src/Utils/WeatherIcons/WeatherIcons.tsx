import {
  IconSun,
  IconSunCloud,
  IconStorm,
  IconCloud,
  IconRain,
  IconSnow,
} from "./Icons/Icons";

const WeatherIcons = (weatherIcon: number) => {
  return (() => {
    switch (weatherIcon) {
      case 1: //Sunny
        return <IconSun />;
      case 2: //Mostly Sunny
        return <IconSun />;
      case 3: //Partly Sunny
        return <IconSunCloud />;
      case 4: //Intermittent Clouds
        return <IconSunCloud />;
      case 5: //Hazy Sunshine
        return <IconSunCloud />;
      case 6: //Mostly Cloudy
        return <IconCloud />;
      case 7: //Cloudy
        return <IconCloud />;
      case 8: //Dreary (Overcast)
        return <IconCloud />;
      case 11: //Fog
        return <IconCloud />;
      case 12: // Showers
        return <IconRain />;
      case 13: //Mostly Cloudy w/ Showers
        return <IconRain />;
      case 14: // Partly Sunny w/ Showers
        return <IconRain />;
      case 15: //Storm
        return <IconStorm />;
      case 16: //Mostly Cloudy w/ T-Storms
        return <IconStorm />;
      case 17: //Partly Sunny w/ T-Storms
        return <IconStorm />;
      case 18: //Rain
        return <IconRain />;
      case 19: //Flurries
        return <IconSnow />;
      case 20: //Mostly Cloudy w/ Flurries
        return <IconSnow />;
      case 21: // Partly Sunny w/ Flurries
        return <IconSnow />;
      case 22: //Snow
        return <IconSnow />;
      case 23: //Mostly Cloudy w/ Snow
        return <IconSnow />;
      case 24: //Ice
        return <IconSnow />;
      case 25: //Sleet
        return <IconSnow />;
      case 26: //Freezing Rain
        return <IconRain />;
      case 29: //Rain and Snow
        return <IconSnow />;
      case 30: //Hot
        return <IconSun />;
      case 31: //Cold
        return <IconSnow />;
      case 33: //Clear
        return <IconSun />;
      case 34: //Mostly Clear
        return <IconSunCloud />;
      case 35: //Partly Cloudy
        return <IconSunCloud />;
      case 36: //Intermittent Clouds
        return <IconCloud />;
      case 37: //Hazy Moonlight
        return <IconCloud />;
      case 38: //Mostly Cloudy
        return <IconCloud />;
      case 39: //Partly Cloudy w/ Showers
        return <IconRain />;
      case 40: //Mostly Cloudy w/ Showers
        return <IconRain />;
      case 41: //Partly Cloudy w/ T-Storms
        return <IconStorm />;
      case 42: //Mostly Cloudy w/ T-Storms
        return <IconStorm />;
      case 43: //Mostly Cloudy w/ Flurries
        return <IconSnow />;
      case 44: //Mostly Cloudy w/ Snow
        return <IconStorm />;
      default:
        return;
    }
  })();
};

export default WeatherIcons;
