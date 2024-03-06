import './App.css';
import Testimonio from './components/Testimonio'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen los estudiantes de CEUTEC:</h1>
        <Testimonio
          imagen='testimonio-emma.png'
          nombre='Emma Bostian'
          pais='Suecia'
          cargo='Ingeniera de software'
          empresa='Spotify'
          testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero la clase de programación web I fue donde aprendí. Estudiar JavaScript, así como estructuras de datos y algoritmos en la clase me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.' />

        <Testimonio
          imagen='ArianaGrande.jpg'
          nombre='Ariana Grande'
          pais='Estados Unidos'
          cargo='RSB Projects'
          empresa='Republic Records'
          testimonio='Tras dos años de intenso estudio y dedicación, Ariana finalmente se graduó como ingeniera de software con honores. Google le ofreció un puesto en su equipo de desarrollo de aplicaciones móviles, donde ahora trabaja en proyectos innovadores que utilizan la inteligencia artificial para mejorar la experiencia de los usuarios.' />
 
        <Testimonio
          imagen='hrmarquez.png'
          nombre='Hector Rene Marquez'
          pais='Honduras'
          cargo='Tecnico en Desarrollo de Aplicaciones Web'
          empresa='Silicon Valley'
          testimonio='Héctor René nunca olvidó sus orígenes. Desde su posición en Silicon Valley, se propuso utilizar su conocimiento y experiencia para contribuir al desarrollo de su país. Fundó una organización sin fines de lucro que ofrece formación en tecnología a jóvenes de escasos recursos en Honduras.' />
 
        <Testimonio
          imagen='testimonio-sarah.png'
          nombre='Sarah'
          pais='Francia'
          cargo='Ingeniera de software'
          empresa='Multinacional'
          testimonio='Sarah Okonor nació en un pequeño pueblo de las montañas, rodeada de naturaleza y lejos del bullicio de la ciudad. Desde pequeña, mostró una fascinación por las máquinas y una mente brillante para la lógica. Su pasión por la tecnología la llevó a estudiar ingeniería de software en CEUTEC, donde se graduó con honores.' />
         
         <Testimonio
          imagen='RagnarLodbrok.jpg'
          nombre='Ragnar Lodbrok'
          pais='Dinamarca'
          cargo='El Rey Serpiente'
          empresa='Mito e Historia'
          testimonio='Las sagas nórdicas nos cuentan que Ragnar nació en una familia de granjeros en Dinamarca, pero su destino no estaba ligado a la tierra. Desde joven, su espíritu inquieto y su habilidad innata para la estrategia lo llevaron a destacar en las incursiones vikingas. Rápidamente escaló posiciones, convirtiéndose en jarl, un noble guerrero al servicio del rey sueco Horik I.' />
         
         <Testimonio
          imagen='testimonio-shawn.png'
          nombre='Shawn Lee'
          pais='Indonesia'
          cargo='Ingeniero en informática'
          empresa='Emergente'
          testimonio='Tras graduarse con honores en ingeniería informática, Shawn consiguió un trabajo como desarrollador backend en una empresa emergente. Su trabajo consistía en crear la arquitectura y la lógica que sustentaban las aplicaciones web de la empresa. Su meticulosidad y atención al detalle lo convirtieron en un activo invaluable para el equipo.' />
                       
      
      </div>
    </div>
  );
}

export default App;
