import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className=" bg-gray-50">
        <div className="max-w-4xl mx-auto px-3">
          <div className="mx-3 sm:px-6 md:px-8 mt-10 md:text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif leading-tight">
              Es Posible que Tengamos Conversaciones con Maduro, Afirma Trump
            </h1>

            <p className="text-sm sm:text-base text-gray-700 mt-2 md:text-xl mx-auto max-w-2xl">
              Trump dijo que es posible que su gobierno tenga conversaciones con
              la administración de Maduro, tras ser cuestionado sobre las
              intenciones de designar al Cártel de los Soles como grupo
              terrorista.
            </p>
          </div>

          <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
            <Image
              src="/trump.webp"
              alt="Trump"
              width={1200}
              height={700}
              className="md:w-[80%] mx-auto my-2"
              priority
            />

            <p className="text-[10px] sm:text-[6px] md:text-[8px] text-gray-500 mt-1 text-right">
              Es posible que tengamos conversaciones con Maduro, dice Trump.
              Foto: Reuters.
            </p>
          </div>

          <div className="flex flex-col items-start sm:justify-between px-4 sm:px-10 md:px-8 mt-6 gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/author.webp"
                alt="Author"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <p className="text-base">
                  Por{" "}
                  <span className="font-bold text-blue-900 hover:underline cursor-pointer">
                    Omar SG Admin
                  </span>
                </p>
                <p className="text-sm text-gray-600">17 nov 2025 | 00:43 CST</p>
                <div className="flex items-center gap-1 mt-1 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm">
                    Actualizado 19 nov 2025 | 07:10 CST
                  </span>
                </div>
              </div>

              <button
                aria-label="bookmark"
                className="p-2 rounded hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 21l-5-3-5 3V5a2 2 0 012-2h6a2 2 0 012 2z"
                  />
                </svg>
              </button>

              <button
                aria-label="share"
                className="p-2 rounded hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7M16 6l-4-4m0 0L8 6m4-4v14"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl py-4 mx-4 sm:mx-6 md:mx-8 mt-6 my-2">
            <p className="font-medium text-center">Escucha este artículo</p>
            <div className="mt-3">
              <audio
                src="https://storage.googleapis.com/nmas-supernova-works/tts-audio/691ac42a151cbf6683238adc-audio.wav"
                controls
                className="w-full md:w-[50%] mx-auto"
              >
                Tu navegador no soporta el elemento de audio.
              </audio>
            </div>
          </div>

          <div className="prose prose-sm sm:prose lg:prose-lg max-w-none mx-2">
            <p>
              El presidente Donald Trump dijo que es posible que su gobierno
              sostenga algunas conversaciones con la administración del
              presidente de Venezuela, Nicolás Maduro, ante el creciente
              despliegue militar estadounidense en el Caribe y el Pacífico que
              incluye al portaviones USS Gerald Ford.
            </p>

            <div className="w-full flex justify-center p-4 sm:p-6 bg-gray-100 rounded-lg my-6">
              <div
                className="relative w-full max-w-3xl"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  src="https://truthsocial.com/@realDonaldTrump/115565882166681770/embed"
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ border: 0 }}
                  title="truthsocial-embed"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="mx-2">
              El mandatario norteamericano fue cuestionado sobre las intenciones
              de ir contra los activos financieros de Maduro, en relación con su
              presunto vínculo con el Cártel de los Soles, al cual se pretende
              designar como organización terrorista del extranjero.
            </p>

            <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
              <Image
                src="/graph1.png"
                width={1200}
                height={700}
                alt="Pic2"
                className="md:w-[80%] mx-auto my-2"
              />
            </div>

            <p className="mx-2">
              En respuesta, Trump dijo que podrían hacerlo, pero dejó la puerta
              abierta al diálogo con el presidente venezolano.
            </p>

            <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
              <Image
                src="/pic2.webp"
                width={1200}
                height={700}
                alt="Pic2"
                className="md:w-[80%] mx-auto my-2"
              />
            </div>

            <p>
              Nos permite hacer eso, pero no hemos dicho que lo vayamos a hacer,
              y puede que estemos platicando, puede que estemos en pláticas con
              Maduro y veremos cómo sale eso, indicó.
            </p>

            <div className="w-full my-6">
              <Image
                src="/tiger.jpeg"
                width={1200}
                height={675}
                alt="Pic2"
                className="w-full h-auto rounded-md my-2"
              />
            </div>

            <p>
              A ellos les gustaría hablar, dijo a periodistas en el Aeropuerto
              Internacional de Palm Beach, Florida.
            </p>

            <p>
              Trump no precisó la fecha de las conversaciones ni quién se
              encargaría de ellas, además de insistir en que es Venezuela quien
              quisiera hablar, aunque él no sabe de qué se trata.
            </p>

            <div className="w-12 h-6 my-6">
              <Image src="/double.png" width={50} height={10} alt="Quotes" />
            </div>

            <article className="mt-4 font-thin text-2xl sm:w-[50%] md:w-[90%]">
              El presidente Donald Trump dijo que es posible que su gobierno
              tenga conversaciones con Nicolás Maduro, luego de ser cuestionado
              sobre las intenciones de designar al Cártel de los Soles como
              Organización Terrorista Extranjera. El mandatario estadounidense
              afirmó que su homólogo…
              <span className="text-blue-500">
                {" "}
                pic.twitter.com/wRkSRr3PsX{" "}
              </span>
              — NMás (@nmas) November 17, 2025
            </article>

            <p className="mt-4">
              Yo hablo con cualquiera, veremos qué pasa, mencionó antes de
              abordar el Air Force One de regreso a Washington, tras pasar el
              fin de semana en su residencia de Mar-a-Lago.
            </p>

            <article className="mt-6">
              <h2 className="md:text-2xl font-bold mb-3 inline-block">
                ¿Por qué hablarían Trump y Maduro?
              </h2>
              <p className="mt-3 leading-relaxed">
                Las declaraciones de Trump fueron después del anuncio del
                Departamento de Estado de Estados Unidos sobre designar, a
                partir del 24 de noviembre, como organización terrorista
                extranjera (FTO, en inglés) al Cártel de los Soles, un grupo al
                que Washington vincula con Maduro, cuyo Gobierno afirma que es
                un invento. Noticia relacionada: Ya Me Decidí: Donald Trump Se
                Pronuncia sobre Venezuela y sus Próximas Acciones Militares. El
                presidente estadounidense reconoció que esta designación permite
                que Washington ataque los activos de Maduro o infraestructura
                dentro de Venezuela, pero matizó que él no ha dicho que lo hará.
                El anuncio de las discusiones con Maduro ocurre tras reportes de
                la prensa estadounidense en octubre sobre presuntas
                negociaciones que el gobierno de Venezuela habría buscado con la
                Administración Trump. El Miami Herald reportó que la
                vicepresidenta venezolana, Delcy Rodríguez, propuso a Estados
                Unidos encabezar un gobierno de transición sin Maduro, mientras
                que The New York Times señaló que Caracas ofreció a Washington
                abrir a las compañías estadounidense su petróleo y oro, y
                redirigir de China a Norteamérica sus exportaciones del
                combustible. Sus declaraciones también se producen horas después
                de la llegada al Caribe, este domingo, del portaaviones USS
                Gerald R. Ford, el más grande de la flota estadounidense, como
                parte del despliegue militar que ha ordenado en la región.
                Además, Estados Unidos anunció este domingo 16 de noviembre la
                destrucción de otra embarcación que supuestamente transportaba
                drogas en el océano Pacífico, donde mató a tres hombres a bordo
                a los que acusó de narcoterroristas, con lo que suman 21
                bombardeos similares y más de 80 muertos desde septiembre. El
                mandatario estadounidense, quien defendió estos ataques,
                prometió que mantendría al Congreso involucrado en discusiones
                sobre próximos pasos en Venezuela. <br /> Edit media
              </p>
            </article>
          </div>

          <div className="flex flex-col sm:items-start sm:justify-between mt-4 md:flex md:flex-row relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen px-5 gap-5">
            <div className="space-y-6 mx-2 my-2">
              <div>
                <h3 className="text-2xl font-extrabold mb-4 border-b">
                  Más de la Sección
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2xl pt-l">
                  <div>
                    <p className="text-sm text-red-500">Internacional</p>
                    <p className="mt-2 text-base">
                      ¿En Qué Consiste el Derecho de Ciudadanía por Nacimiento
                      que Quiere Quitar Trump?
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-red-500">Internacional</p>
                    <p className="mt-2 text-base">
                      Senado de EU Debate Paquete de Recortes Fiscales de Donald
                      Trump Tras 16 Horas de Lectura
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-red-500">Internacional</p>
                    <p className="mt-2 text-base">
                      Trump Instó a Acuerdo la Próxima Semana para Poner Fin al
                      Conflicto Entre Hamás e Israel
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-red-500">Alerta Amber</p>
                    <p className="mt-2 text-base">
                      Localizan Restos Humanos Expuestos en el Tramo
                      Hermosillo-Mazatán en Sonora
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-red-500">AMLO</p>
                    <p className="mt-2 text-base">
                      Flores y Ofrendas 2025, el Festival de Día de Muertos en
                      este Pueblo Mágico de Puebla
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-red-500">Balaceras</p>
                    <p className="mt-2 text-base">
                      No Hay Matrix: Es Imposible que Vivamos en una Simulación,
                      según Esta Prueba Matemática
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold border-b pb-2 mb-6">
                Más del Autor
              </h2>

              <div className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Image
                      src="/logo-nmas.svg"
                      width={100}
                      height={80}
                      alt="logo"
                      className="w-20 h-20 object-cover rounded-md"
                    />

                    <div className="flex flex-col">
                      <p className="text-red-600 text-sm">Accidentes</p>
                      <h3 className="font-serif">
                        Cambian Fecha Límite para Sacar Licencia Permanente
                      </h3>
                      <p className="text-sm text-gray-600 mt-2">1 min</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row grid-cols-1 md:grid-cols-2">
                  <Image
                    src="/aero.webp"
                    width={100}
                    height={80}
                    className="mx-1 w-20 h-20 object-cover rounded-md"
                    alt="image"
                  />
                  <div className="flex-col ml-1">
                    <p className="text-red-600">Inseguridad</p>
                    <h3 className="font-serif">Volaris Desvía Un Vuelo a Monterrey…</h3>
                    <p className="text-sm text-gray-600 mt-3">2 mins</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="mt-12 bg-[#C0C4D0] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
            <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-3 items-start">
              <div className="space-y-6">
                <Image
                  src="/logo-nmas.svg"
                  alt="logo"
                  width={100}
                  height={80}
                />
                <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
                  DESCUBRE LO MÁS
                  <br />
                  DESTACADO EN
                  <br />
                  POLÍTICA
                </h2>

                <div className="mt-4 w-full max-w-sm relative">
                  <label htmlFor="email" className="sr-only">
                    Ingresa tu email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Ingresa tu email"
                    className="w-full border px-4 py-2 rounded"
                  />
                  <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-red-500 text-white px-3 py-1 rounded">
                    ➤
                  </button>
                </div>

                <p className="text-sm">
                  Al continuar estás aceptando nuestros{" "}
                  <span className="text-blue-500">Términos y Condiciones</span>,
                  así como el{" "}
                  <span className="text-blue-500">Aviso de Privacidad</span>
                </p>
              </div>

              <div className="md:border-l lg:pl-12">
                <h3 className="text-2xl font-serif mt-4">Descarga la app N+</h3>
                <div className="flex flex-col sm:flex-row items-start">
                  <Image
                    src="/googleplay.png"
                    width={100}
                    height={100}
                    alt="google"
                  />
                  <Image
                    src="/appstore.png"
                    width={100}
                    height={80}
                    alt="appstore"
                  />
                </div>
              </div>

              <div className="text-center md:border-l md:pl-6 lg:pl-12">
                <Image
                  src="/newsletter-image.svg"
                  alt="newsletter"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
