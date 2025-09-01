import Skeleton from './Skeleton';

const PageSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header Skeleton */}
      <div className="bg-white dark:bg-gray-900 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Skeleton width="120px" height="32px" />
            <div className="hidden md:flex space-x-4">
              <Skeleton width="80px" height="36px" />
              <Skeleton width="100px" height="36px" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Title Skeleton */}
          <Skeleton width="300px" height="40px" />
          
          {/* Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <Skeleton width="100%" height="20px" className="mb-4" />
                <Skeleton width="80%" height="16px" className="mb-2" />
                <Skeleton width="60%" height="16px" className="mb-4" />
                <Skeleton width="100px" height="32px" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSkeleton;
