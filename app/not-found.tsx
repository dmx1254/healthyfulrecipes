import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center ma-h-screen text-gray-800 p-48">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Oops! Page Not Found</h2>
      <p className="mb-6 text-center">
        We're sorry, but the page you are looking for doesn't exist. Please
        check the URL or return to the homepage.
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
      >
        Return Home
      </Link>
    </div>
  );
}
