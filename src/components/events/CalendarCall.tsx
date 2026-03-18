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
        const response =
          await fetch(`https://www.googleapis.com/calendar/v3/calendars/${
            process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL
          }/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}
            &orderBy=startTime&singleEvents=true&timeMin=${encodeURIComponent(
              fiveWeeksAgo,
            )}&timeMax=${encodeURIComponent(fiveWeeksAhead)}`);

        if (!response.ok) {
          console.warn(`Failed to fetch calendar`);
          return [];
        }
        const data = await response.json();

        const events = data.items.map(
          ({
            start,
            end,
            location,
            description,
            summary,
          }: GoogleEventProps) => ({
            start: start.dateTime,
            end: end.dateTime,
            location,
            description,
            title: summary,
          }),
        );
        return events;
      } catch (error) {
        console.error(`Error: ${error} while fetching google calendar`);
        return [];
      }
    },
  });

  return (
    <div className="mx-4 mb-10 items-center">
      <div className="flex flex-col justify-center space-y-4">
        {isLoading ? (
          <div className="text-ridesucr-white flex justify-center text-4xl">
            Loading...
          </div>
        ) : (
          <div className="">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="bg-ridesucr-white/10 backdrop-blur-md"
              events={data}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarCall;
