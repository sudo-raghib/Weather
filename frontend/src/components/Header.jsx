import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">Weather App</h1>
        <div>
          <Link to="/" className="mr-4 hover:underline">
            Current Weather
          </Link>
          <Link to="/summary" className="hover:underline">
            Weather Summary
          </Link>
        </div>
      </nav>
    </header>
  );
}
