import { useState } from "react";

const PRICING = {
  design: {
    web: 5000,
    app: 7000,
    both: 10000,
  },
  development: {
    web: 8000,
    app: 40000,
    rapidExtra: 3000,
  },
};

export default function QuoteFlow() {
  const [service, setService] = useState<"design" | "development" | null>(null);
  const [designType, setDesignType] = useState<"web" | "app" | "both" | null>(null);
  const [devType, setDevType] = useState<"web" | "app" | null>(null);
  const [devModel, setDevModel] = useState<"rapid" | "spiral" | "agile" | null>(null);

  let total = 0;

  if (service === "design" && designType) {
    total = PRICING.design[designType];
  }

  if (service === "development" && devType) {
    total = PRICING.development[devType];

    if (devModel === "rapid") {
      total += PRICING.development.rapidExtra;
    }
  }

  const whatsappMessage = encodeURIComponent(
`Hello Vaibhav,

I would like to request a project quotation. Below are my selections:

Service: ${service ? service.toUpperCase() : "-"}
${service === "design" ? `Design Type: ${designType}` : ""}
${service === "development" ? `Development Platform: ${devType}` : ""}
${service === "development" && devModel ? `Development Model: ${devModel}` : ""}

Estimated Project Cost: ₹${total}

Please let me know the next steps to proceed.

Thank you.`
  );

  const buttonStyle =
    "w-full py-3 rounded-xl border transition-all duration-200 text-sm font-medium";
  const activeStyle = "bg-cyan-500 text-white border-cyan-500 shadow-md";
  const inactiveStyle = "bg-white hover:bg-gray-100";

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 transition-all duration-300">

        <h3 className="text-3xl font-bold text-center mb-10">
          Instant Project Quote
        </h3>

        {/* Step 1: Service */}
        <div className="mb-10">
          <p className="text-sm font-semibold mb-4">1. Choose Service</p>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => {
                setService("design");
                setDesignType(null);
                setDevType(null);
                setDevModel(null);
              }}
              className={`${buttonStyle} ${
                service === "design" ? activeStyle : inactiveStyle
              }`}
            >
              Design
            </button>

            <button
              onClick={() => {
                setService("development");
                setDesignType(null);
                setDevType(null);
                setDevModel(null);
              }}
              className={`${buttonStyle} ${
                service === "development" ? activeStyle : inactiveStyle
              }`}
            >
              Development
            </button>
          </div>
        </div>

        {/* Design Options */}
        {service === "design" && (
          <div className="mb-10 animate-fadeIn">
            <p className="text-sm font-semibold mb-4">2. Design Type</p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { key: "web", label: "Web", price: 5000 },
                { key: "app", label: "App", price: 7000 },
                { key: "both", label: "Web + App", price: 10000 },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setDesignType(item.key as any)}
                  className={`${buttonStyle} ${
                    designType === item.key
                      ? activeStyle
                      : inactiveStyle
                  }`}
                >
                  {item.label}
                  <div className="text-xs mt-1">₹{item.price}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Development Options */}
        {service === "development" && (
          <div className="mb-10 animate-fadeIn">
            <p className="text-sm font-semibold mb-4">2. Platform</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { key: "web", label: "Web", price: 8000 },
                { key: "app", label: "App", price: 40000 },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setDevType(item.key as any)}
                  className={`${buttonStyle} ${
                    devType === item.key
                      ? activeStyle
                      : inactiveStyle
                  }`}
                >
                  {item.label}
                  <div className="text-xs mt-1">₹{item.price}</div>
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Design not included
            </p>
          </div>
        )}

        {/* Development Model */}
        {service === "development" && devType && (
          <div className="mb-10 animate-fadeIn">
            <p className="text-sm font-semibold mb-4">
              3. Development Model
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { key: "rapid", label: "Rapid", price: "+₹3000" },
                { key: "spiral", label: "Spiral", price: "Included" },
                { key: "agile", label: "Agile", price: "Included" },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setDevModel(item.key as any)}
                  className={`${buttonStyle} ${
                    devModel === item.key
                      ? activeStyle
                      : inactiveStyle
                  }`}
                >
                  {item.label}
                  <div className="text-xs mt-1">{item.price}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Final Quote */}
        {total > 0 && (
          <div
