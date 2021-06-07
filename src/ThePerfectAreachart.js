import styled from "styled-components";

import {
  AreaChart,
  Area,
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
  height: 220px;
`;

const Wrapper = ({ data, areas }) => {
  return (
    <StyledWrapper>
      <StyledCard>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
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
              interval={0}
              dataKey="name"
            />
            <YAxis
              domain={[0, 300]}
              axisLine={false}
              tickLine={false}
              width={40}
            />
            {areas.map((area) => (
              <Area
                type="monotone"
                key={area.key}
                dataKey={area.key}
                fill={area.fill}
                stroke={0}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </StyledCard>
    </StyledWrapper>
  );
};

export default Wrapper;
