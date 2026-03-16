export type EventProps = {
  start: string;
  end: string;
  location: string;
  description: string;
  title: string;
};
interface UpcomingEventProps {
  events: EventProps[];
  currMonth: Date;
}

const UpcomingEvents = ({ events, currMonth }: UpcomingEventProps) => {
  const month = currMonth.getMonth();
  const year = currMonth.getFullYear();

  const filteredEvents = events.filter((event) => {
    const start = new Date(event.start);
    const end = new Date(event.end);
    return (
      (start.getMonth() === month && start.getFullYear() === year) ||
      (end.getMonth() === month && end.getFullYear() === year) ||
      (start < new Date(year, month + 1, 0) && end > new Date(year, month, 0))
    );
  });

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
    <div className="text-ridesucr-white bg-ridesucr-white/10 border-ridesucr-white min-h-[65vh] w-full rounded-3xl border backdrop-blur-md lg:h-[77vh] lg:w-1/3">
      {filteredEvents.length === 0 ? (
        <p className="mt-10 text-center text-4xl">No events this month</p>
      ) : (
        <div className="flex-1 space-y-4 overflow-y-auto">
          {filteredEvents.map((event, key) => {
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
              <div className="flex flex-row flex-wrap justify-center" key={key}>
                <div className="relative m-6 flex w-1/3 flex-col items-center text-center">
                  <p className="text-ridesucr-white/30 text-2xl md:text-3xl">
                    {day}
                  </p>
                  <p className="text-7xl md:text-9xl">{num}</p>
                  <div className="from-ridesucr-white to-ridesucr-white/1 absolute right-0 h-5/6 w-[1.5px] bg-radial" />
                </div>
                <div className="my-6 flex-1 overflow-y-hidden pr-3">
                  <p className="pb-1 text-2xl leading-none text-wrap md:text-3xl md:leading-tight">
                    {title}
                  </p>
                  <p className="text-lg leading-none md:text-xl md:leading-normal">
                    {day}, {month} {num} | {startTime} - {endTime}
                  </p>
                  {location && (
                    <p className="py-1 text-lg leading-none md:text-xl">
                      Location: {location}
                    </p>
                  )}
                  {description && (
                    <p className="text-lg leading-none md:leading-snug">
                      Description: {description}
                    </p>
                  )}
                </div>
                <div className="from-ridesucr-white to-ridesucr-white/1 h-[1.5px] w-2/3 bg-radial" />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default UpcomingEvents;
