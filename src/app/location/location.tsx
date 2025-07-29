export function Location() {
  return (
    <section
      id="location"
      className="mt-4 scroll-mt-2 py-4 text-zinc-50 md:mt-8 md:py-8"
    >
      <h1 className="font-heading font-semibold text-3xl">Localização</h1>

      <div className="mt-8 h-96 w-full md:h-full">
        {/* biome-ignore lint/a11y/useIframeTitle: <explanation> */}
        {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.0908974579324!2d-45.19978862562108!3d-22.799095534029362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccc447f46dcd99%3A0xc0acf374df4fb583!2sR.%20Tocantins%2C%2027%20-%20Jardim%20Coelho%20Neto%2C%20Guaratinguet%C3%A1%20-%20SP%2C%2012514-660!5e0!3m2!1spt-BR!2sbr!4v1751202957841!5m2!1spt-BR!2sbr"
          // style="border:0;"
          // allowfullscreen=""
          loading="lazy"
          className="h-full w-full rounded-lg md:h-screen"
        ></iframe>
      </div>
    </section>
  )
}
