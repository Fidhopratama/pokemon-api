export default function PokemonModal({
  selectedPokemon,
  setSelectedPokemon,
}) {

  if (!selectedPokemon) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">

      <div className="bg-white p-6 rounded-xl w-96 relative">

        <button
          onClick={() => setSelectedPokemon(null)}
          className="absolute top-2 right-2 text-red-500 text-xl"
        >
          ✖
        </button>

        <img
          src={selectedPokemon.image}
          alt={selectedPokemon.name}
          className="w-40 h-40 mx-auto"
        />

        <h2 className="text-3xl font-bold text-center capitalize mt-4">
          {selectedPokemon.name}
        </h2>

        <div className="mt-4 space-y-2">

          <p>
            <strong>Type:</strong> {selectedPokemon.type}
          </p>

          <p>
            <strong>Height:</strong> {selectedPokemon.height}
          </p>

          <p>
            <strong>Weight:</strong> {selectedPokemon.weight}
          </p>

          <p>
            <strong>Experience:</strong> {selectedPokemon.exp}
          </p>

        </div>

      </div>

    </div>
  );
}