import { Title } from '@/components';
import Link from 'next/link';

export default function AddressPage() {
  return (
    <div className="flex flex-col sm:justify-center sm:items-center mb-72 px-10 sm:px-0 shadow-2xl p-2 rounded-xl">
      <div className="w-full xl:w-[1000px] flex flex-col justify-center text-left">
        <Title title="Dirección" subtitle="Dirección de entrega" />

        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Nombres</label>
            <input
              type="text"
              className="p-3 border border-gray-600 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Apellidos</label>
            <input
              type="text"
              className="p-3 border border-gray-600 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Dirección</label>
            <input
              type="text"
              className="p-3 border border-gray-600 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Dirección 2 (opcional)</label>
            <input
              type="text"
              className="p-3 border border-gray-600 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Código postal</label>
            <input
              type="text"
              className="p-3 border border-gray-600 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Ciudad</label>
            <input
              type="text"
              className="p-3 border border-gray-600 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">País</label>
            <select
              className="p-3 border border-gray-600 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="">[ Seleccione ]</option>
            
              <option value="COL">Colombia</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Teléfono</label>
            <input
              type="text"
              className="p-3 border border-gray-600 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="flex flex-col sm:col-span-2 mt-6">
            <Link
              href="/checkout"
              className="btn-primary flex w-full sm:w-1/2 justify-center"
            >
              Siguiente
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}