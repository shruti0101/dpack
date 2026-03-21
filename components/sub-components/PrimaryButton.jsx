const PrimaryButton = ({ children, href = '#' }) => (
  <a
    href={href}
    className="px-8 py-3 text-lg font-bold text-white bg-blue-600 rounded-lg shadow-xl hover:bg-blue-700 transition duration-300 transform hover:scale-[1.02] active:scale-100 uppercase tracking-wider"
  >
    {children}
  </a>
);

export default PrimaryButton