import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  History,
  Upload,
  Globe,
  Clock,
  PieChart,
  Calendar,
} from "lucide-react";
import Chrome from "../assets/Chromium.svg";
import Edge from "../assets/Edge.svg";
import Firefox from "../assets/Firefox.svg";
import edge from "../assets/edge.png";
import chromeEx from "../assets/chromeEx.png";
import firefoxEx from "../assets/firefoxEx.png";

interface LandingPageProps {
  onFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onFileUpload }) => {
  const [allowPredictions, setAllowPredictions] = useState(true);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      localStorage.setItem('allowPredictions', allowPredictions.toString());
      onFileUpload(event);
    }
  };

  const exportHelp = [
    {
      icon: Chrome,
      title: "Chromium",
      image: chromeEx,
      description:
        "Use this extension to export your browser history in CSV format on Chrome, Brave, Opera, and other Chromium-based browsers.",
      link: "https://chromewebstore.google.com/detail/export-chrome-history/dihloblpkeiddiaojbagoecedbfpifdj",
    },
    {
      icon: Firefox,
      title: "Mozilla Firefox",
      image: firefoxEx,
      description:
        "Firefox users, use the History Exporter by Web Wrapped in Firefox-Addons.",
      link: "https://addons.mozilla.org/en-US/firefox/addon/history-exporter-web-wrapped/",
    },
    {
      icon: Edge,
      title: "Microsoft Edge",
      image: edge,
      description:
        "Go to History or press CTRL+H > Click three dots > Click Export browsing data, then upload.",
    },
  ];

  const features = [
    {
      icon: Globe,
      title: "Website Analytics",
      description: "Discover your most visited websites and browsing patterns",
    },
    {
      icon: Clock,
      title: "Time Insights",
      description: "Understand your daily browsing rhythms and peak hours",
    },
    {
      icon: PieChart,
      title: "Category Breakdown",
      description: "See how you spend time across different website categories",
    },
    {
      icon: Calendar,
      title: "Yearly Overview",
      description: "Visualize your browsing habits throughout the year",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <History className="w-20 h-20 mx-auto mb-6 text-white/90" />
            <h1 className="text-5xl font-bold mb-4">Your Browser Story</h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Transform your browsing history into beautiful insights. Upload
              your history file and discover your digital journey.
            </p>

            <div className="flex flex-col items-center gap-4">
              <label className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-full cursor-pointer hover:bg-white/90 transition-colors font-medium shadow-lg hover:shadow-xl">
                <Upload className="w-5 h-5 mr-2" />
                Choose History File
                <input
                  type="file"
                  accept=".csv,.txt"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>

              <label className="flex items-center gap-2 text-white/90 cursor-pointer">
                <input
                  type="checkbox"
                  checked={allowPredictions}
                  onChange={(e) => setAllowPredictions(e.target.checked)}
                  className="w-4 h-4 rounded border-white/30 bg-white/20 checked:bg-indigo-500 focus:ring-indigo-500 focus:ring-offset-0"
                />
                Let me guess my most visited websites
              </label>

              <div>
                <p className="text-sm text-white/70">
                  Your privacy matters! All processing happens locally in your
                  browser.
                </p>
                <p className="text-sm text-white/70">
                  No data is ever uploaded or stored on any server.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Export Help Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8">
              How to Export Your History?
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {exportHelp.map((browser, index) => (
              <motion.div
                key={browser.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 flex flex-col h-full"
              >
                <div className="flex gap-4 items-center mb-4">
                  <img
                    src={browser.icon}
                    className="size-10"
                    alt={browser.title}
                  />
                  <h3 className="text-xl font-semibold">{browser.title}</h3>
                </div>
                <div className="flex-grow flex flex-col">
                  <img
                    src={browser.image}
                    alt={`${browser.title} export instructions`}
                    className="w-full h-48 object-cover mb-2 rounded-lg"
                  />
                  <p className="text-white/70 mb-4 flex-grow">
                    {browser.description}
                  </p>
                  {browser.link && (
                    <a
                      href={browser.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-600 rounded-full font-medium transition-colors hover:bg-white/90 shadow-lg hover:shadow-xl"
                    >
                      Get Extension
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">
            Discover Your Browsing Patterns
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/15 transition-colors"
              >
                <feature.icon className="w-10 h-10 mb-4 text-white/90" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center text-white/60 text-sm"
        >
          <p className="m-5">Web Wrapped.</p>
        </motion.div>
      </div>
    </div>
  );
};