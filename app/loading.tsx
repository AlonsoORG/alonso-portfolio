export default function Loading() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-200 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-black border-t-transparent rounded-full animate-spin"></div>
        </div>

        {/* Loading text */}
        <p className="text-xl font-medium text-gray-700 animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
