import React from "react";
import "./dashboardpaestyles.css";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

const DashBoardPae = () => {
  const options = {
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: "Participation",
        type: "pie",
        radius: ["40%", "60%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 20,
          borderColor: "black",
          borderWidth: 3,
        },
        label: {
          show: false,
          position: "top"
        },
        emphasis: {
          label: {
            show: false,
            fontSize: 20,
            fontWeight: "bold"
          },
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1, name: "CityKleta" },
          { value: 4, name: "FlexSport" },
          { value: 5, name: "Oncologic Clinic" },
          { value: 3, name: "UsingUs" },
          { value: 2, name: "AllDone" },
          { value: 3, name: "ImaginedEarth" },
        ],
      },
    ],
  };
  return (
    <div>
      <ReactECharts style={{height: 230}} option={options} />
    </div>
  );
};

export default DashBoardPae;
