export default function SkeletonCard() {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 animate-pulse">

      <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto"></div>

      <div className="h-6 bg-gray-300 rounded mt-4"></div>

      <div className="h-4 bg-gray-300 rounded mt-2"></div>

      <div className="h-4 bg-gray-300 rounded mt-2"></div>

      <div className="flex gap-2 mt-4">

        <div className="h-10 bg-gray-300 rounded w-full"></div>

        <div className="h-10 bg-gray-300 rounded w-16"></div>

      </div>

    </div>
  );
}