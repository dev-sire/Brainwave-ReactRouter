import { notification1 } from "../assets";
import { notificationImages } from "../constants";

const Notification = ({className, title }) => {
  return (
    <div className={`${className || ''} flex items-center p-2 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}>
        <img src={notification1} width={62} height={62} className="rounded-xl" alt="notificationLogo" />
        <div className="flex-1">
            <h6 className="mb-1 font-semibold text-base">{title}</h6>
            <div className="flex items-center justify-between">
                <ul className="flex -m-0.5">
                    {notificationImages.map((icon, index) => (
                        <li key={index} className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden">
                            <img src={icon} width={20} height={20} className="w-full" alt="NotificationIcon" />
                        </li>
                    ))}
                </ul>
                <div className="body-2 text-n-13">
                    1m ago
                </div>
            </div>
        </div>
    </div>
  )
}

export default Notification;