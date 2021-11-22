import 'antd/dist/antd.css';
import './App.css';
import { Typography } from 'antd';
import Banner from './components/Banner';
import Article from './components/Article';
import CarouselImages from './components/CarouselImages';
import CarouselAudios from './components/CarouselAudios';

function App() {
  return (
    <div className="App">
      <Banner />
      <div className="container">
        <Typography.Title level={1}>Servicios ambientales</Typography.Title>
        <Article />
        <CarouselImages />
        <CarouselAudios />
      </div>
    </div>
  );
}

export default App;
