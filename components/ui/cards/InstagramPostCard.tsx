import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  Image as ImageIcon,
} from "lucide-react";
import Card from "../Card";
import NextImage from "next/image";

interface InstagramPostCardProps {
  username?: string;
  location?: string;
  likes?: number;
  caption?: string;
  commentsCount?: number;
  timeAgo?: string;
  imageUrl?: string | null;
}

export default function InstagramPostCard({
  username = "username",
  location = "Location",
  likes = 1234,
  caption = "This is a sample caption for the Instagram post. It can be longer and more descriptive.",
  commentsCount = 42,
  timeAgo = "2 hours ago",
  imageUrl = null,
}: InstagramPostCardProps) {
  return (
    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
      <Card hoverEffect={false}>
        {/* Header */}
        <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200 dark:border-(--border)">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 p-0.5">
              <div className="w-full h-full rounded-full bg-white dark:bg-(--surface) flex items-center justify-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-300 dark:bg-gray-600"></div>
              </div>
            </div>
            <div>
              <p className="font-semibold text-sm sm:text-base text-gray-900 dark:text-(--text-primary)">
                {username}
              </p>
              <p className="text-xs text-gray-500 dark:text-(--text-tertiary)">
                {location}
              </p>
            </div>
          </div>
          <button className="text-gray-700 dark:text-(--text-secondary) font-bold text-lg sm:text-xl hover:text-gray-900 dark:hover:text-(--text-primary) transition-colors">
            ⋯
          </button>
        </div>

        {/* Image Container */}
        <div className="relative aspect-square bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
          {imageUrl ? (
            <NextImage
              src={imageUrl}
              alt="Instagram post"
              fill
              className="object-cover"
            />
          ) : (
            <ImageIcon
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-gray-400 dark:text-gray-600"
              strokeWidth={1.5}
            />
          )}
        </div>

        {/* Action Buttons */}
        <div className="p-3 sm:p-4">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <div className="flex items-center gap-3 sm:gap-4">
              <button className="hover:opacity-70 transition-opacity text-gray-900 dark:text-(--text-primary)">
                <Heart className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
              </button>
              <button className="hover:opacity-70 transition-opacity text-gray-900 dark:text-(--text-primary)">
                <MessageCircle
                  className="w-6 h-6 sm:w-7 sm:h-7"
                  strokeWidth={1.5}
                />
              </button>
              <button className="hover:opacity-70 transition-opacity text-gray-900 dark:text-(--text-primary)">
                <Send className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
              </button>
            </div>
            <button className="hover:opacity-70 transition-opacity text-gray-900 dark:text-(--text-primary)">
              <Bookmark className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
            </button>
          </div>

          {/* Likes */}
          <p className="font-semibold text-xs sm:text-sm mb-1 sm:mb-2 text-gray-900 dark:text-(--text-primary)">
            {likes.toLocaleString()} likes
          </p>

          {/* Caption */}
          <div className="text-xs sm:text-sm">
            <p>
              <span className="font-semibold mr-2 text-gray-900 dark:text-(--text-primary)">
                {username}
              </span>
              <span className="text-gray-700 dark:text-(--text-secondary)">
                {caption}
              </span>
            </p>
          </div>

          {/* View Comments */}
          <button className="text-gray-400 dark:text-(--text-tertiary) text-xs sm:text-sm mt-1 sm:mt-2 hover:text-gray-600 dark:hover:text-(--text-secondary) transition-colors">
            View all {commentsCount} comments
          </button>

          {/* Time */}
          <p className="text-gray-400 dark:text-(--text-tertiary) text-xs mt-1 sm:mt-2 uppercase">
            {timeAgo}
          </p>
        </div>

        {/* Comment Input */}
        <div className="border-t border-gray-200 dark:border-(--border) p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
          <button className="text-2xl sm:text-3xl">😊</button>
          <input
            type="text"
            placeholder="Add a comment..."
            className="flex-1 outline-none text-xs sm:text-sm bg-transparent text-gray-900 dark:text-(--text-primary) placeholder-gray-400 dark:placeholder-(--text-tertiary)"
          />
          <button className="text-blue-500 dark:text-blue-400 font-semibold text-xs sm:text-sm hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
            Post
          </button>
        </div>
      </Card>
    </div>
  );
}
