import React from "react";
import { Heart, MessageCircle, Send, Bookmark, Image } from "lucide-react";

export default function InstagramPostCard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-yellow-400 flex items-center justify-center p-4">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
        {/* Card Container */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-0.5">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-300"></div>
                </div>
              </div>
              <div>
                <p className="font-semibold text-sm sm:text-base">username</p>
                <p className="text-xs text-gray-500">Location</p>
              </div>
            </div>
            <button className="text-gray-700 font-bold text-lg sm:text-xl">
              ⋯
            </button>
          </div>

          {/* Image Container */}
          <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <Image
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-gray-400"
              strokeWidth={1.5}
            />
          </div>

          {/* Action Buttons */}
          <div className="p-3 sm:p-4">
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <div className="flex items-center gap-3 sm:gap-4">
                <button className="hover:opacity-70 transition-opacity">
                  <Heart className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
                </button>
                <button className="hover:opacity-70 transition-opacity">
                  <MessageCircle
                    className="w-6 h-6 sm:w-7 sm:h-7"
                    strokeWidth={1.5}
                  />
                </button>
                <button className="hover:opacity-70 transition-opacity">
                  <Send className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
                </button>
              </div>
              <button className="hover:opacity-70 transition-opacity">
                <Bookmark className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
              </button>
            </div>

            {/* Likes */}
            <p className="font-semibold text-xs sm:text-sm mb-1 sm:mb-2">
              1,234 likes
            </p>

            {/* Caption */}
            <div className="text-xs sm:text-sm">
              <p>
                <span className="font-semibold mr-2">username</span>
                <span className="text-gray-700">
                  This is a sample caption for the Instagram post. It can be
                  longer and more descriptive.
                </span>
              </p>
            </div>

            {/* View Comments */}
            <button className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2 hover:text-gray-600">
              View all 42 comments
            </button>

            {/* Time */}
            <p className="text-gray-400 text-xs mt-1 sm:mt-2 uppercase">
              2 hours ago
            </p>
          </div>

          {/* Comment Input */}
          <div className="border-t border-gray-200 p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
            <button className="text-2xl sm:text-3xl">😊</button>
            <input
              type="text"
              placeholder="Add a comment..."
              className="flex-1 outline-none text-xs sm:text-sm"
            />
            <button className="text-blue-500 font-semibold text-xs sm:text-sm hover:text-blue-600">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
