import Barchart from "./ThePerfectBarchart";

const data = [],
  start = 100;

for (let i = 0; i < 12; i++) {
  data.push({
    name: `W${i + 1}`,
    uv: i % 2 ? start + i * 2 : start - i * 2,
    pv: i % 2 ? start + i * 2 : start - i * 2,
  });
}

const bars = [
  { key: "pv", fill: "#D763CD" },
  { key: "uv", fill: "#212022" },
];

function App() {
  return <Barchart data={data} bars={bars} />;
}

export default App;
