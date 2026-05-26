export default function FilterType({ type, setType }) {
  return (
    <select
      value={type}
      onChange={(e) => setType(e.target.value)}
      className="w-full p-3 border rounded-lg mb-4 text-black"
    >
      <option value="">Semua Type</option>
      <option value="grass">Grass</option>
      <option value="fire">Fire</option>
      <option value="water">Water</option>
      <option value="electric">Electric</option>
      <option value="poison">Poison</option>
      <option value="bug">Bug</option>
    </select>
  );
}