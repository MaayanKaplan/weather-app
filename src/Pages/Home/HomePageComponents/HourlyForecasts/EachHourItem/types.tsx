export interface EachHourProps {
  isActive: boolean;
  index: number;
  key: number;
  hour: string;
  weatherIcon: number;
  temperature: number;
  windSpeed: string;
  onClick: (index: number) => void;
}
