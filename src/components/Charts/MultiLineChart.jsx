import React from "react";
import ReactApexChart, { Chart } from "react-apexcharts";

const MultiLineChart = (props) => {
  const options = {
    chart: {
      height: 350,
      type: "line",
      toolbar: {
        show: false,
      },
    },
    // colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      offsetY: 15,
      labels:{
        style: {
          colors: "rgba(163, 163, 163, 1)",
          fontSize: "15px",
        },
      }
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return val / 1000 + "k";
        },
        style: {
          colors: "rgba(163, 163, 163, 1)",
          fontSize: "15px",
        },
      },
    },
    legend: {
      show: true,
      fontSize: "15px",
      position: "top",
      horizontalAlign: "right",
      fontFamily: "Poppins",
    },
  };
  return (
    <div className=" flex items-center flex-col">
      <ReactApexChart
        options={options}
        series={props.series}
        type="line"
        height={props.height}
        width={props.width}
      />
    </div>
  );
};

export default MultiLineChart;
