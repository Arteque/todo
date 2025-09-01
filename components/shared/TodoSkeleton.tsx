import Skeleton from './Skeleton';

const TodoSkeleton = () => {
  return (
    <div className="space-y-6">
      {/* Header with Add Button */}
      <div className="flex justify-between items-center">
        <Skeleton width="200px" height="32px" />
        <Skeleton width="120px" height="40px" />
      </div>
      
      {/* Filter/Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Skeleton width="100%" height="40px" className="sm:flex-1" />
        <Skeleton width="120px" height="40px" />
        <Skeleton width="100px" height="40px" />
      </div>
      
      {/* Todo Items */}
      <div className="space-y-4">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 flex-1">
                <Skeleton width="20px" height="20px" className="rounded" />
                <div className="flex-1 space-y-2">
                  <Skeleton width="70%" height="18px" />
                  <Skeleton width="40%" height="14px" />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Skeleton width="60px" height="24px" className="rounded-full" />
                <Skeleton width="32px" height="32px" />
                <Skeleton width="32px" height="32px" />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center space-x-2">
        {[...Array(5)].map((_, index) => (
          <Skeleton key={index} width="40px" height="40px" />
        ))}
      </div>
    </div>
  );
};

export default TodoSkeleton;
