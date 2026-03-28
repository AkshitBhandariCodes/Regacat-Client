export default function ValidityFeeSection() {
    return (
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
  
            {/* Validity Section */}
            <div className="p-6 rounded-xl shadow-sm border border-gray-200 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-blue-600 text-3xl">🕒</div>
                <h2 className="text-2xl font-semibold text-blue-700">Validity</h2>
              </div>
  
              <p className="text-gray-600 mb-4">
                The license validity is different for the different categories of the waste:
              </p>
  
              <ul className="list-disc ml-6 space-y-1 text-gray-700">
                <li>Plastic waste – Lifetime</li>
                <li>Electronic waste – 5 years</li>
                <li>Battery waste – 5 years</li>
              </ul>
            </div>
  
            {/* Fee Involved Section */}
            <div className="p-6 rounded-xl shadow-sm border border-gray-200 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-blue-600 text-3xl">💳</div>
                <h2 className="text-2xl font-semibold text-blue-700">Fee Involved</h2>
              </div>
  
              <p className="text-gray-600">
                The government charges for the application process vary from case to case.
              </p>
            </div>
  
          </div>
        </div>
      </section>
    );
  }
  