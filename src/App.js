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
}

export default App;
