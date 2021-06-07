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
}

export default App;
