const AdvantageCard = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4 p-5 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition duration-200">
    <div className="flex-shrink-0 text-blue-600 text-3xl">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-600 text-base">{description}</p>
    </div>
  </div>
);

export default AdvantageCard