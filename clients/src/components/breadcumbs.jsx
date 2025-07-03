import { Home } from "lucide-react";
import { Link } from "react-router";

export default function Breadcrumbs() {
  return <div className="sm:text-lg text-sm text-gray-500 font-semibold">
    <Link to="/projects" className="inline-flex items-center cursor-pointer">
      <Home className="sm:w-4 sm:h-4 w-3 h-3 mr-2" /> Home Page
    </Link>
    <span className="mx-1">/</span>
    Sample Project <span className="mx-1">/</span>{" "}
    <span className="text-purple-600">Add your podcast</span>
  </div>;
}

