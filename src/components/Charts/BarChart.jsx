import React from "react";
import ReactApexChart from "react-apexcharts";

const BarChart = () => {
  const state = {
    series: [
      {
        name: "Inflation",
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      colors: ["rgba(255, 91, 91, 1)", "rgba(247, 198, 4, 1)"],

      plotOptions: {
        bar: {
          columnWidth: 13,
          borderRadius: 0,
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
        },
      },

      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        position: "bottom",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        offsetY: 15,
        labels: {
          style: {
            colors: "rgba(163, 163, 163, 1)",
            fontSize: "15px",
          },
        },

        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "rgba(163, 163, 163, 1)",
            fontSize: "15px",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
    },
  };
  return (
    <div>
      {" "}
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={350}
        width={500}
      />
    </div>
  );
};

export default BarChart;
