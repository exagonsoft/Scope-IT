import React from "react";
import "./dashboardchardstyles.css";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

const DashboardChard = (props) => {
  const { _new, in_progress, in_review, won } = props;
  const option = {
    toolbox: {
       feature: {
        saveAsImage: {}
       }
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross"
      },
      backgroundColor: "#fff",
      borderWidth: 0,
    },
    textStyle: {
        color: '#fff'
    },
    xAxis: {
      type: "category",
      data: ["New", "In Progress", "Under Review", "Won"],
      axisLine: {
        color: "#fff"
      }
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: false
      }
    },
    series: [
      {
        data: [
          { value: _new, itemStyle: { color: "#eab308" } },
          { value: in_progress, itemStyle: { color: "#ec4899" } },
          in_review,
          {value: won, itemStyle: {color: '#22c55e'}},
        ],
        type: "bar",
      },
    ],
  };
  return (
    <div className="w-full">
      <ReactECharts option={option} />
    </div>
  );
};

export default DashboardChard;
