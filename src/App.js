// import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';
import ContentContainer from './components/ContentContainer/ContentContainer';
import SideBar from './components/SideBar/SideBar';

import Chart1 from './assets/chart1_allegro_stock.png';
import Chart2 from './assets/chart2_allegro_stock.png';
import Chart3 from './assets/chart3_cdp_stock.png';
import PieChart from './assets/some_pie_chart.png';

import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <SideBar />
      <ContentContainer>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/portfolio" element={<span>My portfolio subpage</span>} />
          <Route path="/stocks" element={<span>Stocks subpage</span>} />
          <Route path="/gm" element={<span>General meetings subpage</span>} />
          <Route path="/help" element={<span>Help subpage</span>} />
      </Routes>
      </ContentContainer>
    </div>
  );
}

function Dashboard() {
  return (
    <>
        <input type="text" placeholder="Search.."/>
        <Card size="small">card 1</Card>
        <Card size="big">card 2</Card>
        <Card size="big">card 3</Card>
        <Card size="bigger center"><img src={Chart1} alt="chart 1"/></Card>
        <Card size="bigger center"><img src={Chart2} alt="chart 2"/></Card>
        <Card size="bigger center"><img src={Chart3} alt="chart 3"/></Card>
        <Card size="bigger center"><img src={PieChart} alt="pie chart"/></Card>
    </>
  );
}

export default App;
