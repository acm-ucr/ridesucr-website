"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";
import CalendarDay, { EventProps } from "@/components/events/CalendarDay";
//import { GoogleEventProps } from "@/components/events/CalendarCall";
import { useState } from "react";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  events: EventProps[];
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  components,
  events,
  ...props
}: CalendarProps) {
  const week = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];

  const [currentDate, setCurrentDate] = useState(new Date());

  const nextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  const prevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  return (
    <>
      <div className="flex flex-col items-center space-y-2">
        <div className="bg-ridesucr-white/10 border-ridesucr-white flex w-1/3 justify-center rounded-3xl border py-3 text-4xl text-white shadow-2xl">
          <BiSolidLeftArrow className="scale-75" onClick={prevMonth} />
          <div className="w-2/3 text-center">
            {currentDate.toLocaleString("en-US", { month: "long" })}
            &nbsp;
            {currentDate.getFullYear()}
          </div>
          <BiSolidRightArrow className="scale-75" onClick={nextMonth} />
        </div>
        <div className="grid w-full grid-cols-7 text-center">
          {week.map((day, key) => (
            <div className="text-ridesucr-white/30 relative text-3xl" key={key}>
              {day}
              {key != 0 && (
                <div className="from-ridesucr-white to-ridesucr-black absolute top-1 h-full w-[1.5px] bg-radial" />
              )}
            </div>
          ))}
        </div>
      </div>
      <DayPicker
        showOutsideDays={showOutsideDays}
        month={currentDate}
        onMonthChange={setCurrentDate}
        className={className}
        formatters={{}}
        classNames={{
          root: "w-full",
          months: "flex gap-4 flex-col md:flex-row relative",
          month: "flex flex-col w-full gap-4",
          nav: "hidden",
          month_caption: "hidden",
          weekdays: "hidden",
          week: "flex w-full",
          day: "relative w-full text-end text-3xl text-ridesucr-white pr-2 pt-2 aspect-square border border-ridesucr-white/20",
          outside: "text-ridesucr-white/30",
          ...classNames,
        }}
        components={{
          ...components,
          Day: ({ day }) => (
            <CalendarDay 
              date={day.date}
              events={events}
              displayMonth={day.date}
            />
          )
        }}
        {...props}
      />
    </>
  );
}

export { Calendar };
