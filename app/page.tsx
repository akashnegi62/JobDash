"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FiMessageSquare,
  FiBarChart2,
  FiSearch,
  FiMessageCircle,
  FiBell,
  FiChevronDown,
  FiSend,
  FiMoreHorizontal,
  FiThumbsUp,
  FiSmile,
  FiEdit3,
  FiShare2,
  FiBookmark,
  FiPaperclip,
  FiImage,
  FiStar,
  FiMenu,
} from "react-icons/fi";
import { BsEmojiSmile } from "react-icons/bs";
import { HiOutlineUserAdd } from "react-icons/hi";

const stories = [
  { name: "Rakesh Sharma", role: "Front-end Developer" },
  { name: "Rakesh Sharma", role: "Front-end Developer" },
  { name: "Rakesh Sharma", role: "Front-end Developer" },
];

const posts = [
  {
    id: 1,
    author: "Pan Feng Shui",
    time: "12 April at 09:28 PM",
    content: (
      <>
        Had an amazing interaction with the founder of{" "}
        <strong>ABC Company</strong>, sharing my experience through this small
        article
      </>
    ),
    hasImage: true,
    likes: 3,
    emojis: 8,
    comments: 25,
    shares: 231,
    saved: 24,
  },
  {
    id: 2,
    author: "Clara Kim",
    time: "12 April at 09:28 PM",
    content: "A Great Way To Generate All The Motivation You Need To Get Fit.",
    hasImage: false,
    likes: 3,
    emojis: 8,
    comments: 25,
    shares: 231,
    saved: 24,
  },
];

export default function Dashboard() {
  const [commentText, setCommentText] = useState<Record<number, string>>({});
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
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

      {/* Body */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-8xl px-6 py-6 lg:flex flex-row gap-5">
          {/* Left Column */}
          <div className="hidden lg:block w-80 shrink-0 space-y-4">
            {/* Profile Card */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-linear-to-br from-purple-300 to-pink-300 overflow-hidden mb-3 ring-4 ring-white shadow-md">
                  <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
                    <Image
                      width={80}
                      height={80}
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                      alt="profile"
                    />
                  </div>
                </div>
                <h2 className="text-blue-600 font-semibold text-lg">
                  Minnie Armstrong
                </h2>
                <p className="text-gray-500 text-sm mt-0.5">UI / UX Designer</p>
                <div className="w-full mt-8">
                  <div className="w-full h-1.5 bg-gray-100 rounded-full">
                    <div className="w-3/4 h-full bg-green-500 rounded-full" />
                  </div>

                  <div className="flex justify-between text-xs text-gray-500 mt-4">
                    <span>75% Completed</span>
                    <button className="text-blue-500 flex items-center gap-1 underline">
                      <FiEdit3 size={11} /> Update profile
                    </button>
                  </div>
                </div>

                <div className="flex gap-2 mt-6 w-full">
                  <button className="flex-1 border border-blue-500 text-blue-600 text-xs py-4 rounded-xl hover:bg-blue-50 transition-colors">
                    View Full Profile
                  </button>
                  <button className="flex-1 border border-blue-500 text-blue-600 text-xs py-4 rounded-xl hover:bg-blue-50 transition-colors">
                    Share Profile
                  </button>
                </div>
              </div>
            </div>

            {/* Analytics Card */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-700 mb-1">
                Analytics
              </h3>
              <p className="text-xs text-gray-400 mb-3">
                Connections <span className="ml-2 text-blue-500">1w 1m 3m</span>
              </p>

              {/* Simple SVG Chart */}
              <div className="relative h-45 bg-gray-50">
                <svg
                  viewBox="0 0 220 90"
                  className="w-full h-full"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#818cf8" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="grad2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#34d399" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <polyline
                    points="0,70 40,55 80,65 120,40 160,50 220,30"
                    fill="none"
                    stroke="#818cf8"
                    strokeWidth="2"
                  />
                  <polyline
                    points="0,80 40,70 80,50 120,60 160,35 220,45"
                    fill="none"
                    stroke="#34d399"
                    strokeWidth="2"
                  />
                </svg>
                <div className="absolute inset-0 z-99 flex items-center justify-center pointer-events-none">
                  <div className="bg-blue-600 text-white text-sm px-3 py-2 rounded-full flex items-center gap-1 shadow-lg">
                    <FiBarChart2 size={12} />
                    Analytics
                  </div>
                </div>
              </div>
              <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                <span>Sept</span>
                <span>Oct</span>
                <span className="text-blue-500 font-medium">Nov</span>
              </div>
            </div>

            {/* Sosmed Stories */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-semibold text-gray-700">
                  Sosmed Stories
                </h3>
                <button className="text-gray-400">
                  <FiMoreHorizontal size={16} />
                </button>
              </div>
              <hr className="text-gray-100" />

              <div className="space-y-4 mt-4">
                {stories.map((story, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-linear-to-br from-amber-300 to-orange-400 flex items-center justify-center text-white text-sm font-bold shrink-0 overflow-hidden">
                        <Image
                          width={32}
                          height={32}
                          src="https://images.unsplash.com/photo-1640951613773-54706e06851d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">
                          {story.name}
                        </p>
                        <p className="text-xs text-gray-400">{story.role}</p>
                      </div>
                    </div>
                    <hr className="text-gray-100" />
                    <div className="flex gap-2 mt-2 ">
                      <button className="flex-1 bg-blue-50 text-blue-600 text-xs py-3 rounded-full flex items-center justify-center gap-1.5 hover:bg-blue-100 transition-colors">
                        <HiOutlineUserAdd size={13} /> Follow
                      </button>
                      <button className="flex-1 bg-gray-50 text-gray-600 text-xs py-3 rounded-full flex items-center justify-center gap-1.5 hover:bg-gray-100 transition-colors">
                        <FiMessageSquare size={13} /> Message
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center Column - Feed */}
          <div className="flex-1 space-y-4 min-w-0">
            {/* Create Post */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-sm font-semibold text-gray-700 mb-3">
                Create a Post
              </p>
              <hr className="text-gray-100" />
              <div className="flex items-center gap-3 mt-5">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-300 to-pink-300 flex items-center justify-center text-white text-sm font-bold shrink-0 overflow-hidden">
                  <Image
                    width={32}
                    height={32}
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 bg-[#F4F6FB] rounded-lg px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-gray-200 transition-colors">
                  <span className="text-sm text-gray-400">
                    What&apos;s on your mind?
                  </span>
                  <FiSend size={20} className="text-gray-400" />
                </div>
              </div>
            </div>

            {/* Posts */}
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl p-5 shadow-sm">
                {/* Post Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-teal-300 to-cyan-400 flex items-center justify-center text-white text-sm font-bold shrink-0 overflow-hidden">
                      <Image
                        width={32}
                        height={32}
                        src="https://images.unsplash.com/photo-1640951613773-54706e06851d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        {post.author}
                      </p>
                      <p className="text-xs text-gray-400">{post.time}</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <FiMoreHorizontal size={18} />
                  </button>
                </div>

                {/* Post Content */}
                <p className="text-sm text-gray-700 mb-3">{post.content}</p>

                {/* Post Image */}
                {post.hasImage && (
                  <div className="h-100 rounded-xl overflow-hidden mb-3 bg-gray-100 flex items-center justify-center">
                    <Image
                      width={800}
                      height={400}
                      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
                      className="h-full w-full object-cover"
                      alt="post content"
                    />
                  </div>
                )}

                {/* Reactions */}
                {/* Reactions */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-4 border-y border-gray-100 mb-3">
                  {/* Left Side */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-blue-500 transition-colors">
                      <FiThumbsUp size={18} /> {post.likes}
                    </button>

                    <button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-yellow-500 transition-colors">
                      <BsEmojiSmile size={18} /> {post.emojis}
                    </button>

                    <button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-green-500 transition-colors">
                      <FiSmile size={18} />
                    </button>
                  </div>

                  {/* Right Side */}
                  <div className="flex items-center gap-3 flex-wrap sm:justify-end">
                    <button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-blue-500 transition-colors">
                      <FiMessageSquare size={18} /> {post.comments} Comments
                    </button>

                    <button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-green-500 transition-colors">
                      <FiShare2 size={18} /> {post.shares} Shares
                    </button>

                    <button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-purple-500 transition-colors">
                      <FiBookmark size={18} /> {post.saved} Saved
                    </button>
                  </div>
                </div>
                {/* Comment Box */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-300 to-pink-300 flex items-center justify-center text-white text-xs font-bold shrink-0 overflow-hidden">
                    <Image
                      width={32}
                      height={32}
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 bg-[#F4F6FB] rounded-lg px-4 py-3 flex items-center justify-between">
                    <input
                      type="text"
                      placeholder="Write your comment..."
                      className="bg-transparent text-sm text-gray-500 outline-none flex-1"
                      value={commentText[post.id] || ""}
                      onChange={(e) =>
                        setCommentText((prev) => ({
                          ...prev,
                          [post.id]: e.target.value,
                        }))
                      }
                    />
                    <div className="flex items-center gap-3 text-gray-400">
                      <FiPaperclip
                        size={20}
                        className="cursor-pointer hover:text-blue-500"
                      />
                      <BsEmojiSmile
                        size={20}
                        className="cursor-pointer hover:text-yellow-500"
                      />
                      <FiImage
                        size={20}
                        className="cursor-pointer hover:text-green-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="w-90 shrink-0 space-y-4 mt-5">
            {/* Hire Banner */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <h3 className="font-bold text-gray-800 text-lg">
                Hire faster with SyncUp!
              </h3>
              <p className="text-xs text-gray-500 mt-1 mb-3">
                Network without limits and hire like a pro!
              </p>
              <div className="relative rounded-xl overflow-hidden h-50 bg-linear-to-br from-blue-200 to-cyan-200 flex items-center justify-center">
                <Image
                  width={400}
                  height={200}
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80"
                  className="h-full w-full object-cover"
                  alt="ad"
                />

                <div className="absolute top-2 right-2 bg-white text-black text-xs font-light px-2 py-1 rounded-sm">
                  30% OFF
                </div>
              </div>
            </div>

            {/* Suggestions */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <h3 className="font-bold text-blue-600 text-lg mb-1">
                Suggestions
              </h3>
              <p className="text-xs text-gray-500 mb-3">
                Below courses are suggested based on your current skills &
                curated to help you stay updated with the current market trends.
              </p>

              {/* Course Card */}
              <div className="rounded-xl overflow-hidden bg-linear-to-br from-indigo-200 to-purple-200 h-50 flex items-center justify-center mb-3">
                <Image
                  width={400}
                  height={200}
                  src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=400&q=80"
                  className="h-full w-full object-cover"
                  alt="course"
                />
              </div>

              {/* Course Info */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    Figma: Basics
                  </p>
                  <p className="text-xs text-gray-500">Tyler Hooks</p>
                </div>
                <div className="flex items-center gap-1 text-amber-400">
                  <FiStar size={13} className="fill-amber-400" />
                  <span className="text-xs font-semibold text-gray-700">
                    4.2
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
