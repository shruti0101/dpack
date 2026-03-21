export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-lg">
        <h1 className="text-4xl font-bold text-green-600 mb-3">Thank You!</h1>
        <p className="text-gray-700 text-lg mb-6">
          Your submission has been received successfully.
        </p>

        <a
          href="/"
          className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}
