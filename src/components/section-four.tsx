export default function SectionFour() {
  const cardStyle = {
    borderRadius: "20px",
    background: "#e0e0e0",
    boxShadow: "5px 5px 10px #b8b8b8, -5px -5px 10px #ffffff",
  };

  return (
    <div className="min-h-screen bg-[#dfdfdf] py-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4 sm:mb-6">
            How to Install Our App
          </h1>
          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
            Getting started is quick and easy! Follow these simple steps to install and start using MyBindle today.
          </p>
        </div>

        {/* Numbers Row (Desktop Only) */}
        <div className="hidden md:flex items-center justify-center mb-12">
          <span className="flex-1 border-t border-transparent"></span>
          <span className="text-4xl lg:text-5xl font-bold text-red-500 mx-4 lg:mx-6">01</span>
          <span className="flex-1 border-t border-gray-400 px-4 lg:px-5"></span>

          <span className="text-4xl lg:text-5xl font-bold text-gray-800 mx-4 lg:mx-6">02</span>
          <span className="flex-1 border-t border-gray-400 px-4 lg:px-5"></span>

          <span className="text-4xl lg:text-5xl font-bold text-gray-800 mx-4 lg:mx-6">03</span>
          <span className="flex-1 border-t border-transparent"></span>
        </div>

        {/* Steps Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Step 01 */}
          <div className="text-center">
            <span className="block md:hidden text-3xl sm:text-4xl font-bold text-red-500 mb-3 sm:mb-4">01</span>
            <div
              className="p-5 sm:p-8 flex flex-col justify-center items-center"
              style={cardStyle}
            >
              <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">Download</h3>
              <p className="text-sm sm:text-base text-gray-600">Open Play Store or App Store</p>
            </div>
          </div>

          {/* Step 02 */}
          <div className="text-center">
            <span className="block md:hidden text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">02</span>
            <div
              className="p-5 sm:p-8 flex flex-col justify-center items-center"
              style={cardStyle}
            >
              <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">Install App</h3>
              <p className="text-sm sm:text-base text-gray-600">The app will install automatically.</p>
            </div>
          </div>

          {/* Step 03 */}
          <div className="text-center">
            <span className="block md:hidden text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">03</span>
            <div
              className="p-5 sm:p-8 flex flex-col justify-center items-center"
              style={cardStyle}
            >
              <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">Ready to Use</h3>
              <p className="text-sm sm:text-base text-gray-800">Sign up or log in to start exploring!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
