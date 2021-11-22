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

        <Typography.Title level={3}>Evidencias</Typography.Title>
        <Typography.Title level={5}>Imagenes de la actividad</Typography.Title>
        <CarouselImages />
        <Typography.Title level={5}>Audios respondiendo las preguntas</Typography.Title>
        <CarouselAudios />
      </div>
    </div>
  );
}

export default App;
