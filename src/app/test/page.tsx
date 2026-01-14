// src/app/test/page.tsx
export default function Test() {
    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold text-red-500 mb-4">Test Tailwind v4</h1>

            {/* Grid que debería funcionar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-500 text-white p-4 rounded">Azul</div>
                <div className="bg-red-500 text-white p-4 rounded">Rojo</div>
                <div className="bg-green-500 text-white p-4 rounded">Verde</div>
            </div>

            {/* Botón con hover */}
            <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
                Botón de prueba
            </button>
        </div>
    );
}