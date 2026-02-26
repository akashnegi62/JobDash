"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiUser,
  FiBriefcase,
  FiUsers,
  FiMessageSquare,
  FiBarChart2,
  FiSettings,
  FiMenu,
  FiX,
} from "react-icons/fi";

const navItems = [
  { icon: FiHome, href: "/", label: "Home" },
  { icon: FiUser, href: "/job", label: "Profile" },
  { icon: FiBriefcase, href: "/briefcase", label: "Jobs" },
  { icon: FiUsers, href: "/users", label: "Users" },
  { icon: FiMessageSquare, href: "/messages", label: "Messages" },
];

const bottomNavItems = [
  { icon: FiBarChart2, href: "/analytics", label: "Analytics" },
  { icon: FiSettings, href: "/settings", label: "Settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const allItems = [...navItems, ...bottomNavItems];

  return (
    <>
      {/* ── Desktop sidebar  */}
      <aside className="hidden md:flex w-20 bg-white border-r border-gray-100 flex-col items-center py-6 min-h-screen">
        {/* Logo */}
        <div className="mb-10">
          <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white font-light">
            S
          </div>
        </div>

        {/* Top Nav */}
        <div className="flex w-full flex-col gap-4">
          {navItems.map((item, i) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link key={i} href={item.href}>
                <div
                  className={`relative h-12 flex items-center justify-center transition-all duration-200 cursor-pointer
                    ${
                      isActive
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                    }`}
                >
                  {isActive && (
                    <span className="absolute left-0 top-0 h-full w-1 bg-blue-600" />
                  )}
                  <Icon size={20} />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="flex-1" />

        {/* Bottom Nav */}
        <div className="flex flex-col gap-4">
          {bottomNavItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <button
                key={i}
                className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-xl transition"
              >
                <Icon size={20} />
              </button>
            );
          })}
        </div>
      </aside>

      {/* ── Mobile / Tablet hamburger button */}
      <button
        className="md:hidden fixed top-4.5 left-4 z-50 w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg transition"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <FiMenu size={22} />
      </button>

      {/* ── Overlay */}
      {open && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 z-50"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ── Drawer */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-64 bg-white z-50 flex flex-col py-6 shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 mb-8">
          <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white font-light">
            S
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Nav items */}
        <div className="flex flex-col gap-1 px-3 flex-1">
          {allItems.map((item, i) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={i}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium
                  ${
                    isActive
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                  }`}
              >
                {isActive && (
                  <span className="absolute left-0 top-2 bottom-2 w-1 bg-blue-600 rounded-r-full" />
                )}
                <Icon size={19} />
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
