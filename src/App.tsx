import { useState } from 'react';
import styled from 'styled-components';
import BarChart from './charts/nivo/BarChart';
import BumpChart from './charts/nivo/BumpChart';
import CirclePackingChart from './charts/nivo/CirclePackingChart';
import VerticalBarChart from './charts/react-chartjs-2/VerticalBarChart';
import LineChart from './charts/react-chartjs-2/LineChart';
import AreaChart from './charts/react-chartjs-2/AreaChart';
import BarGroupChart from './charts/visx/BarGroupChart';
import AreasChart from './charts/visx/AreasChart';
import ChordChart from './charts/visx/ChordChart';
import SimpleBar from './charts/recharts/SimpleBar';
import SimpleArea from './charts/recharts/SimpleArea';
import SimpleLine from './charts/recharts/SimpleLine';

interface ContainerProps {
  backgroundColor?: string;
  width?: string;
  height?: string;
}

interface HeaderProps {
  backgroundColor?: string;
  height?: string;
}

interface ButtonProps {
  isActive?: boolean;
}

const Container = styled.div<ContainerProps>`
  background-color: ${(props) => props.backgroundColor || 'white'};
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DivContainer = styled.div`
  width: 100%;
`;

const ChartContainer = styled.div`
  height: 400px;
  padding: 20px;
  align-items: center;
  margin-bottom: 20px;
`;

const Header = styled.div<HeaderProps>`
  background-color: ${(props) => props.backgroundColor || 'white'};
  width: 100%;
  height: ${(props) => props.height || '60px'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.isActive ? 'lightblue' : 'white')};
  border: none;
  color: ${(props) => (props.isActive ? 'white' : 'black')};
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  padding: 10px;
  margin-right: 10px;

  &:last-of-type {
    margin-right: 0;
  }
`;

function App() {
  const [isActiveNivo, setIsActiveNivo] = useState(false);
  const [isActiveReactChart, setIsActiveReactChart] = useState(false);
  const [isActiveRecharts, setIsActiveRecharts] = useState(false);
  const [isActiveVisx, setIsActiveVisx] = useState(false);

  const handleClickNivo = () => {
    setIsActiveNivo(true);
    setIsActiveReactChart(false);
    setIsActiveRecharts(false);
    setIsActiveVisx(false);
  };

  const handleClickReactChart = () => {
    setIsActiveReactChart(true);
    setIsActiveNivo(false);
    setIsActiveRecharts(false);
    setIsActiveVisx(false);
  };

  const handleClickRecharts = () => {
    setIsActiveRecharts(true);
    setIsActiveNivo(false);
    setIsActiveReactChart(false);
    setIsActiveVisx(false);
  };

  const handleClickVisx = () => {
    setIsActiveVisx(true);
    setIsActiveNivo(false);
    setIsActiveReactChart(false);
    setIsActiveRecharts(false);
  };

  return (
    <Container>
      <Header backgroundColor="#F5F5F5" height="80px">
        <h1>Lib's para Gráficos</h1>
        <div>
          <Button isActive={isActiveNivo} onClick={handleClickNivo}>
            NIVO
          </Button>
        </div>
        <div>
          <Button isActive={isActiveReactChart} onClick={handleClickReactChart}>
            REACT CHART 2
          </Button>
        </div>
        <div>
          <Button isActive={isActiveVisx} onClick={handleClickVisx}>
            VISX
          </Button>
        </div>
        <div>
          <Button isActive={isActiveRecharts} onClick={handleClickRecharts}>
            RECHARTS
          </Button>
        </div>
      </Header>
      <h2>Escolha uma lib</h2>
      <DivContainer>
        {(() => {
          if (isActiveNivo) {
            return (
              <div>
                <ChartContainer>
                  <BarChart />
                </ChartContainer>
                <ChartContainer>
                  <BumpChart />
                </ChartContainer>
                <ChartContainer>
                  <CirclePackingChart />
                </ChartContainer>
              </div>
            )
          } else if (isActiveReactChart) {
            return (
              <div>
                <ChartContainer>
                  <VerticalBarChart />
                </ChartContainer>
                <ChartContainer>
                  <LineChart />
                </ChartContainer>
                <ChartContainer>
                  <AreaChart />
                </ChartContainer>
              </div>
            )
          } else if (isActiveVisx) {
            return (
              <div>
                <ChartContainer>
                  <BarGroupChart width={1000} height={400} />
                </ChartContainer>
                <ChartContainer>
                  <AreasChart width={1000} height={400} />
                </ChartContainer>
                <ChartContainer>
                  <ChordChart width={1000} height={400} />
                </ChartContainer>
              </div>
            )
          } else if (isActiveRecharts) {
            return (
              <div>
                <ChartContainer>
                  <SimpleBar />
                </ChartContainer>
                <ChartContainer>
                  <SimpleArea />
                </ChartContainer>
                <ChartContainer>
                  <SimpleLine />
                </ChartContainer>
              </div>
            )
          }
        })()}
      </DivContainer>
    </Container>
  );
}
export default App;
