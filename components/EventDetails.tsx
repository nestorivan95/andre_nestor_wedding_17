'use client'

export default function EventDetails() {
  return (
    <section
      id="detalles"
      className="section-container bg-gradient-to-b from-white to-wedding-beige"
    >
      <h2 className="section-title">Detalles del Evento</h2>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Domingo 17 de Mayo */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-3xl font-elegant text-wedding-gold mb-6 text-center">
            Domingo, 17 de Mayo de 2026
          </h3>
          
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="p-6 bg-wedding-cream rounded-xl max-w-md mx-auto">
                <h4 className="font-semibold text-xl mb-2">Ceremonia Simbólica, Cóctel y Fiesta</h4>
                <p className="text-gray-700 text-lg">3:30 PM</p>
              </div>
            </div>

            {/* Ubicación Domingo */}
            <div className="border-t border-gray-200 pt-6 mt-8">
              <h4 className="text-2xl font-elegant text-wedding-gold mb-4 text-center">
                Ubicación
              </h4>
              <div className="text-center space-y-4">
                <p className="text-xl font-semibold text-gray-800">
                  SantaMonica Premium
                </p>
                <p className="text-lg text-gray-600">
                  Llanogrande, Antioquia
                </p>
                
                <div className="mt-4 bg-wedding-cream rounded-lg p-4 flex items-center justify-center min-h-[300px]">
                  <div className="text-center">
                    <div className="text-4xl mb-4">📍</div>
                    <p className="text-gray-700 mb-4">
                      Haz clic en el botón para ver la ubicación en Google Maps
                    </p>
                  </div>
                </div>
                
                <a
                  href="https://www.google.com/maps/search/?api=1&query=SantaMonica+Premium+Llanogrande+Antioquia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block btn-secondary mt-4"
                >
                  Abrir en Google Maps
                </a>
                <div className="mt-4 inline-flex items-center rounded-lg bg-wedding-beige px-4 py-3 text-sm md:text-base text-gray-700">
                  <span className="font-semibold">Nota:</span>
                  <span className="ml-2">
                    El lunes 18 de mayo es día festivo. ¡Disfruta el fin de semana completo!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Información Útil */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-3xl font-elegant text-wedding-gold mb-6 text-center">
            Información Útil
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-wedding-cream rounded-xl">
              <h4 className="font-semibold text-lg mb-3 flex items-center">
                <span className="text-wedding-gold mr-2">🅿️</span>
                Estacionamiento
              </h4>
              <p className="text-gray-700">
                El salón cuenta con estacionamiento gratuito, pero los cupos de los carros son limitados.
                Te recomendamos llegar 30 minutos antes.
              </p>
            </div>
            
            <div className="p-6 bg-wedding-cream rounded-xl">
              <h4 className="font-semibold text-lg mb-3 flex items-center">
                <span className="text-wedding-gold mr-2">⏰</span>
                Puntualidad
              </h4>
              <p className="text-gray-700">
                El evento comenzará puntualmente a las 3:30 PM.
                Te agradecemos llegar a tiempo para no perderte ningún momento especial.
              </p>
            </div>
          </div>
        </div>

        {/* Dress Code */}
        <div id="vestimenta" className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-3xl font-elegant text-wedding-gold mb-8 text-center">
            Código de Vestuario
          </h3>
          
          <div className="space-y-12">
            {/* Domingo 17 de Mayo */}
            <div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="p-6 bg-wedding-cream rounded-xl">
                  <h5 className="font-semibold text-lg mb-3 text-center">
                    <span className="text-2xl mr-2">🤵🏻‍♂️</span> Para los Hombres
                  </h5>
                  <ul className="text-gray-700 space-y-2 text-center">
                    <li>Smoking negro</li>
                    <li>Corbatín negro</li>
                    <li>Zapatos negros</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-wedding-cream rounded-xl">
                  <h5 className="font-semibold text-lg mb-3 text-center">
                    <span className="text-2xl mr-2">👩🏻</span> Para las Mujeres
                  </h5>
                  <ul className="text-gray-700 space-y-2 text-center">
                    <li>Vestido largo</li>
                    <li>Accesorio a gusto</li>
                    <li>Tacones</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 bg-yellow-50 rounded-xl border-l-4 border-yellow-400">
                <h5 className="font-semibold text-lg mb-3 text-yellow-800">
                  ⚠️ Colores Reservados
                </h5>
                <div className="text-gray-700">
                  <p className="mb-2">Por favor evita los siguientes colores:</p>
                  <p className="text-sm">
                    Blanco, beige, plateado, dorado, palo rosa, café, azul índigo, nude, hueso, tornasol.
                  </p>
                </div>
              </div>

              {/* Moodboard de Pinterest */}
              <div className="mt-6 text-center">
                <p className="text-gray-700 mb-4">
                  Consulta nuestro moodboard en Pinterest como referencia:
                </p>
                <a
                  href="https://pin.it/h3bk8Dedg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block btn-primary text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Ver Moodboard en Pinterest
                </a>
              </div>
            </div>

            <div className="mt-6 p-6 bg-wedding-cream rounded-xl">
              <h4 className="font-semibold text-lg mb-3 flex items-center">
                <span className="text-wedding-gold mr-2">🌤️</span>
                Consideraciones del Clima
              </h4>
              <p className="text-gray-700">
                La ceremonia y el cóctel serán al aire libre, por lo que te recomendamos traer lentes de sol y un saco o chaqueta ligera. 
                La fiesta será en interiores. El salón tiene piso de mármol, así que considera zapatos cómodos para bailar.
              </p>
            </div>

            <div className="mt-6 p-6 bg-wedding-cream rounded-xl border-l-4 border-wedding-gold">
              <h4 className="font-semibold text-lg mb-4 text-wedding-gold flex items-center">
                <span className="text-2xl mr-2">💄</span>
                Lugares para Arreglarse
              </h4>
              <p className="text-gray-700 mb-4">
                Estas son algunas opciones que recomendamos si lo necesitas, pero puedes utilizar otros servicios según tu preferencia.
              </p>
              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <p className="font-semibold">Kahlobeautyy</p>
                  <p>Dirección: Mall Jardines Llanogrande 227</p>
                  <a
                    href="https://www.instagram.com/kahlobeautyy/?hl=es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-wedding-gold hover:underline"
                  >
                    https://www.instagram.com/kahlobeautyy/?hl=es
                  </a>
                </div>
                <div>
                  <p className="font-semibold">Mam_Manuelalzate</p>
                  <p>Dirección: Medellin (Domicilio)</p>
                  <a
                    href="https://www.instagram.com/mam_manuelalzate/?igsh=MWV4ZTl1ZW51Ymd5dQ%3D%3D#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-wedding-gold hover:underline"
                  >
                    https://www.instagram.com/mam_manuelalzate/?igsh=MWV4ZTl1ZW51Ymd5dQ%3D%3D#
                  </a>
                </div>
                <div>
                  <p className="font-semibold">Makeupcollegeoriente</p>
                  <p>Dirección: Rionegro</p>
                  <a
                    href="https://www.instagram.com/makeupcollegeoriente/?igsh=cHV6NDZyZTkyNzFr#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-wedding-gold hover:underline"
                  >
                    https://www.instagram.com/makeupcollegeoriente/?igsh=cHV6NDZyZTkyNzFr#
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

