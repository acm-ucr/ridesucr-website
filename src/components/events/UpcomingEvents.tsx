export type EventProps = {
  start: string;
  end: string;
  location: string;
  description: string;
  title: string;
};
interface UpcomingEventProps {
  events: EventProps[];
}

const UpcomingEvents = ({ events }: UpcomingEventProps) => {
  const eventDetails = (event: EventProps) => {
    const start = new Date(event.start);
    const end = new Date(event.end);

    return {
      ...event,
      day: start.toLocaleDateString("en-US", { weekday: "long" }),
      num: start.getDate(),
      month: start.toLocaleDateString("en-US", { month: "long" }),
      startTime: start.toLocaleString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
      endTime: end.toLocaleString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
    };
  };

  return (
    <div className="text-ridesucr-white bg-ridesucr-white/10 border-ridesucr-white w-1/3 rounded-lg border backdrop-blur-md">
      {events?.map((event, key) => {
        const {
          title,
          location,
          description,
          day,
          num,
          month,
          startTime,
          endTime,
        } = eventDetails(event);
        return (
          <div className="flex flex-wrap justify-center" key={key}>
            <div className="relative m-6 flex w-1/3 flex-col items-center text-center">
              <p className="text-ridesucr-white/30 text-3xl">{day}</p>
              <p className="text-9xl">{num}</p>
              <div className="from-ridesucr-white to-ridesucr-white/1 absolute right-0 h-5/6 w-[1.5px] bg-radial" />
            </div>
            <div className="my-6 w-[55%] overflow-y-hidden">
              <p className="text-2xl text-wrap">{title}</p>
              <p className="text-lg">
                {day}, {month} {num} | {startTime} - {endTime}
              </p>
              {location && <p className="text-lg">Location: {location}</p>}
              {description && (
                <p className="text-lg">Description: {description}</p>
              )}
            </div>
            <div className="from-ridesucr-white to-ridesucr-white/1 h-[1.5px] w-2/3 bg-radial" />
          </div>
        );
      })}
    </div>
  );
};

export default UpcomingEvents;
