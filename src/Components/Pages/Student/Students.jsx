import React, { useMemo, useState } from "react";
import { Search, ChevronDown, Eye } from "lucide-react";

const students = [
  {
    name: "Priya Nair",
    department: "CSE",
    year: "Final Year",
    cgpa: 9.1,
    skills: ["Node", "DevOps", "React"],
  },
  {
    name: "Ananya Gupta",
    department: "CSE",
    year: "3rd Year",
    cgpa: 8.8,
    skills: ["Python", "System Design"],
  },
  {
    name: "Arjun Kumar",
    department: "CSE",
    year: "Final Year",
    cgpa: 8.2,
    skills: ["React", "Node"],
  },
  {
    name: "Divya Sharma",
    department: "CSE",
    year: "Final Year",
    cgpa: 7.6,
    skills: ["Python", "Django"],
  },
  {
    name: "Sneha Reddy",
    department: "CSE",
    year: "Final Year",
    cgpa: 7.3,
    skills: ["React", "TypeScript"],
  },
  {
    name: "Rohan Patel",
    department: "IT",
    year: "Final Year",
    cgpa: 7.1,
    skills: ["React", "Node"],
  },
  {
    name: "Rahul Verma",
    department: "IT",
    year: "3rd Year",
    cgpa: 6.8,
    skills: ["React", "SQL"],
  },
  {
    name: "Vikram Joshi",
    department: "IT",
    year: "Final Year",
    cgpa: 6.5,
    skills: ["Node", "SQL"],
  },
  {
    name: "Karthik S",
    department: "ECE",
    year: "3rd Year",
    cgpa: 5.4,
    skills: ["Python"],
  },
  {
    name: "Meera Krishnan",
    department: "CSE",
    year: "3rd Year",
    cgpa: 4.5,
    skills: ["SQL"],
  },
  {
    name: "Naveen Kumar",
    department: "EEE",
    year: "Final Year",
    cgpa: 7.9,
    skills: ["MATLAB", "Python"],
  },
  {
    name: "Aishwarya R",
    department: "MECH",
    year: "3rd Year",
    cgpa: 6.9,
    skills: ["AutoCAD", "SolidWorks"],
  },
  {
    name: "Harini S",
    department: "CIVIL",
    year: "Final Year",
    cgpa: 8.0,
    skills: ["AutoCAD", "STAAD Pro"],
  },
];

const getCgpaColor = (cgpa) => {
  if (cgpa >= 8) return "text-green-400";
  if (cgpa >= 6) return "text-yellow-400";
  return "text-red-400";
};

const FilterSelect = ({ value, onChange, options, defaultLabel }) => (
  <div className="relative">
    <select
      value={value}
      onChange={onChange}
      className="h-10 min-w-[140px] appearance-none rounded-xl border border-[#1A2233] card-theme px-4 pr-10 text-sm text-gray-300 outline-none"
    >
      <option value="">{defaultLabel}</option>
      {options.map((option, index) => (
        <option key={index} value={option} className="card-theme text-white">
          {option}
        </option>
      ))}
    </select>

    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
  </div>
);

export default function Students() {
  const [search, setSearch] = useState("");
  const [selectedDept, setSelectedDept] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const departments = ["CSE", "IT", "ECE", "EEE", "MECH", "CIVIL"];
  const years = ["3rd Year", "Final Year"];

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesSearch =
        student.name.toLowerCase().includes(search.toLowerCase()) ||
        student.department.toLowerCase().includes(search.toLowerCase()) ||
        student.skills.some((skill) =>
          skill.toLowerCase().includes(search.toLowerCase())
        );

      const matchesDept = selectedDept
        ? student.department === selectedDept
        : true;

      const matchesYear = selectedYear
        ? student.year === selectedYear
        : true;

      return matchesSearch && matchesDept && matchesYear;
    });
  }, [search, selectedDept, selectedYear]);

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      {/* Sticky top filters */}
      <div className="sticky top-0 z-30 mb-4  pb-3 pt-1">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-full max-w-sm items-center rounded-xl border border-[#1A2233] card-theme px-3">
            <Search className="h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="ml-2 w-full bg-transparent text-sm text-white placeholder:text-gray-500 focus:outline-none"
            />
          </div>

          <FilterSelect
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
            options={departments}
            defaultLabel="All Depts"
          />

          <FilterSelect
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            options={years}
            defaultLabel="All Years"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border border-[#1A2233] card-theme">
        <div className="max-h-[70vh] overflow-y-auto">
          <table className="w-full border-separate border-spacing-0">
            <thead className="sticky top-0 z-20 card-theme">
              <tr className="text-left text-sm text-gray-400">
                <th className="border-b border-[#1A2233] px-5 py-4 font-medium">
                  Name
                </th>
                <th className="border-b border-[#1A2233] px-5 py-4 font-medium">
                  Department
                </th>
                <th className="border-b border-[#1A2233] px-5 py-4 font-medium">
                  Year
                </th>
                <th className="border-b border-[#1A2233] px-5 py-4 font-medium">
                  CGPA
                </th>
                <th className="border-b border-[#1A2233] px-5 py-4 font-medium">
                  Verified Skills
                </th>
                <th className="border-b border-[#1A2233] px-5 py-4 font-medium">
                  Profile
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student, index) => (
                  <tr
                    key={index}
                    className="text-sm text-gray-300 hover:bg-[#0f172a]"
                  >
                    <td className="border-b border-[#182133] px-5 py-5 font-medium text-white">
                      {student.name}
                    </td>
                    <td className="border-b border-[#182133] px-5 py-5">
                      {student.department}
                    </td>
                    <td className="border-b border-[#182133] px-5 py-5">
                      {student.year}
                    </td>
                    <td
                      className={`border-b border-[#182133] px-5 py-5 font-semibold ${getCgpaColor(
                        student.cgpa
                      )}`}
                    >
                      {student.cgpa}
                    </td>
                    <td className="border-b border-[#182133] px-5 py-5">
                      <div className="flex flex-wrap gap-2">
                        {student.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="rounded-full bg-[#1F2937] px-3 py-1 text-xs text-gray-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="border-b border-[#182133] px-5 py-5">
                      <button className="flex items-center gap-2 text-gray-200 hover:text-white">
                        <Eye className="h-4 w-4" />
                        <span>View</span>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="px-5 py-8 text-center text-sm text-gray-400"
                  >
                    No students found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}