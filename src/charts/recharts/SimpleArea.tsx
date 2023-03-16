import { PureComponent } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { barData } from '../../data/barData';

export default class SimpleArea extends PureComponent {

  render() {
    return (
      <div style={{ height: "400px" }}>
        <h2>Simple Bar Chart - Recharts</h2>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={barData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="country" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="hot dog" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="burger" stroke="#f082f2" fill="#f082f2" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}