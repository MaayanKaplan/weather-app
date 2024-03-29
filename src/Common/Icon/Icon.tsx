import { ReactComponent as IconGoogleLogo } from "./Icons/logo-google.svg";
import { ReactComponent as IconFacebookLogo } from "./Icons/logo-facebook.svg";
import { ReactComponent as IconLogout } from "./Icons/log-out.svg";
import { ReactComponent as IconLogoutDark } from "./Icons/log-out-dark.svg";
import { ReactComponent as IconYellowMoon } from "./Icons/moon-flat.svg";
import { ReactComponent as IconYellowSun } from "./Icons/sun-flat.svg";
import { ReactComponent as IconWhiteSun } from "./Icons/sun-white.svg";
import { ReactComponent as IconDarkSun } from "./Icons/sun-dark.svg";
import { ReactComponent as IconArrow } from "./Icons/arrow.svg";
// import { ReactComponent as IconCheckV } from "./Icons/check-v.svg";
import { ReactComponent as IconFavoritesFull } from "./Icons/fav-full.svg";
import { ReactComponent as IconFavoritesOutline } from "./Icons/fav-outline.svg";
import { ReactComponent as IconFavoritesDark } from "./Icons/fav-dark.svg";
import { ReactComponent as IconHomeFull } from "./Icons/home-full.svg";
import { ReactComponent as IconHomeOutline } from "./Icons/home-outline.svg";
import { ReactComponent as IconLayout } from "./Icons/layout.svg";
import { ReactComponent as IconMapWeather } from "./Icons/map-weather.svg";
import { ReactComponent as IconMap } from "./Icons/map.svg";
import { ReactComponent as IconMapDark } from "./Icons/map-dark.svg";
import { ReactComponent as IconMenu } from "./Icons/menu.svg";
import { ReactComponent as IconDarkMoon } from "./Icons/moon-dark.svg";
import { ReactComponent as IconWhiteMoon } from "./Icons/moon-white.svg";
import { ReactComponent as IconSearchDark } from "./Icons/search-dark.svg";
import { ReactComponent as IconSearchWhite } from "./Icons/search-white.svg";
import { ReactComponent as IconSearch } from "./Icons/search.svg";
// import { ReactComponent as IconWarning } from "./Icons/info-circle.svg";
import { ReactComponent as IconC } from "./Icons/c.svg";
import { ReactComponent as IconF } from "./Icons/f.svg";

interface IconProp {
  Active: any;
  Inactive: any;
  isActive: boolean;
  alt?: string;
}

const ActiveIcon: React.FC<IconProp> = ({
  isActive,
  Active,
  Inactive,
  alt,
}) => {
  return <>{isActive ? <Active /> : <Inactive />}</>;
};

export {
  IconFacebookLogo,
  IconGoogleLogo,
  IconLogout,
  IconLogoutDark,
  IconYellowSun,
  IconYellowMoon,
  IconWhiteSun,
  IconArrow,
  // IconCheckV,
  IconFavoritesFull,
  IconFavoritesOutline,
  IconFavoritesDark,
  IconHomeFull,
  IconHomeOutline,
  IconLayout,
  IconMapWeather,
  IconMap,
  IconMapDark,
  IconMenu,
  IconDarkMoon,
  IconWhiteMoon,
  IconSearchDark,
  IconSearchWhite,
  IconDarkSun,
  IconSearch,
  // IconWarning,
  IconC,
  IconF,
  ActiveIcon,
};
