

const PrivacidadPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-white via-[#f8f8f8] to-[#f3f3f3] flex items-center justify-center py-12 px-4 mt-16">
    <div className="w-full max-w-2xl bg-white/95 rounded-2xl shadow-2xl p-8 md:p-12 border border-[#D4AF37]/20 relative">
      <div className="flex items-center mb-6">
        <svg className="h-10 w-10 text-[#D4AF37] mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-1.657 2-3 4-3s4 1.343 4 3-2 3-4 3-4-1.343-4-3zm0 0V7a4 4 0 10-8 0v4c0 2.21 1.79 4 4 4s4-1.79 4-4z" /></svg>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#D4AF37] tracking-tight">Política de Privacidad</h1>
      </div>
      <p className="mb-6 text-[#444] text-lg">Tu privacidad es importante para Aroma Selecto MX. Aquí te explico cómo se recopila, utiliza y protege tu información personal.</p>
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-bold text-[#D4AF37] mb-2 flex items-center"><span className="mr-2">1.</span> Información que recopilamos</h2>
          <ul className="list-disc ml-6 text-[#444] text-base space-y-1">
            <li>Datos de contacto proporcionados en formularios (nombre, correo electrónico, teléfono).</li>
            <li>Información de pedidos y envíos.</li>
            <li>Datos de navegación anónimos para mejorar la experiencia del sitio.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[#D4AF37] mb-2 flex items-center"><span className="mr-2">2.</span> Uso de la información</h2>
          <ul className="list-disc ml-6 text-[#444] text-base space-y-1">
            <li>Procesar pedidos y responder consultas.</li>
            <li>Mejorar el servicio y la experiencia de usuario.</li>
            <li>No compartimos tu información con terceros, salvo para cumplir con servicios de entrega o requerimientos legales.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[#D4AF37] mb-2 flex items-center"><span className="mr-2">3.</span> Seguridad</h2>
          <p className="text-[#444] text-base">Tus datos se almacenan de forma segura y solo se usan para los fines mencionados.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[#D4AF37] mb-2 flex items-center"><span className="mr-2">4.</span> Derechos del usuario</h2>
          <p className="text-[#444] text-base">Puedes solicitar la corrección o eliminación de tus datos personales en cualquier momento escribiendo a <a href="mailto:aromaselecto.mx@gmail.com" className="text-[#D4AF37] underline">aromaselecto.mx@gmail.com</a>.</p>
        </section>
      </div>
      <p className="text-xs text-[#888] mt-10 text-right">Última actualización: Julio 2025</p>
      <div className="absolute -top-6 right-8 hidden md:block">
        <svg className="h-12 w-12 text-[#D4AF37]/10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
      </div>
    </div>
  </div>
);

export default PrivacidadPage;
