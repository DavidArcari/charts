import { Arc } from '@visx/shape';
import { Group } from '@visx/group';
import { Chord, Ribbon } from '@visx/chord';
import { scaleOrdinal } from '@visx/scale';
import { LinearGradient } from '@visx/gradient';

const pink = '#ff2fab';
const orange = '#ffc62e';
const purple = '#dc04ff';
const purple2 = '#7324ff';
const red = '#d04376';
const green = '#52f091';
const blue = '#04a6ff';
const lime = '#00ddc6';
const bg = '#e4e3d8';

const dataMatrix = [
  [11975, 5871, 8916, 2868],
  [1951, 10048, 2060, 6171],
  [8010, 16145, 8090, 8045],
  [1013, 990, 940, 6907],
];

function descending(a: number, b: number): number {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}

const color = scaleOrdinal<number, string>({
  domain: [0, 1, 2, 3],
  range: ['url(#gpinkorange)', 'url(#gpurplered)', 'url(#gpurplegreen)', 'url(#gbluelime)'],
});

export type ChordProps = {
  width: number;
  height: number;
  centerSize?: number;
  events?: boolean;
};

export default function ChordChart({ width, height, centerSize = 20, events = false }: ChordProps) {
  height -= 77;
  const outerRadius = Math.min(width, height) * 0.5 - (centerSize + 10);
  const innerRadius = outerRadius - centerSize;

  return width < 10 ? null : (
    <div>
      <h2>Chord Chart - Visx</h2>
      <div className="chords">
        <svg width={width} height={height}>
          <LinearGradient id="gpinkorange" from={pink} to={orange} vertical={false} />
          <LinearGradient id="gpurplered" from={purple} to={red} vertical={false} />
          <LinearGradient id="gpurplegreen" from={purple2} to={green} vertical={false} />
          <LinearGradient id="gbluelime" from={blue} to={lime} vertical={false} />
          <rect width={width} height={height} fill={bg} rx={14} />
          <Group top={height / 2} left={width / 2}>
            <Chord matrix={dataMatrix} padAngle={0.05} sortSubgroups={descending}>
              {({ chords }) => (
                <g>
                  {chords.groups.map((group, i) => (
                    <Arc
                      key={`key-${i}`}
                      data={group}
                      innerRadius={innerRadius}
                      outerRadius={outerRadius}
                      fill={color(i)}
                      onClick={() => {
                        if (events) alert(`${JSON.stringify(group)}`);
                      }}
                    />
                  ))}
                  {chords.map((chord, i) => (
                    <Ribbon
                      key={`ribbon-${i}`}
                      chord={chord}
                      radius={innerRadius}
                      fill={color(chord.target.index)}
                      fillOpacity={0.75}
                      onClick={() => {
                        if (events) alert(`${JSON.stringify(chord)}`);
                      }}
                    />
                  ))}
                </g>
              )}
            </Chord>
          </Group>
        </svg>
      </div>
    </div>
  );
}
