'use client'

import Image from 'next/image'
import { useState } from 'react'
import qrCodeImage from '../img/qr_code.jpeg'

export default function Gifts() {
  const [isQrOpen, setIsQrOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('@andreag0825')
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch {
      setIsCopied(false)
    }
  }

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
                A continuación puedes ver la lista de regalos ingresando al siguiente enlace.
              </p>
              <a
                href="https://kadolist.com/events/matrimonio-andre-nestor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block btn-primary"
              >
                Ver lista de regalos
              </a>
            </div>

            {/* Transferencia bancaria */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-elegant text-wedding-gold mb-4">
                Transferencia bancaria
              </h3>
              <p className="text-gray-700 mb-6">
              Si prefieres hacer una transferencia, puedes usar los siguientes datos:
              </p>
              <div className="flex flex-col items-center gap-3">
                <p className="text-gray-700">
                  <span className="font-semibold">Llave Bre-b:</span>{' '}
                  <span className="font-mono">@andreag0825</span>{' '}
                  <span className="text-gray-600">(Bancolombia)</span>
                </p>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="btn-secondary"
                >
                  {isCopied ? '¡Copiado!' : 'Copiar llave Bre-b'}
                </button>
                <button
                  type="button"
                  onClick={() => setIsQrOpen(true)}
                  className="btn-primary"
                >
                  Ver código QR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isQrOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full relative">
            <button
              type="button"
              onClick={() => setIsQrOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              aria-label="Cerrar"
            >
              ✕
            </button>
            <h4 className="text-xl font-semibold text-center text-gray-800 mb-4">
              Código QR
            </h4>
            <Image
              src={qrCodeImage}
              alt="Código QR Bancolombia"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  )
}

