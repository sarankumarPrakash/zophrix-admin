import React from "react";

/* ---------- COLOR SCALE ---------- */
const getColor = (count) => {
  if (count === 0) return "bg-[#161b22]";
  if (count <= 2) return "bg-[#0e4429]";
  if (count <= 5) return "bg-[#006d32]";
  if (count <= 9) return "bg-[#26a641]";
  return "bg-[#39d353]";
};

/* ---------- GENERATE MOCK DATA ---------- */
const generateData = () => {
  return Array.from({ length: 23 }, () =>
    Array.from({ length: 7 }, () => Math.floor(Math.random() * 12))
  );
};

/* ---------- MONTH LABEL POSITIONS ---------- */
const months = [
  "Mar","Apr","May","Jun","Jul","Aug",
  "Sep","Oct","Nov","Dec","Jan","Feb"
];

const Submission = () => {
  const data = generateData();

  const total = data.flat().reduce((a, b) => a + b, 0);

  return (
    <div className="rounded-xl border border-white/10 bg-[#0b1117] p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm text-gray-300">
          <span className="font-semibold text-white">{total}</span> <span className="ml-5">Contribution Activity ( last 12 months )</span> 
        </h2>

        {/* LEGEND */}
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span>Less</span>
          {[0,1,2,3,4].map((lvl) => (
            <div
              key={lvl}
              className={`w-3 h-3 rounded-full ${
                ["bg-[#161b22]","bg-[#0e4429]","bg-[#006d32]","bg-[#26a641]","bg-[#39d353]"][lvl]
              }`}
            />
          ))}
          <span>More</span>
        </div>
      </div>

      {/* MONTH LABELS */}
      <div className="flex text-xs text-gray-500 mb-1 ml-8">
        {months.map((m, i) => (
          // shrink label width on smaller breakpoints so the calendar remains usable
          <div key={i} className="w-[52px] sm:w-[32px]">
            {m}
          </div>
        ))}
      </div>

      <div className="flex">
        {/* WEEKDAY LABELS */}
        <div className="flex flex-col justify-between text-xs text-gray-500 mr-2 h-[98px]">
          <span>Mon</span>
          <span>Wed</span>
          <span>Fri</span>
        </div>

        {/* GRID */}
        <div className="flex gap-[4px] overflow-x-auto">
          {data.map((week, i) => (
            <div key={i} className="flex flex-col gap-[4px]">
              {week.map((count, j) => (
                <div
                  key={j}
                  title={`${count} submissions`}
                  className={`w-3 h-3 rounded-full ${getColor(count)}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Submission;