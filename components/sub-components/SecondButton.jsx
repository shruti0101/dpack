const SecondaryButton = ({ children, href = '#' }) => (
  <a
    href={href}
    className="px-8 py-3 text-lg font-medium text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition duration-300"
  >
    {children}
  </a>
);

export default SecondaryButton