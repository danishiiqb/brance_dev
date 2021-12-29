import React from "react";
import { Line } from "react-chartjs-2";

function Graph() {
  return (
    <div className="p-small cursor-pointer  w-8/12  relative rounded-md shadow-sm_dark bg-white">
      <h3 className="font-medium text-lg mb-2">Sale Statistics</h3>
      <div>
        <Line
          width={30}
          height={17}
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                label: "Sales",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(250, 12, 100)",
                data: [0, 10, 5, 2, 20, 30, 45],
                fill: true,
                borderWidth: 5,
                hoverBackgroundColor: "rgb(200, 99, 132)"
              },
              {
                label: "Visitors",
                data: [0, 10, 5, 2, 20, 70, 499],
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)"
              }
            ]
          }}
        ></Line>
      </div>
    </div>
  );
}

export default Graph;
