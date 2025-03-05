"use client";
import { useState } from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import "../styles/sociomap.css";

export default function SocialEquityPolicyAdvocacyPage() {
  const [selectedPolicyCategory, setSelectedPolicyCategory] = useState("economic-equity");
  const [policySimulatorInput, setPolicySimulatorInput] = useState({
    budget: 1000000,
    targetPopulation: 50000,
  });
  const [simulatorResult, setSimulatorResult] = useState<number | null>(null);

  const policyCategories = [
    { id: "economic-equity", name: "Economic Equity" },
    { id: "public-health", name: "Public Health" },
    { id: "disaster-preparedness", name: "Disaster Preparedness" },
  ];

  const handlePolicyCategoryChange = (category: string) => {
    setSelectedPolicyCategory(category);
  };

  const handleSimulatorInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPolicySimulatorInput((prev) => ({
      ...prev,
      [name]: parseInt(value) || 0,
    }));
  };

  const runPolicySimulator = () => {
    const { budget, targetPopulation } = policySimulatorInput;
    const result = (budget / targetPopulation) * 100; // Simple calculation for demonstration
    setSimulatorResult(result);
  };

  return (
    <div className="text-gray-900 font-sans">
      <Head>
        <title>Social Equity & Policy Advocacy</title>
      </Head>

      {/* Hero Section */}
      <section className="relative h-screen hero-section bg-gradient-to-b from-purple-900 to-pink-600 text-white flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Social Equity & Policy Advocacy
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Empowering communities through equitable climate solutions with SocioMap®.
          </p>
        </div>
      </section>

      {/* Policy Recommendation Center */}
      <section className="py-16 bg-gray-100 transition-all duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Policy Recommendation Center</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <aside className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Categories</h3>
              <ul className="space-y-4">
                {policyCategories.map((category) => (
                  <li
                    key={category.id}
                    onClick={() => handlePolicyCategoryChange(category.id)}
                    className={`p-4 cursor-pointer rounded-lg transition transform hover:scale-105 ${
                      selectedPolicyCategory === category.id
                        ? "bg-purple-600 text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-purple-100"
                    }`}
                  >
                    {category.name}
                  </li>
                ))}
              </ul>
            </aside>

            <div className="w-full md:w-2/3 bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-purple-600">
                {policyCategories.find((cat) => cat.id === selectedPolicyCategory)?.name}
              </h3>
              <p className="text-gray-700">
                {`Detailed policy recommendations for ${
                  policyCategories.find((cat) => cat.id === selectedPolicyCategory)?.name
                } will be displayed here.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Simulator */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-black">Policy Simulator</h2>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4">Model Policy Effects</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-gray-700 w-1/3">Budget ($):</label>
                <input
                  type="number"
                  name="budget"
                  value={policySimulatorInput.budget}
                  onChange={handleSimulatorInputChange}
                  className="w-2/3 p-2 border rounded-lg"
                />
              </div>
              <div className="flex items-center gap-4">
                <label className="text-gray-700 w-1/3">Target Population:</label>
                <input
                  type="number"
                  name="targetPopulation"
                  value={policySimulatorInput.targetPopulation}
                  onChange={handleSimulatorInputChange}
                  className="w-2/3 p-2 border rounded-lg"
                />
              </div>
              <Button
                onClick={runPolicySimulator}
                className="w-full bg-green-600 text-white hover:bg-green-700 mt-4"
              >
                Run Simulation
              </Button>
              {simulatorResult !== null && (
                <p className="text-gray-800 mt-4">
                  Projected Impact: <strong>{simulatorResult.toFixed(2)}%</strong> efficiency.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Community Feedback Hub */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Community Feedback Hub</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-4">Community Voices</h3>
              <p className="text-gray-700 mb-4">
                Share your challenges, insights, and ideas on improving climate resilience in your area.
              </p>
              <Button className="w-full bg-yellow-600 text-white hover:bg-yellow-700">
                Share Your Voice
              </Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-4">Survey & Engagement Tools</h3>
              <p className="text-gray-700 mb-4">
                Participate in surveys to inform decision-makers about your community&apos;s needs.
              </p>
              <Button className="w-full bg-yellow-600 text-white hover:bg-yellow-700">
                Take a Survey
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
