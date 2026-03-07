import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  Building2,
  MapPin,
  Globe,
  Users,
  UserCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Plus,
} from "lucide-react";

export default function ViewCompany() {
  const navigate = useNavigate();
  const location = useLocation();
  const company = location.state;

  const stats = [
    { icon: Users, value: "85", label: "Applied" },
    { icon: UserCheck, value: "30", label: "Shortlisted" },
    { icon: BriefcaseBusiness, value: "15", label: "Interviewed" },
    { icon: CheckCircle2, value: "7", label: "Offers" },
    { icon: CheckCircle2, value: "5", label: "Hired" },
  ];

  const roles = [
    {
      role: "Frontend Dev",
      skills: ["React", "JS"],
      package: "6 LPA",
      candidates: "12",
      deadline: "May 20",
    },
    {
      role: "Backend Dev",
      skills: ["Node", "SQL"],
      package: "8 LPA",
      candidates: "9",
      deadline: "May 20",
    },
    {
      role: "DevOps Intern",
      skills: ["Docker", "AWS"],
      package: "4 LPA",
      candidates: "4",
      deadline: "Jun 1",
    },
  ];

  const candidates = [
    {
      name: "Priya Nair",
      dept: "CSE",
      skills: ["React"],
      score: "92",
      status: "Coding Round",
    },
  ];

  return (
    <div className="min-h-screen pb-8 text-white">
      <div className="px-[18px] pb-8 pt-[26px]">
        {/* Header */}
        <div className="mb-[34px] flex items-start gap-[14px]">
          <button
            onClick={() => navigate(-1)}
            className="mt-[4px] text-slate-300 transition hover:text-white"
            type="button"
          >
            <ArrowLeft size={18} strokeWidth={2.2} />
          </button>

          <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[16px] card-theme">
            <Building2 size={24} className="text-[#22c55e]" strokeWidth={2} />
          </div>

          <div>
            <h1 className="text-[19px] font-semibold leading-none text-white">
              {company?.name || "Company"}
            </h1>

            <div className="mt-[8px] flex flex-wrap items-center gap-[14px] text-[14px] text-slate-400">
              <span>{company?.industry || "Industry"}</span>

              <div className="flex items-center gap-[5px]">
                <MapPin size={13} />
                <span>{company?.location || "Location"}</span>
              </div>

              <div className="flex items-center gap-[5px]">
                <Globe size={13} />
                <span>
                  {company?.name
                    ? `${company.name.toLowerCase().replace(/\s+/g, "")}.com`
                    : "company.com"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-5 gap-[8px]">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="h-[72px] rounded-[14px] border border-[#1b2432] card-theme px-2"
              >
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <Icon size={14} className="mb-[4px] text-slate-500" />
                  <h2 className="text-[14px] font-semibold leading-none text-white">
                    {item.value}
                  </h2>
                  <p className="mt-[4px] text-[11px] leading-none text-slate-500">
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Job Roles */}
        <div className="mt-[34px]">
          <div className="mb-[14px] flex items-center justify-between">
            <h2 className="text-[17px] font-semibold text-white">Job Roles</h2>

            <button
              type="button"
              className="inline-flex h-[36px] items-center gap-[8px] rounded-[12px] border border-[#1b2432] card-theme px-[14px] text-[14px] font-medium text-white hover:bg-[#10192b]"
            >
              <Plus size={14} className="text-[#22c55e]" strokeWidth={2.5} />
              Add Role
            </button>
          </div>

          <div className="overflow-x-auto rounded-[16px] border border-[#1b2432] card-theme">
            <div className="min-w-[900px]">
              <div className="grid grid-cols-[1.4fr_1.2fr_1fr_1fr_1fr] border-b border-[#1b2432] px-[20px] py-[18px] text-[14px] text-slate-400">
                <div>Role</div>
                <div>Skills</div>
                <div>Package</div>
                <div>Candidates</div>
                <div>Deadline</div>
              </div>

              {roles.map((item, index) => (
                <div
                  key={index}
                  className="grid min-h-[66px] grid-cols-[1.4fr_1.2fr_1fr_1fr_1fr] items-center border-b border-[#1b2432] px-[20px] py-[18px] last:border-b-0"
                >
                  <div className="text-[15px] font-semibold text-white">
                    {item.role}
                  </div>

                  <div className="flex flex-wrap gap-[8px]">
                    {item.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-[#263244] card-theme px-[10px] py-[5px] text-[12px] font-semibold leading-none text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="text-[15px] font-semibold text-[#22c55e]">
                    {item.package}
                  </div>

                  <div className="text-[15px] text-slate-400">
                    {item.candidates}
                  </div>

                  <div className="text-[15px] text-slate-400">
                    {item.deadline}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Candidates */}
        <div className="mt-[30px] pb-10">
          <h2 className="mb-[14px] text-[17px] font-semibold text-white">
            Candidates
          </h2>

          <div className="overflow-x-auto rounded-[16px] border border-[#1b2432] card-theme">
            <div className="min-w-[900px]">
              <div className="grid grid-cols-[1.4fr_0.8fr_1.2fr_0.8fr_1fr] border-b border-[#1b2432] px-[20px] py-[18px] text-[14px] text-slate-400">
                <div>Candidate</div>
                <div>Dept</div>
                <div>Skills</div>
                <div>Score</div>
                <div>Status</div>
              </div>

              {candidates.map((item, index) => (
                <div
                  key={index}
                  className="grid min-h-[72px] grid-cols-[1.4fr_0.8fr_1.2fr_0.8fr_1fr] items-center px-[20px] py-[18px]"
                >
                  <div className="text-[15px] font-semibold text-white">
                    {item.name}
                  </div>

                  <div className="text-[15px] text-slate-400">{item.dept}</div>

                  <div className="flex flex-wrap gap-[8px]">
                    {item.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-[#263244] bg-[#1a2434] px-[10px] py-[5px] text-[12px] font-semibold leading-none text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="text-[15px] font-semibold text-[#22c55e]">
                    {item.score}
                  </div>

                  <div>
                    <span className="inline-flex rounded-full border border-[#0e7490] bg-[#082f49] px-[14px] py-[8px] text-[12px] font-semibold leading-none text-[#38bdf8]">
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}