"use client";

interface Stat {
  value: string;
  label: string;
}

interface StatsCounterProps {
  stats: Stat[];
  bgColor?: string;
}

export default function StatsCounter({
  stats = [
    { value: '12+', label: 'Years of Culinary Excellence' },
    { value: '45k', label: 'Guests Served Annually' },
    { value: '98%', label: 'Reservation Satisfaction' },
    { value: '30+', label: 'Seasonal Dishes Each Quarter' },
  ],
  bgColor,
}: Partial<StatsCounterProps>) {
  return (
    <section className={'py-16 ' + (bgColor || 'bg-[#606C38] text-[#FEFAE0]')}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className={'grid grid-cols-2 gap-8 text-center md:grid-cols-' + Math.min(stats.length || 2, 4)}>
          {stats.map(function (stat, i) {
            return (
              <div key={i}>
                <p className="text-4xl font-bold text-[#DDA15E] md:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-wider opacity-85">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
