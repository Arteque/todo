import Skeleton from './Skeleton';

const LoginSkeleton = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Title Skeleton */}
        <div className="text-center">
          <Skeleton width="200px" height="36px" className="mx-auto" />
        </div>
        
        {/* Form Skeleton */}
        <div className="mt-8 space-y-6">
          <div className="space-y-4">
            {/* Email Field */}
            <div>
              <Skeleton width="120px" height="20px" className="mb-2" />
              <Skeleton width="100%" height="40px" />
            </div>
            
            {/* Username Field (for register form) */}
            <div>
              <Skeleton width="100px" height="20px" className="mb-2" />
              <Skeleton width="100%" height="40px" />
            </div>
            
            {/* Password Field */}
            <div>
              <Skeleton width="80px" height="20px" className="mb-2" />
              <Skeleton width="100%" height="40px" />
            </div>
            
            {/* Confirm Password Field */}
            <div>
              <Skeleton width="140px" height="20px" className="mb-2" />
              <Skeleton width="100%" height="40px" />
            </div>
          </div>
          
          {/* Submit Button */}
          <Skeleton width="100%" height="48px" />
          
          {/* Link */}
          <div className="text-center">
            <Skeleton width="180px" height="16px" className="mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSkeleton;
