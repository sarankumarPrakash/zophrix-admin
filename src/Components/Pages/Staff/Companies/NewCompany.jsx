import React from "react";
import { ArrowLeft, Calendar, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NewCompany() {
    const navigate = useNavigate();
  const departments = ["CSE", "IT", "ECE", "EEE", "MECH", "CIVIL"];
  const processSteps = [
    "Coding Test",
    "Technical Interview",
    "HR Interview",
    "Group Discussion",
    "Aptitude Test",
  ];

  const inputClass =
    "w-full h-11 rounded-lg border border-[#30363D] bg-[#21262D] px-4 text-[13px] text-white placeholder:text-[#8B949E] outline-none transition focus:border-[#22c55e]";

  const labelClass = "mb-2 block text-[11px] font-medium text-[#8B949E]";
  const sectionTitleClass =
    "mb-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-white";

  const radioBoxClass =
    "flex h-11 items-center gap-2 rounded-lg border border-[#30363D] bg-[#21262D] px-4 text-[12px] font-medium text-[#D6DEEA]";

  const cardClass =
    "rounded-xl border border-[#30363D] bg-[#161B22] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.01)]";

  return (
    <div className="min-h-screen bg-[#0D1117] px-4 py-5 text-white sm:px-6">
      <div className="mx-auto w-full max-w-[980px]">
        <div className="mb-5 flex items-start gap-3">
         <button
  onClick={() => navigate(-1)}
  className="mt-[2px] flex h-8 w-8 items-center justify-center rounded-full text-white/90 transition hover:bg-white/5"
  type="button"
>
  <ArrowLeft size={18} />
</button>

          <div>
            <h1 className="text-[24px] font-semibold leading-none text-white">
              Add Company
            </h1>
            <p className="mt-1 text-[12px] text-[#8B949E]">
              Register a new hiring company with role and eligibility details.
            </p>
          </div>
        </div>

        <form className="space-y-5">
          <section className={cardClass}>
            <h2 className={sectionTitleClass}>COMPANY INFORMATION</h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className={labelClass}>Company Name</label>
                <input
                  type="text"
                  placeholder="e.g. Zoho"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Industry</label>
                <div className="relative">
                  <select
                    defaultValue=""
                    className={`${inputClass} appearance-none pr-10 text-[#cfd7e4]`}
                  >
                    <option value="" disabled>
                      Select industry
                    </option>
                    <option>Software</option>
                    <option>Finance</option>
                    <option>Healthcare</option>
                    <option>Manufacturing</option>
                  </select>
                  <ChevronDown
                    size={16}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#7b8799]"
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Location</label>
                <input
                  type="text"
                  placeholder="e.g. Chennai"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Company Website</label>
                <input
                  type="text"
                  placeholder="e.g. zoho.com"
                  className={inputClass}
                />
              </div>
            </div>
          </section>

          <section className={cardClass}>
            <h2 className={sectionTitleClass}>HR CONTACT</h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div>
                <label className={labelClass}>HR Name</label>
                <input
                  type="text"
                  placeholder="Contact person"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>HR Email</label>
                <input
                  type="email"
                  placeholder="hr@company.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>HR Phone</label>
                <input
                  type="text"
                  placeholder="+91 ..."
                  className={inputClass}
                />
              </div>
            </div>
          </section>

          <section className={cardClass}>
            <h2 className={sectionTitleClass}>HIRING DETAILS</h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className={labelClass}>Role Title</label>
                <input
                  type="text"
                  placeholder="e.g. Frontend Developer"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Salary Package</label>
                <input
                  type="text"
                  placeholder="e.g. 6 LPA"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Hiring Type</label>
                <div className="relative">
                  <select
                    defaultValue=""
                    className={`${inputClass} appearance-none pr-10 text-[#cfd7e4]`}
                  >
                    <option value="" disabled>
                      Select type
                    </option>
                    <option>Full Time</option>
                    <option>Internship</option>
                    <option>Internship + FTE</option>
                  </select>
                  <ChevronDown
                    size={16}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#7b8799]"
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Minimum CGPA</label>
                <input
                  type="text"
                  placeholder="e.g. 7.0"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Application Deadline</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Pick a date"
                    className={`${inputClass} pl-11`}
                  />
                  <Calendar
                    size={16}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#7b8799]"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <label className={`${labelClass} mb-3`}>Eligible Departments</label>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                {departments.map((dept) => (
                  <label key={dept} className={radioBoxClass}>
                    <input
                      type="radio"
                      name="department"
                      className="h-4 w-4 accent-[#22c55e]"
                    />
                    <span>{dept}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <label className={`${labelClass} mb-3`}>Hiring Process</label>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                {processSteps.map((step) => (
                  <label key={step} className={radioBoxClass}>
                    <input
                      type="radio"
                      name="process"
                      className="h-4 w-4 accent-[#22c55e]"
                    />
                    <span>{step}</span>
                  </label>
                ))}
              </div>
            </div>
          </section>

          <div className="flex items-center justify-end gap-3 pt-1">
            <button
              type="button"
              className="h-10 rounded-lg border border-[#30363D] bg-transparent px-5 text-[13px] font-medium text-[#d3dceb] transition hover:bg-white/5"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="h-10 rounded-lg bg-[#22c55e] px-5 text-[13px] font-semibold text-[#07120d] transition hover:bg-[#1fb157]"
            >
              Add Company
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}