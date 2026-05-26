import SkeletonCard from './SkeletonCard';

export default function LoadingSpinner() {

  return (
    <div className="max-w-7xl mx-auto p-6">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {[...Array(8)].map((_, index) => (
          <SkeletonCard key={index} />
        ))}

      </div>

    </div>
  );
}