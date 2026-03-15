"use client";

interface HoursListProps {
  hours?: { day: string; time: string }[]
}

export default function HoursList({
  hours = [
    { day: 'Monday', time: '4:00 PM – 10:00 PM' },
    { day: 'Tuesday', time: '4:00 PM – 10:00 PM' },
    { day: 'Wednesday', time: '4:00 PM – 10:00 PM' },
    { day: 'Thursday', time: '4:00 PM – 10:00 PM' },
    { day: 'Friday', time: '12:00 PM – 11:00 PM' },
    { day: 'Saturday', time: '12:00 PM – 11:00 PM' },
    { day: 'Sunday', time: '12:00 PM – 10:00 PM' },
  ],
}: Partial<HoursListProps>) {
  return (
    <div className="rounded-xl border border-[#DDA15E]/30 bg-[#FEFAE0] p-5">
      <h4 className="font-serif text-xl text-[#722F37]">Hours</h4>
      <ul className="mt-3 space-y-2">
        {hours.map((entry, idx) => (
          <li key={entry.day + idx} className="flex justify-between text-sm text-[#606C38]">
            <span>{entry.day}</span>
            <span>{entry.time}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
