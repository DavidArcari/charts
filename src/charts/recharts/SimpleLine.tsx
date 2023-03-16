import { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { barData } from "../../data/barData";

export default class SimpleLine extends PureComponent {
  render() {
    return (
      <div style={{ height: "400px" }}>
        <h2>Simple Bar Chart - Recharts</h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
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
            <Line type="monotone" dataKey="hot dog" stroke="red" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="burger" stroke="blue" />
            <Line type="monotone" dataKey="sandwich" stroke="green" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="kebab" stroke="black" />
            <Line type="monotone" dataKey="fries" stroke="purple" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="donut" stroke="orange" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

