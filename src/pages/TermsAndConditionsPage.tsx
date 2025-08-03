
const TerminosCondicionesPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-white via-[#f8f8f8] to-[#f3f3f3] flex items-center justify-center py-12 px-4 mt-16">
    <div className="w-full max-w-2xl bg-white/95 rounded-2xl shadow-2xl p-8 md:p-12 border border-[#D4AF37]/20 relative">
      <div className="flex items-center mb-6">
        {/* Lucide ScrollText icon for terms */}
        <svg className="h-10 w-10 text-[#D4AF37] mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a5 5 0 00-10 0v2M5 9h14a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2z" /></svg>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#D4AF37] tracking-tight">Términos y Condiciones</h1>
      </div>
      <div className="space-y-8 text-[#444]">
        <section className="flex gap-4 items-start">
          {/* Icon for site usage */}
          <span className="mt-1">
            <svg className="h-7 w-7 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M16 3v4M8 3v4" /></svg>
          </span>
          <div>
            <h2 className="text-xl font-bold text-[#D4AF37] mb-2 flex items-center">1. Uso del sitio</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>El uso de este sitio implica la aceptación de estos términos y condiciones.</li>
              <li>El contenido es solo para fines informativos y de compra de productos ofrecidos por Aroma Selecto MX.</li>
            </ul>
          </div>
        </section>
        <section className="flex gap-4 items-start">
          {/* Icon for orders/payments */}
          <span className="mt-1">
            <svg className="h-7 w-7 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 3v4M8 3v4" /><path d="M2 11h20" /></svg>
          </span>
          <div>
            <h2 className="text-xl font-bold text-[#D4AF37] mb-2 flex items-center">2. Pedidos y pagos</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Todos los pedidos están sujetos a disponibilidad y confirmación.</li>
              <li>Los precios pueden cambiar sin previo aviso.</li>
              <li>Para entregas personales/locales, puedes pagar contra entrega.</li>
              <li>Para envíos a otras zonas, el pago debe realizarse en su totalidad antes del envío.</li>
            </ul>
          </div>
        </section>
        <section className="flex gap-4 items-start">
          {/* Icon for shipping/returns */}
          <span className="mt-1">
            <svg className="h-7 w-7 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="1" y="7" width="22" height="13" rx="2" /><path d="M8 7V5a4 4 0 018 0v2" /></svg>
          </span>
          <div>
            <h2 className="text-xl font-bold text-[#D4AF37] mb-2 flex items-center">3. Envíos y devoluciones</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Consulta la sección "Envíos y Devoluciones" para detalles sobre políticas de entrega y cambios.</li>
            </ul>
          </div>
        </section>
        <section className="flex gap-4 items-start">
          {/* Icon for intellectual property */}
          <span className="mt-1">
            <svg className="h-7 w-7 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20v-6M8 20v-4M16 20v-2M12 4v4M4 12h16" /></svg>
          </span>
          <div>
            <h2 className="text-xl font-bold text-[#D4AF37] mb-2 flex items-center">4. Propiedad intelectual</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Todo el contenido, imágenes y logotipos son propiedad de Aroma Selecto MX y no pueden ser usados sin permiso.</li>
            </ul>
          </div>
        </section>
        <section className="flex gap-4 items-start">
          {/* Icon for contact */}
          <span className="mt-1">
            <svg className="h-7 w-7 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2v-4.5" /><path d="M17 8l-5 4-5-4" /></svg>
          </span>
          <div>
            <h2 className="text-xl font-bold text-[#D4AF37] mb-2 flex items-center">5. Contacto</h2>
            <p>Para cualquier duda, contáctanos en <a href="mailto:aromaselecto.mx@gmail.com" className="text-[#D4AF37] underline">aromaselecto.mx@gmail.com</a>.</p>
          </div>
        </section>
      </div>
      <p className="text-xs text-[#888] mt-10 text-right">Última actualización: Julio 2025</p>
      <div className="absolute -top-6 right-8 hidden md:block">
        {/* Decorative background icon */}
        <svg className="h-12 w-12 text-[#D4AF37]/10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
      </div>
    </div>
  </div>
);

export default TerminosCondicionesPage;
