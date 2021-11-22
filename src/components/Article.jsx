import { Typography, Image } from 'antd';
const { Paragraph, Title } = Typography;

const Article = () => {

  return (
    <Typography style={{ textAlign: "justify" }}>
      <Title level={3}>¿Por qué las políticas y la constitución deben defender a la naturaleza?</Title>
      <div style={{ margin: "0 auto" }}>
        <Image
          height={320}
          src="/img/article.png"
        />
      </div>
      <Paragraph>
        La respuesta es muy sencilla, como muestra la anterior imagen donde se puede evidenciar algo que la sociedad no tiene en cuenta y es el impacto que tiene la naturaleza sobre la economía del país.
      </Paragraph>
      <Paragraph>
        Los servicios ambientales son la materia prima de muchas empresas que necesitan de estos recursos para poder producir bienes y servicios, las empresas eléctricas necesitan del agua para mover sus turbinas, las empresas textiles del algodón que producen las plantas, las empresas que producen cauchos y sintéticos necesitan de los árboles que producen la materia prima, y si seguimos hablando de empresas ninguna se salva de usar algún elemento de la naturaleza para poder hacer su operación o derivados de la misma.
      </Paragraph>
      <Paragraph>
        Creemos que las políticas y la misma constitución debe defender el buen uso que se le dé a la naturaleza porque en la mayoría de casos no son renovables y que muchas industrias atentan directamente contra ellas hasta dejarla estéril como lo son la minería, la tala de árboles para las empresas madereras y de cartón, la ganadería entre otras. Por estas razones las políticas deben tener componentes estructurales que impidan que el ciclo de vida de estos servicios naturales se destruya y de paso la vida de muchas especies que en ella habita incluyendo la de los seres humanos, la importancia del agua como materia prima de la supervivencia de todas las especies es la de mayor impacto en el momento.
      </Paragraph>
      <Paragraph>
        El medio ambiente y su protección se han convertido en los temas básicos de la sociedad. Moderno, por la influencia de su ignorancia Está creando la tierra para el presente y las generaciones futuras. Debido al daño ambiental todos los ámbitos de la sociedad tienen y seguirán afectando todo tipo de derechos. Los seres humanos son una fuente importante de vida El derecho básico de todos, la vida. Consciente de los problemas medioambientales, Vivir en nuestras diferentes comunidades todos los días Países y necesidad de sensibilización Comunidad general.
      </Paragraph>
    </Typography>
  )
}

export default Article;
