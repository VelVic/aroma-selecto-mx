import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

const FragranceInfoPage = () => {
  // Animaciones para secciones principales
  const heroAnim = useScrollFadeIn();
  const queEsAnim = useScrollFadeIn();
  const tiposAnim = useScrollFadeIn();
  const notasAnim = useScrollFadeIn();
  const elegirAnim = useScrollFadeIn();
  const cuidadosAnim = useScrollFadeIn();
  const faqAnim = useScrollFadeIn();
  const ctaAnim = useScrollFadeIn();

  return (
    <div className="bg-white pt-16">
    {/* Hero/Encabezado */}
    <section 
      {...heroAnim}
    className={`relative bg-[#2C3E50] text-white py-20 transition-all duration-700 ${heroAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-logo font-bold mb-6">El Fascinante Mundo de las Fragancias: Un Viaje Olfativo</h1>
        <p className="text-lg md:text-xl text-[#BDC3C7] mb-8">¡Bienvenido al cautivador universo de los aromas! Aquí, exploraremos la magia detrás de cada gota de perfume, desentrañando sus secretos y aprendiendo a apreciarlos al máximo. Prepárate para despertar tus sentidos y sumergirte en un viaje olfativo inolvidable.</p>
      </div>
    </section>

    {/* ¿Qué es una fragancia? */}
    <section 
      {...queEsAnim}
      className={`py-8 transition-all duration-700 ${queEsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-3xl mx-auto px-4">
        <SectionTitle>¿Qué es una fragancia?</SectionTitle>
        <p className="text-base md:text-lg text-[#2C3E50] mt-4">En pocas palabras, una fragancia es una mezcla compleja de compuestos aromáticos, o notas, disueltos en alcohol y agua. Su objetivo principal es emitir un olor agradable, ya sea en el cuerpo humano, en objetos o en el ambiente. Más allá de su función básica, las fragancias tienen el poder de evocar emociones, recuerdos y hasta influir en nuestro estado de ánimo. Son una forma de arte invisible, una extensión de nuestra personalidad y una herramienta para dejar una impresión duradera.</p>
      </div>
    </section>

    {/* Tipos de fragancias */}
    <section
      {...tiposAnim}
      className={`py-8 transition-all duration-700 ${tiposAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle>Tipos de fragancias: Concentración y duración</SectionTitle>
        <p className="mb-6 text-[#2C3E50]">La intensidad y la duración de una fragancia dependen de la concentración de aceites aromáticos en su composición. Aquí te explicamos los tipos más comunes, de mayor a menor concentración:</p>

        {/* Espacio para imagen ilustrativa */}
        <div className="w-full flex justify-center mb-8">
          {/* Inserta aquí tu imagen ilustrativa si lo deseas */}
          {/* <img src="/ruta/tu-imagen.jpg" alt="Tabla de concentraciones" className="max-w-md rounded-lg shadow" /> */}
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm text-left bg-white">
            <thead className="bg-[#F9F9F9]">
              <tr>
                <th className="px-4 py-2 font-semibold text-[#2C3E50] border-b">Tipo</th>
                <th className="px-4 py-2 font-semibold text-[#2C3E50] border-b">Concentración</th>
                <th className="px-4 py-2 font-semibold text-[#2C3E50] border-b">Duración</th>
                <th className="px-4 py-2 font-semibold text-[#2C3E50] border-b">Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">Extracto de Perfume (Parfum)</td>
                <td className="px-4 py-2">20-40%</td>
                <td className="px-4 py-2">8-12 horas</td>
                <td className="px-4 py-2">Muy duradero, ideal para ocasiones especiales.</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Eau de Parfum (EdP)</td>
                <td className="px-4 py-2">15-20%</td>
                <td className="px-4 py-2">6-8 horas</td>
                <td className="px-4 py-2">Versátil para uso diario y eventos.</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Eau de Toilette (EdT)</td>
                <td className="px-4 py-2">5-15%</td>
                <td className="px-4 py-2">3-5 horas</td>
                <td className="px-4 py-2">Perfecto para el día y climas cálidos.</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Eau de Cologne (EdC)</td>
                <td className="px-4 py-2">2-4%</td>
                <td className="px-4 py-2">~2 horas</td>
                <td className="px-4 py-2">Refrescante, duración corta.</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Eau Fraîche</td>
                <td className="px-4 py-2">1-3%</td>
                <td className="px-4 py-2">~1 hora</td>
                <td className="px-4 py-2">Muy ligera, ideal para después de la ducha o calor intenso.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* Notas olfativas */}
    <section
      {...notasAnim}
      className={`py-8 transition-all duration-700 ${notasAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle>Notas olfativas: La pirámide aromática</SectionTitle>
        <p className="mb-6 text-[#2C3E50]">Las fragancias se construyen como una sinfonía, con diferentes capas de aromas que se revelan con el tiempo. Esto se conoce como la pirámide olfativa, y se divide en tres tipos de notas:</p>
        <ul className="space-y-4 text-base">
          <li><strong>Notas de Salida (Cabeza):</strong> Primeras en percibirse, ligeras y volátiles. Ej: cítricos, hierbas frescas.</li>
          <li><strong>Notas de Corazón (Medias):</strong> El "corazón" de la fragancia, más ricas y complejas. Ej: flores, especias.</li>
          <li><strong>Notas de Fondo (Base):</strong> Las más duraderas y profundas. Ej: maderas, resinas, vainilla, almizcle.</li>
        </ul>
      </div>
    </section>

    {/* Cómo elegir la fragancia perfecta */}
    <section
      {...elegirAnim}
      className={`py-8 transition-all duration-700 ${elegirAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle>Cómo elegir la fragancia perfecta</SectionTitle>
        <ul className="space-y-4 text-base">
          <li><strong>Pruébala en tu piel:</strong> La química de cada persona es única. Aplícala en puntos de pulso y deja que evolucione.</li>
          <li><strong>No te apresures:</strong> Espera 15-30 minutos para apreciar todas las notas.</li>
          <li><strong>Prueba pocas a la vez:</strong> No más de 3 o 4 fragancias por sesión.</li>
          <li><strong>Considera la ocasión y la estación:</strong> Frescas para el día/verano, cálidas para la noche/invierno.</li>
          <li><strong>Confía en tu instinto:</strong> Elige la que te haga sentir bien y seguro.</li>
        </ul>
      </div>
    </section>

    {/* Cuidados y almacenamiento */}
    <section
      {...cuidadosAnim}
      className={`py-8 transition-all duration-700 ${cuidadosAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle>Cuidados y almacenamiento</SectionTitle>
        <ul className="space-y-4 text-base">
          <li><strong>Manténlas en un lugar fresco y oscuro:</strong> Evita la luz solar y cambios de temperatura.</li>
          <li><strong>Evita el baño:</strong> La humedad y el calor pueden degradar la fragancia.</li>
          <li><strong>Cierra bien la tapa:</strong> Para evitar evaporación y oxidación.</li>
          <li><strong>No las agites excesivamente:</strong> El aire acelera la oxidación.</li>
        </ul>
      </div>
    </section>

    {/* Preguntas frecuentes */}
    <section
      {...faqAnim}
      className={`py-8 transition-all duration-700 ${faqAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle>Preguntas frecuentes (FAQ)</SectionTitle>
        <div className="space-y-6 text-base">
          <div>
            <strong>¿Cuánto dura una fragancia en la piel?</strong>
            <p>Depende del tipo (EdP, EdT, etc.), tu piel, el clima y las notas. Un EdP puede durar 6-8 horas, un EdC unas 2 horas.</p>
          </div>
          <div>
            <strong>¿Por qué una fragancia huele diferente en diferentes personas?</strong>
            <p>Por la química individual de la piel: pH, temperatura, dieta, etc. Esto altera ligeramente el aroma.</p>
          </div>
          <div>
            <strong>¿Debo aplicar fragancia en la ropa?</strong>
            <p>Mejor en la piel. Algunos tejidos pueden mancharse y el aroma evoluciona mejor con tu química corporal.</p>
          </div>
          <div>
            <strong>¿Las fragancias tienen fecha de caducidad?</strong>
            <p>Sí, pero bien almacenadas duran 3-5 años. Si cambia el color, olor o consistencia, probablemente se echó a perder.</p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA final */}
    <section
      {...ctaAnim}
      className={`py-8 bg-white text-center transition-all duration-700 ${ctaAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-logo font-bold mb-6">¡Descubre tu próximo aroma favorito!</h2>
        <p className="mb-8 text-[#2C3E50]">¿Listo para explorar más a fondo el mundo de las fragancias?</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button as="link" to="/productos" variant="primary">Ver Catálogo de Productos</Button>
          <Button as="link" to="/contacto" variant="outline" >Contactame para asesoría</Button>
        </div>
      </div>
    </section>
  </div>
);
}

export default FragranceInfoPage;