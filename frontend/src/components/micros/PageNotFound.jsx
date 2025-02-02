const PageNotFound = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center px-4">
        <h1 className="text-7xl font-bold text-red-500">404</h1>
        <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
        <p className="text-gray-400 mt-2">
          The page you are looking for might have been removed or does not exist.
        </p>
        <a
          href="/search/applicant"
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go to Search
        </a>
      </div>
    );
  };
  
  export default PageNotFound;
  