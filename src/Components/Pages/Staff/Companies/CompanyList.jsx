import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  ChevronDown,
  Plus,
  Building2,
  MapPin,
  Eye,
} from "lucide-react";

export default function CompanyListPage() {
  const navigate = useNavigate();

  const companies = [
    {
      name: "Zoho",
      industry: "SaaS",
      location: "Chennai",
      openRoles: 3,
      candidates: 25,
      status: "Hiring",
    },
    {
      name: "Freshworks",
      industry: "SaaS",
      location: "Chennai",
      openRoles: 2,
      candidates: 18,
      status: "Hiring",
    },
    {
      name: "TCS",
      industry: "IT Services",
      location: "India",
      openRoles: 5,
      candidates: 60,
      status: "Hiring",
    },
    {
      name: "Infosys",
      industry: "IT Services",
      location: "Bangalore",
      openRoles: 0,
      candidates: 42,
      status: "Closed",
    },
    {
      name: "Razorpay",
      industry: "Fintech",
      location: "Bangalore",
      openRoles: 4,
      candidates: 30,
      status: "Hiring",
    },
    {
      name: "CRED",
      industry: "Fintech",
      location: "Bangalore",
      openRoles: 1,
      candidates: 12,
      status: "Upcoming",
    },
    {
      name: "Wipro",
      industry: "IT Services",
      location: "India",
      openRoles: 8,
      candidates: 75,
      status: "Hiring",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");
  const [selectedStatus, setSelectedStatus] = useState("All Status");

  const industries = ["All Industries", ...new Set(companies.map((c) => c.industry))];
  const statuses = ["All Status", ...new Set(companies.map((c) => c.status))];

  const filteredCompanies = useMemo(() => {
    return companies.filter((company) => {
      const matchesSearch =
        company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesIndustry =
        selectedIndustry === "All Industries" ||
        company.industry === selectedIndustry;

      const matchesStatus =
        selectedStatus === "All Status" || company.status === selectedStatus;

      return matchesSearch && matchesIndustry && matchesStatus;
    });
  }, [companies, searchTerm, selectedIndustry, selectedStatus]);

  const getStatusClasses = (status) => {
    switch (status) {
      case "Hiring":
        return "border border-[#14532d] bg-[#0f3b2a] text-[#22c55e]";
      case "Closed":
        return "border border-[#7f1d1d] bg-[#3a1720] text-[#ef4444]";
      case "Upcoming":
        return "border border-[#6b4f1d] bg-[#3b2d16] text-[#f59e0b]";
      default:
        return "border border-slate-700 bg-slate-800 text-slate-300";
    }
  };

  return (
    <div className="min-h-screen px-4 py-4 text-white">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <div className="flex h-[38px] w-[320px] items-center rounded-xl border border-[#1b2432] px-3">
          <Search size={16} className="text-slate-500" />
          <input
            type="text"
            placeholder="Search company..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="ml-2 w-full bg-transparent text-[14px] text-white placeholder:text-slate-500 outline-none"
          />
        </div>

        <div className="relative">
          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="h-[38px] w-[160px] appearance-none rounded-xl border border-[#1b2432] card-theme px-3 pr-9 text-[14px] text-white outline-none"
          >
            {industries.map((industry) => (
              <option key={industry} value={industry} className="bg-[#111827] text-white">
                {industry}
              </option>
            ))}
          </select>
          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
        </div>

        <div className="relative">
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="h-[38px] w-[150px] appearance-none rounded-xl border border-[#1b2432] card-theme px-3 pr-9 text-[14px] text-white outline-none"
          >
            {statuses.map((status) => (
              <option key={status} value={status} className="bg-[#111827] text-white">
                {status}
              </option>
            ))}
          </select>
          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
        </div>

        <button
          onClick={() => navigate("/new-company")}
          className="flex items-center gap-2 rounded-lg bg-green-500 px-4 py-2 text-white"
          type="button"
        >
          <Plus size={18} />
          Add Company
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[#1b2432] card-theme">
        <div className="grid grid-cols-[2.1fr_1.3fr_1.5fr_1.2fr_1.2fr_1.3fr_1fr] border-b border-[#1b2432] px-4 py-4 text-[14px] text-slate-400">
          <div>Company</div>
          <div>Industry</div>
          <div>Location</div>
          <div>Open Roles</div>
          <div>Candidates</div>
          <div>Status</div>
          <div>Action</div>
        </div>

        {filteredCompanies.length > 0 ? (
          filteredCompanies.map((company, index) => (
            <div
              key={index}
              className="grid grid-cols-[2.1fr_1.3fr_1.5fr_1.2fr_1.2fr_1.3fr_1fr] items-center border-b border-[#1b2432] px-4 py-4 last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-[36px] w-[36px] items-center justify-center rounded-xl bg-[#1b2331]">
                  <Building2 size={16} className="text-slate-400" />
                </div>
                <span className="text-[14px] font-semibold text-white">
                  {company.name}
                </span>
              </div>

              <div className="text-[14px] text-slate-400">{company.industry}</div>

              <div className="flex items-center gap-2 text-[14px] text-slate-400">
                <MapPin size={14} />
                <span>{company.location}</span>
              </div>

              <div className="text-[14px] font-semibold text-white">
                {company.openRoles}
              </div>

              <div className="text-[14px] text-slate-400">
                {company.candidates}
              </div>

              <div>
                <span
                  className={`inline-flex rounded-full px-3 py-[6px] text-[12px] font-semibold ${getStatusClasses(
                    company.status
                  )}`}
                >
                  {company.status}
                </span>
              </div>

              <button
                onClick={() => navigate("/company-detail", { state: company })}
                className="flex items-center gap-2 text-[14px] font-semibold text-white hover:text-slate-300"
                type="button"
              >
                <Eye size={16} />
                View
              </button>
            </div>
          ))
        ) : (
          <div className="py-10 text-center text-[14px] text-slate-400">
            No companies found
          </div>
        )}
      </div>
    </div>
  );
}