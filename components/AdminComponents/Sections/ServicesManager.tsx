"use client";
import React, { useState, useEffect } from "react";
import { FiSave, FiGrid, FiPlus, FiTrash2, FiEdit2 } from "react-icons/fi";

interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export default function ServicesManager() {
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState<Service[]>([
    {
      id: "1",
      name: "SEO Optimization",
      description: "Boost your search rankings",
      icon: "FiTrendingUp",
    },
    {
      id: "2",
      name: "Social Media",
      description: "Engage with your audience",
      icon: "FiSmartphone",
    },
    {
      id: "3",
      name: "Content Marketing",
      description: "Create compelling content",
      icon: "FiFileText",
    },
  ]);

  useEffect(() => {
    const saved = localStorage.getItem("services_data");
    if (saved) {
      setServices(JSON.parse(saved));
    }
  }, []);

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem("services_data", JSON.stringify(services));
      setLoading(false);
      alert("Services updated successfully!");
    }, 800);
  };

  const handleAddService = () => {
    const newService: Service = {
      id: Date.now().toString(),
      name: "New Service",
      description: "Service description goes here",
      icon: "FiActivity",
    };
    setServices([...services, newService]);
  };

  const handleRemoveService = (id: string) => {
    if (confirm("Are you sure you want to remove this service?")) {
      setServices(services.filter((s) => s.id !== id));
    }
  };

  const updateService = (id: string, field: keyof Service, value: string) => {
    setServices(
      services.map((s) => (s.id === id ? { ...s, [field]: value } : s))
    );
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <FiGrid className="text-purple-500" />
            Services Management
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Manage your service offerings ({services.length} active).
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleAddService}
            className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <FiPlus />
            Add Service
          </button>
          <button
            onClick={handleSave}
            disabled={loading}
            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 font-medium"
          >
            <FiSave />
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 group hover:border-blue-500 transition-colors relative"
          >
            <button
              onClick={() => handleRemoveService(service.id)}
              className="absolute top-4 right-4 text-red-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-red-50 dark:bg-red-900/20 rounded-lg"
              title="Remove Service"
            >
              <FiTrash2 />
            </button>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1 block">
                  Service Name
                </label>
                <input
                  type="text"
                  value={service.name}
                  onChange={(e) =>
                    updateService(service.id, "name", e.target.value)
                  }
                  className="w-full bg-transparent text-lg font-bold border-b border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1 block">
                  Description
                </label>
                <textarea
                  value={service.description}
                  onChange={(e) =>
                    updateService(service.id, "description", e.target.value)
                  }
                  rows={2}
                  className="w-full bg-transparent text-gray-600 dark:text-gray-300 text-sm border-b border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1 block">
                  Icon Name (React Icons)
                </label>
                <input
                  type="text"
                  value={service.icon}
                  onChange={(e) =>
                    updateService(service.id, "icon", e.target.value)
                  }
                  className="w-full bg-gray-50 dark:bg-gray-900 px-3 py-2 rounded-lg text-sm font-mono text-gray-500"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
