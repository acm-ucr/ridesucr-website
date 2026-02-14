import EventsCover from "@/components/events/EventsCover";
import Title from "@/components/Title";
const Events = () => {
  return (
    <div className="relative min-h-screen">
      <EventsCover />
      <Title text="Upcoming Events" />
    </div>
  );
};

export default Events;
