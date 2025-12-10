"use client"
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20 md:py-32 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20">
            ✨ AI-Powered Code Intelligence
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            Automate Your GitHub<br />
            Code Reviews with AI
          </h1>

          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-blue-100">
            Save time, improve code quality, and get actionable feedback instantly on every pull request.
            Let AI help your team catch bugs, enforce best practices, and optimize workflows.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <Link href="/login">
              <button className="bg-white text-blue-700 font-bold px-8 md:px-10 py-3 md:py-4 rounded-full hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                Connect GitHub
              </button>
            </Link>
            <button className="bg-transparent border-2 border-white text-white font-bold px-8 md:px-10 py-3 md:py-4 rounded-full hover:bg-white/10 transition-all duration-300">
              Explore Dashboard
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-5 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              HOW IT WORKS
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Seamless Integration in 4 Steps
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Once connected, our AI engine analyzes each pull request in real-time. It highlights potential issues,
              suggests refactors, and ensures your team's code stays consistent and secure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Connect Your Repositories</h3>
              <p className="text-gray-600">Securely integrate your GitHub repos with OAuth in just one click.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Automated PR Analysis</h3>
              <p className="text-gray-600">AI scans every pull request to detect code smells, security risks, and improvement suggestions.</p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real-Time Feedback</h3>
              <p className="text-gray-600">Developers get actionable reviews directly in the dashboard or GitHub comments.</p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Track Progress & Metrics</h3>
              <p className="text-gray-600">Monitor review history, code quality trends, and repository insights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-5 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              FEATURES & BENEFITS
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Code Reviews</h3>
              <p className="text-gray-600">Detect bugs, security risks, and maintain coding standards automatically with advanced machine learning.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">🔗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Seamless GitHub Integration</h3>
              <p className="text-gray-600">Works with your existing workflows, supporting multi-repository projects effortlessly.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Interactive Dashboard</h3>
              <p className="text-gray-600">Visualize PR metrics, review history, and team performance with beautiful charts.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Reliable</h3>
              <p className="text-gray-600">OAuth and installation-scoped tokens ensure safe access to your repositories.</p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Boost Productivity</h3>
              <p className="text-gray-600">Reduce manual code review cycles by up to 40% and ship features faster.</p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Suggestions</h3>
              <p className="text-gray-600">Get context-aware recommendations that improve code quality and maintainability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 text-center">
          <div className="inline-block mb-4 px-5 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            WHO IT'S FOR
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Built for Modern Development Teams
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Whether you're an engineering manager looking to streamline code reviews, a developer wanting faster feedback, or a team
            aiming to maintain high-quality code, our AI-powered platform adapts to your workflow and scales with your projects.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl mb-4">👨‍💼</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Engineering Managers</h3>
              <p className="text-gray-600">Streamline workflows and maintain code quality across teams.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl mb-4">👩‍💻</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Developers</h3>
              <p className="text-gray-600">Get instant, actionable feedback on your pull requests.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Startups & Teams</h3>
              <p className="text-gray-600">Scale your development process without compromising quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Ready to Supercharge Your<br />GitHub Workflow?
          </h2>
          <p className="text-lg md:text-xl mb-10 text-blue-100">
            Connect your account and let AI handle the heavy lifting. Start improving your code reviews today.
          </p>
          <Link href="/login">
            <button className="bg-white text-blue-700 font-bold px-12 py-5 rounded-full hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-white/20 hover:scale-105">
              Connect GitHub Now →
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}