
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
    <div className={` w-full flex h-[14vh] flex-col overflow-y-auto border  bg-ridesucr-white/10 border-ridesucr-white
        ${isToday ? "bg-transparent" : ""}
        ${currentMonth ? "text-ridesucr-white" : "text-ridesucr-gray"}
    `}>
        <p className="mt-1 mr-1 flex justify-end text-3xl">
            {date.getDate()}
        </p>
        {filteredEvents.map((event, index) => {
                return (
                    <div key={index} className="text-lg px-1 border rounded-xl">
                        <p className="truncate">{event.title}</p>
                    </div>
                )
            }
        )}
    </div>
  )
}
//still gotta make non-current month days text-gray, rounded?, mobile

export default CalendarDay