const details = [
  { label: "Cuándo", value: "Sábado 22 de noviembre, 2026" },
  { label: "Hora", value: "18:30 h" },
  { label: "Dónde", value: "Estancia La Armonía, Buenos Aires" },
];

export function InvitationCard() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#f8f5ef] px-5 py-8 text-[#34443b] sm:px-8 sm:py-12">
      <div className="absolute -left-24 top-12 h-64 w-64 rounded-full bg-[#dbe6d5] blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#ead9cb] blur-3xl" />

      <section className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl flex-col items-center justify-center border border-[#34443b]/15 bg-[#fffdf9]/75 px-6 py-16 text-center shadow-[0_24px_80px_rgba(52,68,59,0.12)] backdrop-blur sm:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#6d806e]">
          Nos casamos
        </p>
        <div className="my-7 h-px w-12 bg-[#b8946a]" />
        <p className="font-serif text-2xl italic text-[#6d806e]">Con mucha alegría</p>
        <h1 className="mt-3 font-serif text-5xl leading-none text-[#34443b] sm:text-7xl">
          Sofía <span className="text-[#b8946a]">&amp;</span> Tomás
        </h1>
        <p className="mt-7 max-w-md text-base leading-7 text-[#556358]">
          Queremos celebrar este momento tan especial junto a vos.
        </p>

        <div className="mt-10 grid w-full max-w-2xl gap-px overflow-hidden border border-[#34443b]/10 bg-[#34443b]/10 sm:grid-cols-3">
          {details.map((detail) => (
            <div key={detail.label} className="bg-[#fffdf9] px-5 py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b8946a]">
                {detail.label}
              </p>
              <p className="mt-3 text-sm leading-6 text-[#47574d]">{detail.value}</p>
            </div>
          ))}
        </div>

        <a
          className="mt-10 inline-flex items-center justify-center bg-[#34443b] px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition hover:bg-[#4d6354] focus:outline-none focus:ring-2 focus:ring-[#b8946a] focus:ring-offset-2"
          href="mailto:sofia.tomas@example.com?subject=Confirmaci%C3%B3n%20de%20asistencia"
        >
          Confirmar asistencia
        </a>
        <p className="mt-8 text-xs tracking-wide text-[#6d806e]">Te esperamos</p>
      </section>
    </main>
  );
}
