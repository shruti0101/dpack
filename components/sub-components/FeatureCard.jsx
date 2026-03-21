const FeatureCard = ({ icon, title, description }) => (
  <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col items-start h-full transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">
    <div className="text-blue-600 text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);
export default FeatureCard