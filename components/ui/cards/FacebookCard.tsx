import React, { useState } from "react";
import Card from "../Card";

interface FacebookCardProps {
  username?: string;
  postTime?: string;
  postContent?: string;
  likes?: number;
  comments?: number;
  shares?: number;
  imageUrl?: string | null;
}

// Main FacebookCard Component
const FacebookCard = ({
  username = "Username",
  postTime = "Just now",
  postContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  likes = 1200,
  comments = 124,
  shares = 89,
  imageUrl = null,
}: FacebookCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [commentText, setCommentText] = useState("");

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      console.log("Comment submitted:", commentText);
      setCommentText("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommentSubmit();
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Card hoverEffect={false}>
        {/* Card Header */}
        <div className="p-4 border-b border-gray-200 dark:border-[var(--border)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-[var(--text-primary)] text-sm sm:text-base">
                  {username}
                </h3>
                <p className="text-xs text-gray-500 dark:text-[var(--text-tertiary)]">
                  {postTime}
                </p>
              </div>
            </div>
            <button className="text-gray-600 dark:text-[var(--text-secondary)] hover:bg-gray-100 dark:hover:bg-[var(--surface-secondary)] rounded-full p-2 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="4" r="1.5" />
                <circle cx="10" cy="10" r="1.5" />
                <circle cx="10" cy="16" r="1.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Post Content */}
        <div className="p-4">
          <p className="text-gray-800 dark:text-[var(--text-primary)] text-sm sm:text-base mb-3">
            {postContent}
          </p>
        </div>

        {/* Image Section */}
        <div className="bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 aspect-video flex items-center justify-center">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Post"
              className="w-full h-full object-cover"
            />
          ) : (
            <svg
              className="w-24 h-24 sm:w-32 sm:h-32 text-gray-400 dark:text-gray-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
            </svg>
          )}
        </div>

        {/* Reaction Stats */}
        <div className="px-4 py-3 flex items-center justify-between text-sm border-b border-gray-200 dark:border-[var(--border)]">
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-1">
              <div className="w-5 h-5 rounded-full bg-blue-500 border-2 border-white dark:border-[var(--surface)] flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
              </div>
              <div className="w-5 h-5 rounded-full bg-red-500 border-2 border-white dark:border-[var(--surface)] flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
              </div>
            </div>
            <span className="text-gray-600 dark:text-[var(--text-secondary)] text-xs sm:text-sm">
              {likeCount > 999
                ? `${(likeCount / 1000).toFixed(1)}K`
                : likeCount}
            </span>
          </div>
          <div className="flex items-center space-x-3 text-gray-600 dark:text-[var(--text-secondary)] text-xs sm:text-sm">
            <span>{comments} Comments</span>
            <span>{shares} Shares</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-2 py-2 flex items-center justify-around border-b border-gray-200 dark:border-[var(--border)]">
          <button
            onClick={handleLike}
            className={`flex items-center justify-center space-x-2 hover:bg-gray-100 dark:hover:bg-[var(--surface-secondary)] rounded-lg px-3 py-2 sm:px-4 transition-colors flex-1 ${
              isLiked
                ? "text-blue-600"
                : "text-gray-700 dark:text-[var(--text-secondary)]"
            }`}
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill={isLiked ? "currentColor" : "none"}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              />
            </svg>
            <span className="font-medium text-xs sm:text-sm">Like</span>
          </button>

          <button className="flex items-center justify-center space-x-2 hover:bg-gray-100 dark:hover:bg-[var(--surface-secondary)] rounded-lg px-3 py-2 sm:px-4 transition-colors flex-1 text-gray-700 dark:text-[var(--text-secondary)]">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span className="font-medium text-xs sm:text-sm">Comment</span>
          </button>

          <button className="flex items-center justify-center space-x-2 hover:bg-gray-100 dark:hover:bg-[var(--surface-secondary)] rounded-lg px-3 py-2 sm:px-4 transition-colors flex-1 text-gray-700 dark:text-[var(--text-secondary)]">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
            <span className="font-medium text-xs sm:text-sm">Share</span>
          </button>
        </div>

        {/* Comment Section */}
        <div className="p-4">
          <div className="flex items-start space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex-shrink-0"></div>
            <div className="flex-1">
              <input
                type="text"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Write a comment..."
                className="w-full bg-gray-100 dark:bg-[var(--input-bg)] dark:text-[var(--text-primary)] rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FacebookCard;
