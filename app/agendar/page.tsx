"use client";

import { useState } from "react";

export default function AgendarPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    servicio: "",
    fecha: "",
    hora: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`✅ Cita agendada para ${formData.nombre} el ${formData.fecha} a las ${formData.hora}`);
  };

  return (
    <main className="bg-black text-white min-h-screen flex items-center justify-center px-4">
      <div className="bg-white text-black p-8 rounded-xl shadow-lg w-full max-w-lg border-4 border-black">
        <h1 className="text-3xl font-bold text-center mb-6">AGENDAR CITA</h1>
        <p className="text-sm text-gray-600 text-center mb-6">
          Completa los datos para reservar tu cita con nosotros.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Nombre completo</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Ej: Juan Pérez"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Teléfono</label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Ej: 3001234567"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Servicio</label>
            <select
              name="servicio"
              value={formData.servicio}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="">Selecciona un servicio</option>
              <option value="Corte de cabello">Corte de cabello</option>
              <option value="Barba y bigote">Barba y bigote</option>
              <option value="Corte + Barba">Corte + Barba</option>
              <option value="Color o diseño">Color o diseño</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Fecha</label>
              <input
                type="date"
                name="fecha"
                value={formData.fecha}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Hora</label>
              <input
                type="time"
                name="hora"
                value={formData.hora}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition"
          >
            CONFIRMAR CITA
          </button>
        </form>
      </div>
    </main>
  );
}
