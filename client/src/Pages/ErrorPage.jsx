import { Link } from "react-router-dom";
import PageTitle from "../Components/PageTitle";

const ErrorPage = () => {
  return (
    <>
      <PageTitle title="Error Page" />
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            404 - Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            The page you are looking for does not exist.
          </p>
          <Link
            to="/"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Go to Home Page
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
