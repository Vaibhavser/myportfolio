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
  let summary = "";

  if (service === "design" && designType) {
    total = PRICING.design[designType];
    summary = `Design: ${designType}`;
  }

  if (service === "development" && devType) {
    total = PRICING.development[devType];
    summary = `Development: ${devType}`;

    if (devModel === "rapid") {
      total += PRICING.development.rapidExtra;
      summary += " + Rapid model";
    } else if (devModel) {
      summary += ` + ${devModel} model`;
    }
  }

  const whatsappMessage = encodeURIComponent(
    `Hello, I want a quotation.\n${summary}\nTotal: ₹${total}`
  );

  return (
    <div className="p-6 rounded-xl shadow-lg bg-white max-w-md">
      <h3 className="text-xl font-semibold mb-4">Get Instant Quote</h3>

      {/* Step 1 */}
      <div className="mb-4">
        <p className="font-medium mb-2">Choose Service</p>
        <div className="flex gap-2">
          <button
            onClick={() => {
              setService("design");
              setDesignType(null);
              setDevType(null);
              setDevModel(null);
            }}
            className="px-4 py-2 bg-cyan-500 text-white rounded"
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
            className="px-4 py-2 bg-gray-800 text-white rounded"
          >
            Development
          </button>
        </div>
      </div>

      {/* Design options */}
      {service === "design" && (
        <div className="mb-4">
          <p className="font-medium mb-2">Design Type</p>
          <div className="flex flex-col gap-2">
            <button onClick={() => setDesignType("web")}>
              Web – ₹5000
            </button>
            <button onClick={() => setDesignType("app")}>
              App – ₹7000
            </button>
            <button onClick={() => setDesignType("both")}>
              Web + App – ₹10000
            </button>
          </div>
        </div>
      )}

      {/* Development options */}
      {service === "development" && (
        <>
          <div className="mb-4">
            <p className="font-medium mb-2">Platform</p>
            <div className="flex flex-col gap-2">
              <button onClick={() => setDevType("web")}>
                Web – ₹8000
              </button>
              <button onClick={() => setDevType("app")}>
                App – ₹40000
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Design not included
            </p>
          </div>

          {devType && (
            <div className="mb-4">
              <p className="font-medium mb-2">Development Model</p>
              <div className="flex flex-col gap-2">
                <button onClick={() => setDevModel("rapid")}>
                  Rapid (+₹3000)
                </button>
                <button onClick={() => setDevModel("spiral")}>
                  Spiral
                </button>
                <button onClick={() => setDevModel("agile")}>
                  Agile
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {/* Final quote */}
      {total > 0 && (
        <div className="mt-4 p-3 bg-gray-100 rounded">
          <p className="font-semibold">Total: ₹{total}</p>
          <a
            href={`https://wa.me/7970174517?text=${whatsappMessage}`}
            target="_blank"
            className="inline-block mt-2 px-4 py-2 bg-green-500 text-white rounded"
          >
            Connect on WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}
