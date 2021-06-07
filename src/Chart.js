import styled from "styled-components";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const StyledWrapper = styled.div``;

const StyledCard = styled.div`
  margin: 0 1rem 1rem;
  padding: 1rem;
  background: #100f10;
  border-radius: 1rem;
  width: 200px;
  height: 220px;
`;

const Chart = ({ data, dataKey, isPadded, isDonut }) => {
  return (
    <StyledWrapper>
      <StyledCard>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey={dataKey}
              startAngle={90}
              endAngle={450}
              paddingAngle={isPadded ? 8 : null}
              innerRadius={isDonut ? 64 : null}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} stroke={0} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </StyledCard>
    </StyledWrapper>
  );
};

export default Chart;
