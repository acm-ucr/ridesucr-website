export type EventProps = {
  start: string;
  end: string;
  location: string;
  description: string;
  title: string;
};

interface CalendarDayCellProps {
  date: Date;
  events: EventProps[];
  displayMonth: Date;
}

const CalendarDay = ({ date, events, displayMonth }: CalendarDayCellProps) => {
  const today = new Date();
  const currentMonth = displayMonth.getMonth() === date.getMonth();
  const isToday =
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();

  const filteredEvents = events?.filter(({ start, end }) => {
    if (!start || !end) return false;
    const eventStartDate = new Date(start);
    const eventEndDate = new Date(end);

    eventStartDate.setHours(0, 0, 0, 0);
    eventEndDate.setHours(23, 59, 59, 999);

    return date >= eventStartDate && date <= eventEndDate;
  });
  return (
    <td
      className={`border-ridesucr-white flex h-[14vh] w-full flex-col overflow-y-auto border ${isToday ? "bg-ridesucr-white/10" : ""} `}
    >
      <p
        className={`mt-1 mr-1 flex justify-end text-3xl ${currentMonth ? "text-ridesucr-white" : "text-ridesucr-gray"} `}
      >
        {date.getDate()}
      </p>
      {filteredEvents.map((event, index) => {
        return (
          <div
            key={index}
            className="text-ridesucr-white truncate rounded-xl border px-1 text-center text-lg"
          >
            {event.title}
          </div>
        );
      })}
    </td>
  );
};

export default CalendarDay;
