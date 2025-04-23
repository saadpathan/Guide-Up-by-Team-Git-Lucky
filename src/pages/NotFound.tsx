import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-dark">Page Not Found</h1>
        <p className="text-xl text-gray mb-6">
          We couldn't find the page you're looking for.
        </p>
        <Button asChild size="lg" className="w-full">
          <Link to="/">Return to Home Page</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
