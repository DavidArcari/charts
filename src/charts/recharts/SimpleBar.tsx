import { PureComponent, ReactNode } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { barData } from '../../data/barData';

export default class SimpleBar extends PureComponent {
  render() {
    return (
      <div style={{ height: "400px" }}>
        <h2>Simple Bar Chart - Recharts</h2>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={barData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="country" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="hot dog" fill="hsl(354, 70%, 50%)" />
          <Bar dataKey="burger" fill="hsl(213, 70%, 50%)" />
          <Bar dataKey="sandwich" fill="hsl(256, 70%, 50%)" />
          <Bar dataKey="kebab" fill="hsl(296, 70%, 50%)" />
          <Bar dataKey="fries" fill="hsl(135, 70%, 50%)" />
          <Bar dataKey="donut" fill="hsl(21, 70%, 50%)" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    );
  }
}