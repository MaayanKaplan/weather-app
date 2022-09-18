import * as S from "./styles";
import { DailyProps } from "./types";
import ReactApexChart from "react-apexcharts";
import { useQuery } from "@tanstack/react-query";
import { getDailyForecast } from "../../../../api/AccuweatherAPI/AccuweatherAPI";
import IconSun from "./Icons/sun-flat.svg";
import IconMoon from "./Icons/moon-flat.svg";
import { nextDaysOfWeek } from "../../../../Utils/TimeConverter";

// const FiveDaysForecast = ({ locationKey }: DailyProps) => {
const FiveDaysForecast = ({ locationKey }) => {
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
      data: [28, 29, 33, 36, 32],
    },
    {
      name: "Nights Temps",
      data: [12, 11, 14, 18, 17],
    },
  ];

  const options = {
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
    },
    stroke: {
      curve: "straight",
    },

    grid: {
      show: false,
    },
    markers: {
      size: 1,
    },

    legend: {
      show: true,
    },

    // xaxis: {
    //   categories: [1, 2, 3, 4, 5],

    // labels: {
    //   show: false,
    // },
    //   axisBorder: {
    //     show: false,
    //   },
    //   axisTicks: {
    //     show: false,
    //   },
    // },
    // yaxis: {
    //   show: false,
    // }
  };

  return (
    <>
      <S.Title>5-days forecast</S.Title>
      <S.Container>
        <S.ContentWrapper>
          {/* {data?.DailyForecasts.map((item: any, index: number) => { */}
          {data?.DailyForecasts.map((item, index) => {
            return (
              <S.EachDayWrapper key={index}>
                <S.Day>
                  {nextDaysOfWeek[data.DailyForecasts.indexOf(item)]}
                </S.Day>
                <S.Date></S.Date>
                <S.Icon src={IconSun} />
              </S.EachDayWrapper>
            );
          })}
        </S.ContentWrapper>
        <S.ChartWrapper>
          <ReactApexChart
            options={options}
            series={series}
            type="line"
            height={350}
          />
        </S.ChartWrapper>

        <S.IconsWrapper>
          {/* {data?.DailyForecasts.map((item: any, index: number) => { */}
          {data?.DailyForecasts.map((item, index) => {
            return <S.Icon key={index} src={IconMoon} />;
          })}
        </S.IconsWrapper>
      </S.Container>
    </>
  );
};

export default FiveDaysForecast;
