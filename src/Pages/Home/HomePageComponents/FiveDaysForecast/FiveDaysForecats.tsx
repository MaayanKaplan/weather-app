import * as S from "./styles";
import { DailyProps } from "./types";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useQuery } from "@tanstack/react-query";
import { getDailyForecast } from "../../../../api/AccuweatherAPI/AccuweatherAPI";
import IconSun from "./Icons/sun-flat.svg";
import IconMoon from "./Icons/moon-flat.svg";
import { nextDaysOfWeek, ConvertDate } from "../../../../Utils/TimeConverter";

const FiveDaysForecast = ({ locationKey }: DailyProps) => {
  const { data } = useQuery(
    [locationKey],
    async () => {
      const returnedData = await getDailyForecast(locationKey);
      return returnedData;
    },
    {
      cacheTime: 0,
      staleTime: 600,
    }
  );

  // CHART DATA
  const series = [
    {
      name: "Days Temps",
      data: data?.DailyForecasts.map(
        (item: any) => item.Temperature.Maximum.Value
      ),
    },
    {
      name: "Nights Temps",
      data: data?.DailyForecasts.map(
        (item: any) => item.Temperature.Minimum.Value
      ),
    },
  ];

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#fff"],
    dataLabels: {
      enabled: true,
      formatter: function (value: any) {
        return value + `°`;
      },

      offsetY: -10,
      style: {
        fontSize: "2rem",
        fontWeight: "500",
      },
      background: {
        enabled: false,
        dropShadow: {
          enabled: false,
        },
      },
    },
    stroke: {
      curve: "straight",
    },
    grid: {
      show: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [1, 2, 3, 4, 5],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    markers: {
      size: [5, 5],
      colors: undefined,
      strokeColors: "#fff",
      strokeWidth: 2,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],

      radius: 2,
    },
  };

  return (
    <>
      <S.Title>5-days forecast</S.Title>
      <S.Container>
        <S.ContentWrapper>
          {data?.DailyForecasts.map((item: any, index: number) => {
            return (
              <S.EachDayWrapper key={index}>
                <S.Day>
                  {nextDaysOfWeek[data.DailyForecasts.indexOf(item)]}
                </S.Day>
                <S.Date>{ConvertDate(new Date(item.Date))}</S.Date>
                <S.Icon src={IconSun} />
              </S.EachDayWrapper>
            );
          })}
        </S.ContentWrapper>
        <S.ChartWrapper>
          <ReactApexChart
            type="line"
            options={options}
            series={series}
            height={350}
          />
        </S.ChartWrapper>

        <S.IconsWrapper>
          {data?.DailyForecasts.map((item: any, index: number) => {
            return <S.Icon key={index} src={IconMoon} />;
          })}
        </S.IconsWrapper>
      </S.Container>
    </>
  );
};

export default FiveDaysForecast;
