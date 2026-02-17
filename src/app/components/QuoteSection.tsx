import QuoteFlow from "./QuoteFlow";

export default function QuoteSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">
          Get Your Instant Project Quote
        </h2>
        <p className="text-gray-600">
          Select your service and get an estimated price instantly.
        </p>
      </div>

      <div className="flex justify-center">
        <QuoteFlow />
      </div>
    </section>
  );
}
