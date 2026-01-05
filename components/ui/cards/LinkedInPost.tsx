import React, { useState } from "react";
import {
  ThumbsUp,
  MessageCircle,
  Repeat2,
  Send,
  MoreHorizontal,
  Globe,
} from "lucide-react";

export default function LinkedInPost() {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(325);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 via-gray-100 to-stone-200 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 md:p-6">
          <div className="flex items-start justify-between">
            <div className="flex gap-3 sm:gap-4">
              {/* LinkedIn Logo */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>

              {/* Post Info */}
              <div className="flex-1 min-w-0">
                <h2 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 truncate">
                  LinkedIn Page Post Mockup 2024
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                  17,474 followers
                </p>
                <div className="flex items-center gap-1.5 sm:gap-2 mt-1 text-xs text-gray-500">
                  <span>2d</span>
                  <span>•</span>
                  <span>Edited</span>
                  <span>•</span>
                  <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
              </div>
            </div>

            {/* More Button */}
            <button className="text-gray-500 hover:bg-gray-100 rounded-full p-2 transition-colors flex-shrink-0">
              <MoreHorizontal className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Post Text */}
          <div className="mt-4 text-sm sm:text-base text-gray-800 leading-relaxed">
            <p>
              If you've been looking for{" "}
              <span className="text-blue-600 font-medium hover:underline cursor-pointer">
                #freemockups
              </span>{" "}
              then you need to visit goodmockups website and download the one
              you like the most. We have{" "}
              <span className="text-blue-600 font-medium hover:underline cursor-pointer">
                #thebest
              </span>{" "}
              collection!
            </p>
          </div>
        </div>

        {/* LinkedIn Image */}
        <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 aspect-video flex items-center justify-center">
          <div className="text-center">
            <div className="inline-flex items-center gap-1 sm:gap-2">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                Linked
              </span>
              <div className="bg-white rounded px-2 py-1 sm:px-2.5 sm:py-1.5 flex items-center justify-center">
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-600">
                  in
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Link Preview */}
        <div className="bg-gray-50 border-t border-gray-200 p-4 sm:p-5">
          <h3 className="text-sm sm:text-base font-semibold text-gray-900">
            Created and prepared by goodmockups.com
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            goodmockups.com • 1 min read
          </p>
        </div>

        {/* Reactions Bar */}
        <div className="px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 border-t border-gray-200">
          <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600">
            <div className="flex items-center gap-2">
              {/* Reaction Icons */}
              <div className="flex items-center -space-x-1">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                  <ThumbsUp className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white fill-white" />
                </div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center text-xs">
                  👏
                </div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-xs">
                  ❤️
                </div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-amber-400 rounded-full border-2 border-white flex items-center justify-center text-xs">
                  💡
                </div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center text-xs">
                  😊
                </div>
              </div>
              <span className="font-medium">{likeCount}</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="hover:underline cursor-pointer hover:text-blue-600 transition-colors">
                103 comments
              </span>
              <span className="hover:underline cursor-pointer hover:text-blue-600 transition-colors">
                34 reposts
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-2 sm:px-3 md:px-4 py-2 border-t border-gray-200">
          <div className="grid grid-cols-4 gap-1 sm:gap-2">
            <button
              onClick={handleLike}
              className={`flex flex-col items-center justify-center py-2.5 sm:py-3 rounded-lg transition-all hover:bg-gray-100 ${
                liked ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <ThumbsUp
                className={`w-5 h-5 sm:w-6 sm:h-6 mb-1 ${
                  liked ? "fill-blue-600" : ""
                }`}
              />
              <span className="text-xs sm:text-sm font-medium">Like</span>
            </button>

            <button className="flex flex-col items-center justify-center py-2.5 sm:py-3 rounded-lg text-gray-600 transition-all hover:bg-gray-100">
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mb-1" />
              <span className="text-xs sm:text-sm font-medium">Comment</span>
            </button>

            <button className="flex flex-col items-center justify-center py-2.5 sm:py-3 rounded-lg text-gray-600 transition-all hover:bg-gray-100">
              <Repeat2 className="w-5 h-5 sm:w-6 sm:h-6 mb-1" />
              <span className="text-xs sm:text-sm font-medium">Repost</span>
            </button>

            <button className="flex flex-col items-center justify-center py-2.5 sm:py-3 rounded-lg text-gray-600 transition-all hover:bg-gray-100">
              <Send className="w-5 h-5 sm:w-6 sm:h-6 mb-1" />
              <span className="text-xs sm:text-sm font-medium">Send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
