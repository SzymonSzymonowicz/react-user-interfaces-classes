// import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';
import ContentContainer from './components/ContentContainer/ContentContainer';
import SideBar from './components/SideBar/SideBar';

import Chart1 from './assets/chart1_allegro_stock.png';
import Chart2 from './assets/chart2_allegro_stock.png';
import Chart3 from './assets/chart3_cdp_stock.png';
import PieChart from './assets/some_pie_chart.png';

function App() {
  return (
    <div className="app">
      <SideBar />
      <ContentContainer>
        <input type="text" placeholder="Search.."/>
        <Card size="small">card 1</Card>
        <Card size="big">card 2</Card>
        <Card size="big">card 3</Card>
        <Card size="bigger center"><img src={Chart1} alt="chart 1"/></Card>
        <Card size="bigger center"><img src={Chart2} alt="chart 2"/></Card>
        <Card size="bigger center"><img src={Chart3} alt="chart 3"/></Card>
        <Card size="bigger center"><img src={PieChart} alt="pie chart"/></Card>
      </ContentContainer>
    </div>
  );
}

export default App;
