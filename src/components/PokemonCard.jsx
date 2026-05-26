export default function PokemonCard({
  pokemon,
  setSelectedPokemon,
  favorites,
  toggleFavorite,
}) {

  return (
    <div
      className="
        bg-white
        rounded-2xl
        shadow-lg
        p-5
        hover:scale-105
        hover:-translate-y-2
        hover:shadow-2xl
        transition-all
        duration-300
        cursor-pointer
      "
    >

      {/* IMAGE */}
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="
          w-32
          h-32
          mx-auto
          object-contain
        "
      />

      {/* NAME */}
      <h2
        className="
          text-2xl
          font-bold
          text-center
          capitalize
          mt-4
          text-gray-800
        "
      >
        {pokemon.name}
      </h2>

      {/* TYPE */}
      <p
        className="
          text-center
          mt-2
          text-gray-700
          font-medium
        "
      >
        Type: {pokemon.type}
      </p>

      {/* HEIGHT */}
      <p
        className="
          text-center
          text-gray-500
          mt-1
        "
      >
        Height: {pokemon.height}
      </p>

      {/* WEIGHT */}
      <p
        className="
          text-center
          text-gray-500
          mt-1
        "
      >
        Weight: {pokemon.weight}
      </p>

      {/* BUTTONS */}
      <div className="flex gap-2 mt-5">

        {/* DETAIL BUTTON */}
        <button
          onClick={() => setSelectedPokemon(pokemon)}
          className="
            bg-blue-500
            hover:bg-blue-600
            text-white
            px-4
            py-2
            rounded-xl
            w-full
            transition
            font-semibold
          "
        >
          Detail
        </button>

        {/* FAVORITE BUTTON */}
        <button
          onClick={() => toggleFavorite(pokemon)}
          className="
            bg-red-500
            hover:bg-red-600
            text-white
            px-4
            py-2
            rounded-xl
            transition
            font-semibold
          "
        >
          {favorites.some((fav) => fav.id === pokemon.id)
            ? '❤️'
            : '🤍'}
        </button>

      </div>

    </div>
  );
}