import { ResponsiveCirclePacking } from '@nivo/circle-packing';
import { ciclePackingData } from '../../data/circlePackingData';

const CirclePackingChart = () => {
  return (
    <div style={{ height: "400px" }}>
      <h2>Circle Packing Chart - Nivo</h2>
      <ResponsiveCirclePacking
        data={ciclePackingData}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        id="name"
        value="loc"
        colors={{ scheme: 'nivo' }}
        childColor={{
          from: 'color',
          modifiers: [
            [
              'brighter',
              0.4
            ]
          ]
        }}
        padding={4}
        enableLabels={true}
        labelsFilter={function (n) { return 2 === n.node.depth }}
        labelsSkipRadius={10}
        labelTextColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              2
            ]
          ]
        }}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              0.5
            ]
          ]
        }}
        defs={[
          {
            id: 'lines',
            type: 'patternLines',
            background: 'none',
            color: 'inherit',
            rotation: -45,
            lineWidth: 5,
            spacing: 8
          }
        ]}
        fill={[
          {
            match: {
              depth: 1
            },
            id: 'lines'
          }
        ]}
      />
    </div>
  );
}

export default CirclePackingChart;