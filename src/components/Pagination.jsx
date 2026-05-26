export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  return (
    <div className="flex justify-center gap-4 mt-8">

      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Prev
      </button>

      <span className="font-bold">
        Page {currentPage} / {totalPages}
      </span>

      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Next
      </button>

    </div>
  );
}