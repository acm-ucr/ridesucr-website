"use client";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export type GoogleEventProps = {
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
  location?: string;
  description?: string;
  summary: string;
};

const CalendarCall = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const now = new Date();
  const fiveWeeksAgo = new Date(
        now.getTime() - 60 * 60 * 24 * 7 * 5 * 1000,
      ).toISOString();
  const fiveWeeksAhead = new Date(
    now.getTime() + 60 * 60 * 24 * 7 * 5 * 1000,
  ).toISOString();

  const { isLoading, data } = useQuery({
    queryKey: ["calendarData"],
    queryFn: async () => {
      try {
        const res =
          await fetch(`https://www.googleapis.com/calendar/v3/calendars/${
            process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL
          }/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}
            &orderBy=startTime&singleEvents=true&timeMin=${encodeURIComponent(
              fiveWeeksAgo,
            )}&timeMax=${encodeURIComponent(fiveWeeksAhead)}`).then((res) => res.json());

        const events = res.items.map(
          ({ start, end, location, description, summary }: GoogleEventProps) => ({
            start: start.dateTime,
            end: end.dateTime,
            location,
            description,
            title: summary,
          }),
        );
        console.log(events)
        return events;
      }
    catch (error) {
      console.error(`Error: ${error} while fetching google calendar`)
      return []
    }
  },
  });

  return (
    <div className="flex flex-col justify-center px-4 space-y-4">
      {/* {!isLoading ? 
        <div className = "flex justify-center text-4xl text-ridesucr-white">
          Loading...
        </div>
      :  */}
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="w-2/3 rounded-lg border bg-white/15 backdrop-blur-lg"
      />
    </div>
  );
};

export default CalendarCall;
