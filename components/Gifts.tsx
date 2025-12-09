'use client'

export default function Gifts() {
  return (
    <section
      id="regalos"
      className="section-container bg-white"
    >
      <h2 className="section-title">Regalos</h2>

      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-wedding-beige to-wedding-cream rounded-2xl shadow-lg p-8 md:p-12 text-center">
          <div className="text-5xl mb-6">🎁</div>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Te compartimos algunas opciones.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Lista de Regalos */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-elegant text-wedding-gold mb-4">
                Lista de Regalos
              </h3>
              <p className="text-gray-700 mb-6">
                Más adelante publicaremos nuestra lista de regalos. 
                Les estaremos avisando con tiempo para que puedan elegir.
              </p>
              <p className="text-sm text-gray-500">
                * En este momento no tenemos la lista disponible
              </p>
            </div>

            {/* Lluvia de Sobres */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-elegant text-wedding-gold mb-4">
                Lluvia de Sobres
              </h3>
              <p className="text-gray-700 mb-6">
                Si prefieres hacer un regalo en efectivo, puedes entregarlo el día del evento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

