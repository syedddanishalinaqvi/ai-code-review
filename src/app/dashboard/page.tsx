"use client";
import Loading from "@/components/Loading";
import LogoutButton from "@/components/LogoutButton";
import Repositories from "@/components/Repositories";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

type repo = {
  id: number;
  name: string;
};

type Review = {
  id: number;
  repoName: string;
  commitMessage: string;
  aiReview: string;
  timestamp: string;
  status: "approved" | "changes-needed" | "commented";
};

// Mock data for reviews - replace with actual API call
const mockReviews: Review[] = [
  {
    id: 1,
    repoName: "ai-code-reviews",
    commitMessage: "Added new authentication feature",
    aiReview:
      "✅ Code looks good!\n\n**Strengths:**\n- Clean implementation of OAuth\n- Proper error handling\n- Good TypeScript types\n\n**Suggestions:**\n- Consider adding rate limiting\n- Add unit tests for auth flow",
    timestamp: "2 hours ago",
    status: "approved",
  },
  {
    id: 2,
    repoName: "frontend-app",
    commitMessage: "Fixed responsive layout issues",
    aiReview:
      "⚠️ Changes needed\n\n**Issues Found:**\n- Missing mobile breakpoints for tablet view\n- Accessibility: Add ARIA labels\n\n**Recommendations:**\n- Test on actual devices\n- Use CSS Grid for better layout control",
    timestamp: "5 hours ago",
    status: "changes-needed",
  },
  {
    id: 3,
    repoName: "backend-api",
    commitMessage: "Optimized database queries",
    aiReview:
      "💬 Comments\n\n**Observations:**\n- Good use of indexes\n- Query performance improved by 40%\n\n**Minor Notes:**\n- Consider connection pooling\n- Document the new query patterns",
    timestamp: "1 day ago",
    status: "commented",
  },
];

export default function Dashboard() {
  const { data: session, status } = useSession();
  const [repos, setRepos] = useState<repo[]>([]);
  const [activeTab, setActiveTab] = useState<"repositories" | "reviews">(
    "repositories"
  );
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  const getRepos = async () => {
    await fetch("/api/repositories")
      .then((response) => response.json())
      .then((data: repo[]) => setRepos(data));
  };

  useEffect(() => {
    getRepos();
    // const interval = setInterval(() => {
    //   getRepos();
    // }, 5000);
    // return () => clearInterval(interval);
  }, []);

  if (status === "loading") return <Loading />;
  console.log(session);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }

  const getStatusColor = (status: Review["status"]) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-700 border-green-300";
      case "changes-needed":
        return "bg-orange-100 text-orange-700 border-orange-300";
      case "commented":
        return "bg-blue-100 text-blue-700 border-blue-300";
    }
  };

  const getStatusIcon = (status: Review["status"]) => {
    switch (status) {
      case "approved":
        return "✓";
      case "changes-needed":
        return "⚠";
      case "commented":
        return "💬";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
              AI Code Reviewer
            </h1>
            {session && (
              <div className="flex items-center gap-3 md:gap-4">
                <a
                  href={`https://github.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 rounded-full px-3 md:px-4 py-2 border border-white/20"
                >
                  <Image
                    src={session.user?.image || ""}
                    alt="Avatar"
                    className="w-8 h-8 rounded-full ring-2 ring-white/50"
                    width={32}
                    height={32}
                  />
                  <span className="text-white font-medium hidden sm:block">
                    {session.user?.name || "GitHub"}
                  </span>
                </a>
                <LogoutButton />
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg mb-6 overflow-hidden">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("repositories")}
              className={`flex-1 px-6 py-4 font-semibold text-sm md:text-base transition-all duration-200 ${
                activeTab === "repositories"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              📁 Repositories ({repos.length})
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`flex-1 px-6 py-4 font-semibold text-sm md:text-base transition-all duration-200 ${
                activeTab === "reviews"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              ✨ AI Reviews ({mockReviews.length})
            </button>
          </div>

          <div className="p-6">
            {activeTab === "repositories" ? (
              repos.length > 0 ? (
                <Repositories repos={repos} />
              ) : (
                <div className="text-center py-16 px-4">
                  <div className="mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-12 h-12 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Welcome! Let's Get Started
                    </h3>
                    <p className="text-gray-600 mb-2 max-w-md mx-auto">
                      You haven't installed the AI Code Reviews app yet.
                    </p>
                    <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto">
                      Install our GitHub app to connect your repositories and
                      start receiving AI-powered code reviews on every pull
                      request.
                    </p>
                  </div>
                  <button
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-8 py-4 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-2"
                    onClick={() =>
                      window.open(
                        "https://github.com/apps/ai-code-reviews",
                        "_blank"
                      )
                    }
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Install GitHub App
                  </button>
                  <p className="text-xs text-gray-500 mt-6">
                    Free to install • Takes less than a minute • No credit card
                    required
                  </p>
                </div>
              )
            ) : (
              <div className="space-y-4">
                {mockReviews.length > 0 ? (
                  mockReviews.map((review) => (
                    <div
                      key={review.id}
                      onClick={() => setSelectedReview(review)}
                      className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span
                              className={`text-xs px-3 py-1 rounded-full font-semibold border ${getStatusColor(
                                review.status
                              )}`}
                            >
                              {getStatusIcon(review.status)}{" "}
                              {review.status.replace("-", " ").toUpperCase()}
                            </span>
                            <span className="text-sm text-gray-500">
                              {review.timestamp}
                            </span>
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                            {review.commitMessage}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Repository:{" "}
                            <span className="font-medium text-purple-600">
                              {review.repoName}
                            </span>
                          </p>
                        </div>
                        <div className="text-gray-400 group-hover:text-purple-600 transition-colors">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">✨</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      No Reviews Yet
                    </h3>
                    <p className="text-gray-600">
                      AI reviews will appear here when pull requests are
                      created.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>

      {selectedReview && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    {selectedReview.commitMessage}
                  </h3>
                  <p className="text-purple-100">
                    Repository: {selectedReview.repoName}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedReview(null)}
                  className="text-white hover:bg-white/20 rounded-full p-2 transition-all duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-6 overflow-y-auto max-h-96">
              <div className="prose prose-sm max-w-none">
                <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                  {selectedReview.aiReview}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-6 py-4 flex justify-end gap-3 border-t border-gray-200">
              <button
                onClick={() => setSelectedReview(null)}
                className="px-6 py-2 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300 transition-all duration-200"
              >
                Close
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg">
                View on GitHub
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
