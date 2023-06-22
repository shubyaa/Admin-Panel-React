import React from "react";
import ReactApexChart from "react-apexcharts";

const AreaChart = (props) => {
  const options = {
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "text",
      categories: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },

    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };
  return (
    <div>
      <ReactApexChart
        options={options}
        series={props.series}
        type="area"
        height={props.height}
        width={props.width}
      />
    </div>
  );
};

export default AreaChart;
