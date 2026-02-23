import EventsCover from "@/components/events/EventsCover";
import Title from "@/components/Title";
import CalendarCall from "@/components/events/CalendarCall";
const Events = () => {
  return (
    <div className="relative min-h-screen">
      <EventsCover />
      <Title text="Upcoming Events" />
      <CalendarCall />
    </div>
  );
};

export default Events;
