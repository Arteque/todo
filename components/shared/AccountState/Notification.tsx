import { Bell, BellDot, BellDotIcon, BellIcon } from "lucide-react";

const Notification = () => {
  const notificationsLength = 1;
  return (
    <div className="notification">
      <button className="absolute top-5 right-5">
        {notificationsLength > 0 ? <BellDotIcon /> : <BellIcon />}
        <span
          className={`duration-500 absolute text-background font-black text-sm -right-2  h-5 w-5 rounded-full flex items-center justify-center bg-call  ${
            notificationsLength > 0
              ? "opacity-100 pointer-events-auto -bottom-4"
              : "opacity-0 pointer-events-none -bottom-0"
          }`}
        >
          {notificationsLength}
        </span>
      </button>
    </div>
  );
};

export default Notification;
