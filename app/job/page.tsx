/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  FiSearch,
  FiChevronDown,
  FiMapPin,
  FiMoreVertical,
  FiArrowUpRight,
  FiFilter,
  FiMessageCircle,
  FiBell,
  FiMenu,
} from "react-icons/fi";
import { HiOutlineBriefcase } from "react-icons/hi";
import { BsStarFill } from "react-icons/bs";

// ─── Data

const vacancyData = [
  { month: "Jan", sent: 620, interviews: 440, rejected: 80 },
  { month: "Feb", sent: 590, interviews: 500, rejected: 110 },
  { month: "Mar", sent: 680, interviews: 820, rejected: 95 },
  { month: "Apr", sent: 420, interviews: 380, rejected: 140 },
  { month: "May", sent: 720, interviews: 760, rejected: 60 },
  { month: "Jun", sent: 660, interviews: 620, rejected: 90 },
  { month: "Jul", sent: 590, interviews: 510, rejected: 75 },
  { month: "Aug", sent: 600, interviews: 400, rejected: 120 },
  { month: "Sep", sent: 700, interviews: 520, rejected: 85 },
  { month: "Oct", sent: 640, interviews: 450, rejected: 100 },
  { month: "Nov", sent: 680, interviews: 390, rejected: 70 },
  { month: "Dec", sent: 720, interviews: 330, rejected: 130 },
];

const statCards = [
  {
    label: "Active Jobs",
    value: "03",
    delta: "+5 from yesterday",
    color: "#3B82F6",
    bars: [4, 7, 5, 8, 6, 9, 7],
  },
  {
    label: "Jobs In Progress",
    value: "03",
    delta: "+5 from yesterday",
    color: "#F59E0B",
    bars: [3, 6, 4, 7, 5, 8, 6],
  },
  {
    label: "Shortlisted",
    value: "03",
    delta: "+5 from yesterday",
    color: "#10B981",
    bars: [5, 8, 6, 9, 7, 10, 8],
  },
  {
    label: "On Hold",
    value: "03",
    delta: "+5 from yesterday",
    color: "#EF4444",
    bars: [2, 5, 3, 6, 4, 7, 5],
  },
];

const applications = [
  {
    title: "Jr. Front-end Developer",
    company: "Microsoft",
    logo: "MS",
    logoColor: "#00A4EF",
    appliedOn: "08/08/2023",
    status: "In-progress",
    statusColor: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "Senior Back-end Developer",
    company: "Google",
    logo: "G",
    logoColor: "#4285F4",
    appliedOn: "24/07/2023",
    status: "Applied",
    statusColor: "bg-purple-100 text-purple-700",
  },
  {
    title: "UI/UX Designer",
    company: "Meta",
    logo: "M",
    logoColor: "#0668E1",
    appliedOn: "01/05/2023",
    status: "Offered",
    statusColor: "bg-blue-100 text-blue-700",
  },
];

const recommendedJobs = Array(4).fill({
  title: "UI UX Designer",
  company: "SyncUp Technologies",
  rating: "4.5 Trusted",
  location: "Bangalore",
  type: "Hybrid",
  ago: "24 min. ago",
});

// ─── Mini bar chart component

function MiniBar({ bars, color }: { bars: number[]; color: string }) {
  const max = Math.max(...bars);
  return (
    <div className="flex items-end gap-0.75 h-10">
      {bars.map((v, i) => (
        <div
          key={i}
          className="w-1.25 rounded-sm"
          style={{
            height: `${(v / max) * 100}%`,
            backgroundColor: color,
            opacity: i === bars.length - 1 ? 1 : 0.45 + i * 0.07,
          }}
        />
      ))}
    </div>
  );
}

// ─── Company Logo

function CompanyLogo({
  logo,
  color,
  company,
}: {
  logo: string;
  color: string;
  company: string;
}) {
  if (company === "Microsoft") {
    return (
      <div className="w-8 h-8 grid grid-cols-2 gap-0.5 rounded overflow-hidden shrink-0">
        <div className="bg-red-500" />
        <div className="bg-green-500" />
        <div className="bg-blue-500" />
        <div className="bg-yellow-400" />
      </div>
    );
  }
  if (company === "Google") {
    return (
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0"
        style={{ background: "#fff", border: "1.5px solid #e5e7eb" }}
      >
        <span style={{ color: "#4285F4" }}>G</span>
      </div>
    );
  }
  return (
    <div
      className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-sm shrink-0"
      style={{ backgroundColor: color }}
    >
      {logo}
    </div>
  );
}

// ─── SyncUp Logo blob

function SyncUpLogo() {
  return (
    <div className="w-10 h-10 relative shrink-0">
      <div className="absolute top-0 left-0 w-5 h-5 rounded-full bg-pink-400" />
      <div className="absolute top-0 right-0 w-5 h-5 rounded-full bg-yellow-400" />
      <div className="absolute bottom-0 left-0 w-5 h-5 rounded-full bg-teal-400" />
      <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-blue-500" />
    </div>
  );
}

// ─── Custom tooltip
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-xl shadow-lg px-4 py-3 text-sm border border-gray-100">
        <p className="text-gray-400 mb-1 text-xs">{label} 22, 2025</p>
        <div className="flex gap-4">
          {payload.map((p: any) => (
            <div key={p.dataKey}>
              <div className="flex items-center gap-1">
                <span
                  className="inline-block w-2 h-2 rounded-full"
                  style={{ backgroundColor: p.color }}
                />
                <span className="font-bold text-gray-800">{p.value}</span>
              </div>
              <p className="text-gray-400 text-xs capitalize">
                {p.dataKey === "sent" ? "Application Sent" : p.dataKey}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

// ─── Toggle

function Toggle({
  active,
  color = "#6366F1",
}: {
  active: boolean;
  color?: string;
}) {
  return (
    <div
      className="w-9 h-5 rounded-full relative cursor-pointer transition-colors duration-200 shrink-0"
      style={{ backgroundColor: active ? color : "#D1D5DB" }}
    >
      <div
        className="absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all duration-200"
        style={{ left: active ? "calc(100% - 18px)" : "2px" }}
      />
    </div>
  );
}

// ─── Recommended Jobs Panel (extracted for reuse in drawer)

function RecommendedJobsPanel() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-base font-bold text-gray-900">Recomended Jobs</h2>
        <FiMoreVertical className="text-gray-400 cursor-pointer" />
      </div>
      <p className="text-xs text-gray-400 font-semibold mb-4 tracking-wide">
        TODAY
      </p>
      <div className="flex flex-col gap-4">
        {recommendedJobs.map((job, i) => (
          <div
            key={i}
            className="border-b border-gray-100 last:border-0 pb-4 last:pb-0"
          >
            <div className="flex items-center gap-3 mb-2">
              <SyncUpLogo />
              <div>
                <p className="font-bold text-gray-800 text-sm">{job.title}</p>
                <p className="text-gray-400 text-xs">{job.company}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <BsStarFill className="text-yellow-400" /> {job.rating}
              </span>
              <span className="flex items-center gap-1">
                <FiMapPin className="text-gray-400" /> {job.location}
              </span>
              <span className="flex items-center gap-1">
                <HiOutlineBriefcase className="text-gray-400" /> {job.type}
              </span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs text-gray-400">{job.rating}</span>
              <span className="text-xs text-gray-400">{job.ago}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 text-center text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-colors flex items-center justify-center gap-1">
        View all posts <span>→</span>
      </button>
    </div>
  );
}

// ─── Main Dashboard

export default function Dashboard() {
  const [showRejected, setShowRejected] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 px-4 md:px-6 py-4 flex items-center gap-3">
        {/* Hamburger */}
        <button className="md:hidden w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg transition shrink-0">
          <FiMenu size={22} />
        </button>

        {/* Search — grows to fill space on mobile, centered on md+ */}
        <div className="flex-1 md:absolute md:left-1/2 md:-translate-x-1/2 md:w-105">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-[#F4F6FB] rounded-full py-2.5 pl-4 pr-10 text-sm outline-none focus:ring-2 focus:ring-blue-100"
            />
            <FiSearch
              size={16}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-3 md:gap-4 ml-auto">
          <FiMessageCircle className="text-gray-500" size={20} />
          <FiBell className="text-gray-500" size={20} />
          <div className="flex items-center gap-1 cursor-pointer">
            <div className="w-8 h-8 bg-linear-to-br from-pink-400 to-orange-400 rounded-full overflow-hidden">
              <Image
                width={32}
                height={32}
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="profile"
              />
            </div>
            <FiChevronDown
              size={14}
              className="text-gray-400 hidden sm:block"
            />
          </div>
        </div>
      </header>

      {/* Page title row */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 p-4 md:p-6">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2">
            Welcome back, Julie <span>👋</span>
          </h1>
          <p className="text-gray-400 text-sm mt-0.5">
            Here&apos;s what you need to focus on today
          </p>
        </div>
        <div className="flex items-center gap-2 md:gap-3 flex-wrap">
          <button className="flex items-center gap-2 px-3 md:px-4 py-2 bg-white rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm whitespace-nowrap">
            Last 30 Days <FiChevronDown className="text-gray-400" />
          </button>
          <button
            className="flex items-center gap-2 px-4 md:px-5 py-2 rounded-xl text-sm font-semibold text-white shadow-md hover:opacity-90 transition-opacity whitespace-nowrap"
            style={{ background: "linear-gradient(135deg,#6366F1,#4F46E5)" }}
          >
            <FiSearch /> Search Job
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex gap-6 px-4 md:px-6 pb-8">
        {/* Left column */}
        <div className="flex-1 min-w-0 flex flex-col gap-6">
          {/* Stat cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {statCards.map((card) => (
              <div
                key={card.label}
                className="bg-white rounded-2xl p-4 md:p-5 shadow-sm flex flex-col gap-3"
              >
                <p className="text-xs md:text-sm font-semibold text-gray-700">
                  {card.label}
                </p>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-gray-900">
                      {card.value}
                    </p>
                    <p className="text-xs text-green-500 mt-1 flex items-center gap-0.5">
                      <FiArrowUpRight /> {card.delta}
                    </p>
                  </div>
                  <MiniBar bars={card.bars} color={card.color} />
                </div>
              </div>
            ))}
          </div>

          {/* Vacancy Stats */}
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
              <h2 className="text-base font-bold text-gray-900">
                Vacancy Stats
              </h2>
              <div className="flex flex-wrap items-center gap-3 md:gap-5">
                <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                  <Toggle active={true} color="#6366F1" />
                  <span className="hidden sm:inline">Application Sent</span>
                  <span className="sm:hidden">Sent</span>
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                  <Toggle active={true} color="#10B981" /> Interviews
                </label>
                <label
                  className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer"
                  onClick={() => setShowRejected((p) => !p)}
                >
                  <Toggle active={showRejected} color="#EF4444" /> Rejected
                </label>
                <button className="flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                  This Year <FiChevronDown className="text-gray-400" />
                </button>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={240}>
              <AreaChart
                data={vacancyData}
                margin={{ top: 5, right: 5, bottom: 0, left: -20 }}
              >
                <defs>
                  <linearGradient id="gradSent" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366F1" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="gradInterviews"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="gradRejected" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#EF4444" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#F3F4F6"
                  vertical={false}
                />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: "#9CA3AF" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: "#9CA3AF" }}
                  ticks={[0, 200, 400, 600, 800, 1000]}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  iconType="circle"
                  iconSize={8}
                  wrapperStyle={{ fontSize: 12, paddingTop: 16 }}
                  formatter={(v) =>
                    v === "sent"
                      ? "Application Sent"
                      : v === "interviews"
                        ? "Interviews"
                        : "Rejected"
                  }
                />
                <Area
                  type="monotone"
                  dataKey="sent"
                  stroke="#6366F1"
                  strokeWidth={2.5}
                  fill="url(#gradSent)"
                  dot={false}
                  activeDot={{ r: 5, fill: "#6366F1" }}
                  name="sent"
                />
                <Area
                  type="monotone"
                  dataKey="interviews"
                  stroke="#10B981"
                  strokeWidth={2.5}
                  fill="url(#gradInterviews)"
                  dot={false}
                  activeDot={{ r: 5, fill: "#10B981" }}
                  name="interviews"
                />
                {showRejected && (
                  <Area
                    type="monotone"
                    dataKey="rejected"
                    stroke="#EF4444"
                    strokeWidth={2}
                    fill="url(#gradRejected)"
                    dot={false}
                    activeDot={{ r: 5, fill: "#EF4444" }}
                    name="rejected"
                  />
                )}
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Job Application Status */}
          <div
            className="bg-white rounded-2xl p-4 md:p-6 shadow-sm"
            id="job-application-status"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
              <h2 className="text-base font-bold text-gray-900">
                Job Application Status
              </h2>
              <div className="flex flex-wrap items-center gap-3 md:gap-5">
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <Toggle active={true} color="#6366F1" /> New
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <Toggle active={true} color="#6366F1" /> In Progress
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <Toggle active={false} /> Pending
                </label>
                <button className="flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                  Sort By <FiFilter className="text-gray-400 ml-1" />
                </button>
              </div>
            </div>

            {/* Responsive table: full table on md+, card list on mobile */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-400 text-xs border-b border-gray-100">
                    <th className="text-left pb-3 font-medium">Job title</th>
                    <th className="text-left pb-3 font-medium">Company</th>
                    <th className="text-left pb-3 font-medium">Applied on</th>
                    <th className="text-left pb-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((app, i) => (
                    <tr
                      key={i}
                      className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-4 font-semibold text-gray-800">
                        {app.title}
                      </td>
                      <td className="py-4">
                        <div className="flex items-center gap-2">
                          <CompanyLogo
                            logo={app.logo}
                            color={app.logoColor}
                            company={app.company}
                          />
                          <span className="text-gray-700">{app.company}</span>
                        </div>
                      </td>
                      <td className="py-4 text-gray-400">{app.appliedOn}</td>
                      <td className="py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${app.statusColor}`}
                        >
                          {app.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile card list */}
            <div className="md:hidden flex flex-col divide-y divide-gray-100">
              {applications.map((app, i) => (
                <div key={i} className="py-4 flex items-start gap-3">
                  <CompanyLogo
                    logo={app.logo}
                    color={app.logoColor}
                    company={app.company}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-800 text-sm truncate">
                      {app.title}
                    </p>
                    <p className="text-gray-500 text-xs">{app.company}</p>
                    <p className="text-gray-400 text-xs mt-0.5">
                      Applied: {app.appliedOn}
                    </p>
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-semibold shrink-0 ${app.statusColor}`}
                  >
                    {app.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Recommended Jobs — shown inline below xl */}
          <div className="xl:hidden">
            <RecommendedJobsPanel />
          </div>
        </div>

        {/* Right column — sidebar on xl+ */}
        <div className="w-72 shrink-0 hidden xl:block">
          <RecommendedJobsPanel />
        </div>
      </div>
    </div>
  );
}
