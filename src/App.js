<<<<<<< HEAD
import Chart from "./ThePerfectAreachart";

const data = [
  {
    name: "J",
    pv: 0,
    uv: 0,
  },
  {
    name: "F",
    pv: 50,
    uv: 70,
  },
  {
    name: "M",
    pv: 200,
    uv: 30,
  },
  {
    name: "A",
    pv: 55,
    uv: 160,
  },
  {
    name: "M",
    pv: 250,
    uv: 24,
  },
  {
    name: "J",
    pv: 35,
    uv: 67,
  },
  {
    name: "J",
    pv: 0,
    uv: 0,
  },
];

const areas = [
  { key: "pv", fill: "#e431ff" },
  { key: "uv", fill: "#8F44FD" },
];

function App() {
  return <Chart data={data} areas={areas} />;
=======
import styled from "styled-components";

import Chart from "./Chart";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const data1 = [
  {
    name: "A",
    value: 45,
    fill: "#bc6cca",
  },
  {
    name: "B",
    value: 20,
    fill: "#f1b35f",
  },
  {
    name: "C",
    value: 25,
    fill: "#f13b59",
  },
  {
    name: "D",
    value: 140,
    fill: "#633eba",
  },
];

const data2 = [
  {
    name: "A",
    value: 20,
    fill: "#2D2D2D",
  },
  {
    name: "B",
    value: 25,
    fill: "#00AAF2",
  },
  {
    name: "C",
    value: 35,
    fill: "#8F44FD",
  },
];

const data3 = [
  {
    name: "A",
    value: 20,
    fill: "#ffc007",
  },
  {
    name: "B",
    value: 25,
    fill: "#ee6000",
  },
  {
    name: "C",
    value: 35,
    fill: "#26a69a",
  },
  {
    name: "D",
    value: 35,
    fill: "#6101ee",
  },
];

function App() {
  return (
    <StyledWrapper>
      <Chart data={data1} dataKey="value" />
      <Chart data={data2} dataKey="value" isDonut />
      <Chart data={data3} dataKey="value" isDonut isPadded />
    </StyledWrapper>
  );
>>>>>>> 7de3226473a943772f69130c296926e293ecfe08
}

export default App;
