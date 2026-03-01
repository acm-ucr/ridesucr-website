"use client";

import * as React from "react";
import {
  DayPicker,
} from "react-day-picker";

import { useState } from "react"
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
}) {

  const weekFormat = (date: Date) => {
    const week = [
      "SUNDAY",
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY",
    ];
    return week[date.getDay()];
  }

  const [currentDate, setCurrentDate] = useState(new Date());
  // const today = new Date();

  const nextMonth = () => {
    const newDate = new Date(currentDate)
    newDate.setMonth(newDate.getMonth() + 1)
    setCurrentDate(newDate);
  }

  const prevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1)
    setCurrentDate(newDate)
  }

  return (
    <>
      <div className = "w-2/3 flex justify-center">
        <div className = "flex w-1/3 justify-center text-white text-4xl py-3 shadow-2xl bg-white/20 backdrop-blur-md rounded-3xl border border-ridesucr-white">
            <BiSolidLeftArrow className = "scale-75" onClick={prevMonth}/>
            {currentDate.toLocaleString("en-US", { month: "long" })}
            &nbsp;
            {currentDate.getFullYear()}
            <BiSolidRightArrow className = "scale-75" onClick={nextMonth}/>
        </div>
      </div>
      <DayPicker
        showOutsideDays={showOutsideDays}
        month={currentDate}
        onMonthChange={setCurrentDate}
        className={cn(
          "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
          className,
        )}
        captionLayout={captionLayout}
        formatters={{
          ...formatters,
          formatWeekdayName: weekFormat,
        }}
        classNames={{
          root: "w-full",
          months: "flex gap-4 flex-col md:flex-row relative",
          month: "flex flex-col w-full gap-4",
          nav:"hidden",
          month_caption: "hidden",
          weekdays: "grid grid-cols-7 ",
          weekday: "text-muted-foreground rounded-md flex-1 font-normal text-2xl select-none",
          week: "flex w-full",
          day: "relative w-full text-end text-3xl text-ridesucr-white pr-2 pt-2 aspect-square border border-ridesucr-white/20",
          ...classNames,
        }}
        components={{
          Root: ({ className, rootRef, ...props }) => {
            return (
              <div
                data-slot="calendar"
                ref={rootRef}
                className={cn(className)}
                {...props}
              />
            );
          },
          ...components,
        }}
        {...props}
      />
    </>
  );
}

// function CalendarDayButton({
//   className,
//   day,
//   modifiers,
//   ...props
// }: React.ComponentProps<typeof DayButton>) {
//   const defaultClassNames = getDefaultClassNames();

//   const ref = React.useRef<HTMLButtonElement>(null);
//   React.useEffect(() => {
//     if (modifiers.focused) ref.current?.focus();
//   }, [modifiers.focused]);

//   return (
//     <Button
//       ref={ref}
//       variant="ghost"
//       size="icon"
//       data-day={day.date.toLocaleDateString()}
//       data-selected-single={
//         modifiers.selected &&
//         !modifiers.range_start &&
//         !modifiers.range_end &&
//         !modifiers.range_middle
//       }
//       data-range-start={modifiers.range_start}
//       data-range-end={modifiers.range_end}
//       data-range-middle={modifiers.range_middle}
//       className={cn(
//         "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
//         defaultClassNames.day,
//         className,
//       )}
//       {...props}
//     />
//   );
// }

export { Calendar };
