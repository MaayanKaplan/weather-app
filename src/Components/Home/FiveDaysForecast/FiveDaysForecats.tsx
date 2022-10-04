import * as S from "./styles";
import { DailyProps } from "./types";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import IconSun from "./Icons/sun-flat.svg";
import IconMoon from "./Icons/moon-flat.svg";
import { nextDaysOfWeek, ConvertDate } from "../../../Utils/TimeConverter";
import { useMedia } from "../../../hooks/useMedia";

const FiveDaysForecast = ({ data }: DailyProps) => {
  const isMobile = useMedia();

  // CHART DATA
  const responsive = [
    {
      breakpoint: 414,
      options: {
        chart: {
          width: 300,
          height: 100,
        },
      },
    },
    {
      breakpoint: 650,
      options: {
        chart: {
          width: 350,
          height: 100,
        },
      },
    },
    {
      breakpoint: 750,
      options: {
        chart: {
          width: 450,
          height: 100,
        },
      },
    },
    {
      breakpoint: 980,
      options: {
        chart: {
          width: 580,
          height: 100,
        },
      },
    },

    {
      breakpoint: 1180,
      options: {
        chart: {
          width: 780,
          height: 100,
        },
      },
    },
    {
      breakpoint: 1280,
      options: {
        chart: {
          width: 880,
          height: 300,
        },
      },
    },
    {
      breakpoint: 1080,
      options: {
        chart: {
          width: 680,
          height: 300,
        },
      },
    },
    {
      breakpoint: 5000,
      options: {
        chart: {
          width: 880,
          height: 300,
        },
      },
    },
  ];
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
    colors: isMobile ? ["#BEBEBE"] : ["#fff"],
    dataLabels: {
      enabled: true,
      formatter: function (value: any) {
        return value + `°`;
      },

      offsetY: -10,
      style: {
        fontSize: isMobile ? "1.4rem" : "2rem",
        fontWeight: "500",
        colors: isMobile ? ["#444E72"] : ["#fff"],
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
