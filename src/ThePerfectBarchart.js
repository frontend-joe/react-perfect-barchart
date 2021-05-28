import styled from "styled-components";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const StyledWrapper = styled.div``;

const StyledCard = styled.div`
  margin: 0 0 1rem;
  padding: 1rem;
  background: #040404;
  border: 6px solid #bdbdbd;
  background-clip: border-box;
  border-radius: 1rem;
  width: 400px;
  height: 280px;
`;

const Wrapper = ({ data, bars }) => {
  return (
    <StyledWrapper>
      <StyledCard>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid vertical={false} stroke="#222222" />
            <XAxis
              axisLine={false}
              tickLine={false}
              interval={1}
              dataKey="name"
            />
            <YAxis
              domain={[0, 300]}
              axisLine={false}
              tickLine={false}
              width={40}
            />
            {bars.map((bar) => (
              <Bar
                key={bar.key}
                barSize={16}
                dataKey={bar.key}
                stackId="a"
                fill={bar.fill}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </StyledCard>
    </StyledWrapper>
  );
};

export default Wrapper;
