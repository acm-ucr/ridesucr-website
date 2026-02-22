"use client";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";

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

export type TypedGoogleEventProps = GoogleEventProps & {
  eventType: string;
};

{
  /*Currently getting API key, place here */
}
export const calendarSources = [
  { id: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL, eventType: "general" },
];

const CalendarCall = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  // const { data, isLoading } = useQuery<{
  //   allEvents: TypedGoogleEventProps[];
  // }>({
  //   queryKey: ["googleCalendarEvents"],
  //   queryFn: async () => {
  //     const now = new Date();
  //     const fiveWeeksAgo = new Date(
  //       now.getTime() - 60 * 60 * 24 * 7 * 5 * 1000,
  //     ).toISOString();
  //     const fiveWeeksAhead = new Date(
  //       now.getTime() + 60 * 60 * 24 * 7 * 5 * 1000,
  //     ).toISOString();

  //     const results = await Promise.all(
  //       calendarSources.map(async ({ id, eventType }) => {
  //         try {
  //           const res = await fetch(
  //             `https://www.googleapis.com/calendar/v3/calendars/${id}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${fiveWeeksAgo}&timeMax=${fiveWeeksAhead}`,
  //           );

  //           if (!res.ok) {
  //             console.warn(`Failed to fetch ${eventType} calendar`);
  //             return [];
  //           }

  //           const data = await res.json();

  //           return (data.items || []).map((item: GoogleEventProps) => ({
  //             ...item,
  //             eventType,
  //           }));
  //         } catch (err) {
  //           console.error(`Error fetching ${eventType} events`, err);
  //           return [];
  //         }
  //       }),
  //     );

  //     const allEvents: TypedGoogleEventProps[] = results.flat();

  //     return { allEvents };
  //   },
  // });

  return (
    <div className="flex justify-center">
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
