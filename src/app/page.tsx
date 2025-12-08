"use client"
import Link from 'next/link';
import React from 'react'

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
    <h3 className="text-xl text-black font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HowItWorksStep: React.FC<{ stepNumber: number; title: string; description: string }> = ({
  stepNumber,
  title,
  description,
}) => (
  <div className="flex flex-col items-start p-4">
    <div className="text-2xl font-bold text-blue-600 mb-2">{stepNumber}</div>
    <h4 className="font-semibold text-black text-lg mb-1">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function Home(){
  return (
 <div className="bg-gray-50 min-h-screen">
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Automate Your GitHub Code Reviews with AI
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Save time, improve code quality, and get actionable feedback instantly on every pull request.
          Let AI help your team catch bugs, enforce best practices, and optimize workflows.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/login">
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition">
            Connect GitHub
          </button>
          </Link>
          <button className="bg-blue-500 text-white font-semibold px-6 py-3 rounded hover:bg-blue-400 transition">
            Explore Dashboard
          </button>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl text-black font-bold text-center mb-12">How It Works</h2>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Once connected, our AI engine analyzes each pull request in real-time. It highlights potential issues,
          suggests refactors, and ensures your team’s code stays consistent and secure—without adding extra manual work.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <HowItWorksStep
            stepNumber={1}
            title="Connect Your Repositories"
            description="Securely integrate your GitHub repos with OAuth."
          />
          <HowItWorksStep
            stepNumber={2}
            title="Automated PR Analysis"
            description="AI scans every pull request to detect code smells, security risks, and improvement suggestions."
          />
          <HowItWorksStep
            stepNumber={3}
            title="Real-Time Feedback"
            description="Developers get actionable reviews directly in the dashboard or GitHub comments."
          />
          <HowItWorksStep
            stepNumber={4}
            title="Track Progress & Metrics"
            description="Monitor review history, code quality trends, and repository insights."
          />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-black mb-12">Features & Benefits</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            title="AI-Powered Code Reviews"
            description="Detect bugs, security risks, and maintain coding standards automatically."
          />
          <FeatureCard
            title="Seamless GitHub Integration"
            description="Works with your existing workflows, supporting multi-repository projects."
          />
          <FeatureCard
            title="Interactive Dashboard"
            description="Visualize PR metrics, review history, and team performance."
          />
          <FeatureCard
            title="Secure & Reliable"
            description="OAuth and installation-scoped tokens ensure safe access to your repositories."
          />
          <FeatureCard
            title="Boost Productivity"
            description="Reduce manual code review cycles by up to 40%."
          />
        </div>
      </section>

      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl colot-black font-bold text-black mb-6">Who It's For</h2>
        <p className="text-gray-700 text-lg">
          Whether you’re an engineering manager looking to streamline code reviews, a developer wanting faster feedback, or a team
          aiming to maintain high-quality code, our AI-powered platform adapts to your workflow and scales with your projects.
        </p>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to supercharge your GitHub workflow?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Connect your account and let AI handle the heavy lifting.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded hover:bg-gray-100 transition">
          Connect GitHub
        </button>
      </section>

    </div>
  
  );
};