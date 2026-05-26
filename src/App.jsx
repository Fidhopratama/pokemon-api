import { useEffect, useState } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import FilterType from './components/FilterType';
import PokemonList from './components/PokemonList';
import Pagination from './components/Pagination';
import PokemonModal from './components/PokemonModal';
import LoadingSpinner from './components/LoadingSpinner';
import Footer from './components/Footer';

export default function App() {

  // STATE
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState('');
  const [type, setType] = useState('');

  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const [darkMode, setDarkMode] = useState(false);

  const [favorites, setFavorites] = useState([]);

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  // FETCH API
  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = async () => {

    setLoading(true);

    try {

      const response = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=40'
      );

      const pokemonDetails = await Promise.all(
        response.data.results.map(async (pokemon) => {

          const detail = await axios.get(pokemon.url);

          return {
            id: detail.data.id,
            name: detail.data.name,
            image: detail.data.sprites.front_default,
            height: detail.data.height,
            weight: detail.data.weight,
            type: detail.data.types[0].type.name,
            exp: detail.data.base_experience,
          };

        })
      );

      setPokemons(pokemonDetails);
      setFilteredPokemons(pokemonDetails);

    } catch (err) {

      setError('Gagal mengambil data Pokémon');

    } finally {

      setLoading(false);

    }
  };

  // SEARCH + FILTER
  useEffect(() => {

    let result = pokemons;

    // SEARCH
    if (search) {
      result = result.filter((pokemon) =>
        pokemon.name
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    // FILTER TYPE
    if (type) {
      result = result.filter(
        (pokemon) => pokemon.type === type
      );
    }

    setFilteredPokemons(result);

    // RESET PAGE
    setCurrentPage(1);

  }, [search, type, pokemons]);

  // FAVORITE LOCAL STORAGE
  useEffect(() => {

    const savedFavorites =
      JSON.parse(localStorage.getItem('favorites')) || [];

    setFavorites(savedFavorites);

  }, []);

  const toggleFavorite = (pokemon) => {

    let updatedFavorites;

    if (favorites.some((fav) => fav.id === pokemon.id)) {

      updatedFavorites = favorites.filter(
        (fav) => fav.id !== pokemon.id
      );

    } else {

      updatedFavorites = [...favorites, pokemon];

    }

    setFavorites(updatedFavorites);

    localStorage.setItem(
      'favorites',
      JSON.stringify(updatedFavorites)
    );
  };

  // PAGINATION
  const totalPages = Math.ceil(
    filteredPokemons.length / itemsPerPage
  );

  const startIndex =
    (currentPage - 1) * itemsPerPage;

  const currentPokemons =
    filteredPokemons.slice(
      startIndex,
      startIndex + itemsPerPage
    );

  // LOADING
  if (loading) {
    return <LoadingSpinner />;
  }

  // ERROR
  if (error) {
    return (
      <h1 className="text-center text-red-500 mt-10 text-2xl">
        {error}
      </h1>
    );
  }

  return (
    <div
      className={
        darkMode
          ? 'bg-gray-900 text-white min-h-screen'
          : 'bg-gray-100 text-black min-h-screen'
      }
    >

      <div className="max-w-7xl mx-auto p-6">

        {/* NAVBAR */}
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        {/* SEARCH */}
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        {/* FILTER */}
        <FilterType
          type={type}
          setType={setType}
        />

        {/* POKEMON COUNT */}
        <div className="mb-6">

          <h2 className="text-xl font-bold">
            Total Pokémon: {filteredPokemons.length}
          </h2>

        </div>

        {/* POKEMON LIST */}
        <PokemonList
          pokemons={currentPokemons}
          setSelectedPokemon={setSelectedPokemon}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />

        {/* PAGINATION */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />

        {/* MODAL */}
        <PokemonModal
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
        />

        {/* FOOTER */}
        <Footer />

      </div>

    </div>
  );
}