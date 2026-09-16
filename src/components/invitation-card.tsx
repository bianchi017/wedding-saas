const events = [
  {
    kind: "Ceremonia",
    time: "Sábado 6 de noviembre · 2027",
    place: "Parroquia Nuestra Señora de la Consolata",
    address: "Av. Caseros 240, San Francisco, Córdoba",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Parroquia+Nuestra+Se%C3%B1ora+de+la+Consolata%2C+Av.+Caseros+240%2C+San+Francisco%2C+C%C3%B3rdoba",
  },
  {
    kind: "Cena y festejo",
    time: "Después de la ceremonia",
    place: "UOM Jesús Víctor Almada",
    address:
      "Av. La Voz de San Justo 2043 (sobre Ruta Provincial 1), San Francisco, Córdoba",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=UOM+Jes%C3%BAs+V%C3%ADctor+Almada%2C+Av.+La+Voz+de+San+Justo+2043%2C+San+Francisco%2C+C%C3%B3rdoba",
  },
];

export function InvitationCard() {
  return (
    <main className="relative isolate overflow-hidden bg-[#f8f5ef] px-5 py-8 text-[#34443b] sm:px-8 sm:py-12">
      <div className="pointer-events-none absolute -left-24 top-12 h-64 w-64 rounded-full bg-[#dbe6d5] blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#ead9cb] blur-3xl" />

      <div className="relative mx-auto max-w-4xl overflow-hidden border border-[#34443b]/15 bg-[#fffdf9]/80 shadow-[0_24px_80px_rgba(52,68,59,0.12)] backdrop-blur">
        <section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 py-16 text-center sm:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#6d806e]">
            Nos casamos
          </p>
          <div className="my-7 h-px w-12 bg-[#b8946a]" />
          <p className="font-serif text-2xl italic text-[#6d806e]">Con mucha alegría</p>
          <h1 className="mt-3 font-serif text-5xl leading-none text-[#34443b] sm:text-7xl">
            Romina <span className="text-[#b8946a]">&amp;</span> Nicolás
          </h1>
          <p className="mt-7 max-w-md text-base leading-7 text-[#556358]">
            Queremos celebrar este momento tan especial junto a vos.
          </p>

          <div className="mt-10 grid w-full max-w-xl gap-px overflow-hidden border border-[#34443b]/10 bg-[#34443b]/10 sm:grid-cols-2">
            <div className="bg-[#fffdf9] px-5 py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b8946a]">Fecha</p>
              <p className="mt-3 text-sm leading-6 text-[#47574d]">Sábado 6 de noviembre de 2027</p>
            </div>
            <div className="bg-[#fffdf9] px-5 py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b8946a]">Ciudad</p>
              <p className="mt-3 text-sm leading-6 text-[#47574d]">San Francisco, Córdoba</p>
            </div>
          </div>

          <a
            className="mt-10 inline-flex items-center justify-center bg-[#34443b] px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition hover:bg-[#4d6354] focus:outline-none focus:ring-2 focus:ring-[#b8946a] focus:ring-offset-2"
            href="#detalles"
          >
            Ver detalles
          </a>
        </section>

        <section id="detalles" className="border-t border-[#34443b]/10 px-6 py-16 sm:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b8946a]">El día</p>
            <h2 className="mt-3 font-serif text-4xl text-[#34443b]">Acompañanos a celebrar</h2>
          </div>

          <div className="mx-auto mt-10 grid max-w-2xl gap-5 md:grid-cols-2">
            {events.map((event) => (
              <article key={event.kind} className="border border-[#34443b]/10 bg-white/60 p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b8946a]">{event.kind}</p>
                <p className="mt-4 text-sm font-semibold text-[#6d806e]">{event.time}</p>
                <h3 className="mt-2 font-serif text-2xl leading-tight text-[#34443b]">{event.place}</h3>
                <p className="mt-3 text-sm leading-6 text-[#556358]">{event.address}</p>
                <a
                  className="mt-6 inline-block text-sm font-semibold text-[#34443b] underline decoration-[#b8946a] decoration-2 underline-offset-4"
                  href={event.mapUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Ver ubicación
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="confirmar" className="border-t border-[#34443b]/10 bg-[#e7eee3] px-6 py-16 text-center sm:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6d806e]">Confirmación</p>
          <h2 className="mt-3 font-serif text-4xl text-[#34443b]">Queremos celebrarlo con vos</h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-[#556358]">
            Próximamente vas a poder confirmar tu asistencia desde esta invitación.
          </p>
        </section>
      </div>
    </main>
  );
}
