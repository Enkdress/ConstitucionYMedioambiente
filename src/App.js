import 'antd/dist/antd.css';
import './App.css';
import { Typography } from 'antd';
import Banner from './components/Banner';
import Article from './components/Article';
import CarouselImages from './components/CarouselImages';
import CarouselAudios from './components/CarouselAudios';

const { Paragraph } = Typography;
function App() {
  return (
    <div className="App">
      <Banner />
      <div className="container">
        <Typography.Title level={1}>Servicios ambientales</Typography.Title>
        <Article />

        <Typography.Title level={1}>Relacionando la constitución con el medio ambiente</Typography.Title>
        <Typography style={{ textAlign: "justify" }}>
          <Paragraph>
            En Colombia se creó, en el año 1991 una carta magna o también sabemos una constitución, la cual
            es la ley suprema de un Estado que establece, organiza y faculta la actuación de los poderes
            públicos, limitando el poder político y garantizando derechos y libertades para las personas.
            La creación de las constituciones está en beneficiar a las sociedades de bajos recursos donde
            busca la mitigación de sus necesidades. Pero están acabando con las oportunidades de vivienda y
            de trabajo, donde el nivel de pobreza ha aumentado un rango mayor o un porcentaje mayor,
            dónde el único recurso de las personas afectadas económicamente para el sostenimiento de sus
            necesidades y adoptar esa última opción que es el robo.
            Dónde en Colombia podemos ver muchas actividades que dan oportunidad de trabajo, dando
            soluciones para acabar el aumento de nivel de pobreza. Pero que les va a importar el estado y la
            misma sociedad, las necesidades humanitarias en Colombia, si no, nos importa el cuidado
            ambiental en zonas de mayor contaminación visual, por ejemplo en zonas agropecuarias, zonas
            verdes, parques, colegios, cerros, etc. Hasta en su propio sector de vivienda, no les importa el
            cuidado ambiental, para así cambiar un poco nuestro estilo de vida y dar ejemplo del cuidado de
            nuestro país ambientalmente.
            Mediante a estas situaciones, estudiantes de la universidad Antonio José Camacho del área de
            constitución y ciudadanía, ha realizado un proyecto de limpieza en el cerro de las tres cruces en la
            ciudad de Cali, donde la idea es cautivar con el ejemplo a los ciudadanos que transitan por este
            lugar, para cuidar del medio ambiente, donde buscamos mejorar la vida de las personas, con
            oportunidades económicas, por ejemplo la agricultura mediante el ciudadano de limpieza de
            terrenos, más oportunidades y beneficios económicos, para una mejor sociedad limpia y con
            oportunidades.
          </Paragraph>
        </Typography>
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
