import "./App.css";
import RemixChildApp from "../../nites-remix/app/routes/_index";

function App() {
  return (
    <div className="h-full w-full ">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">My Website</h1>
        <nav className="flex space-x-4">
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
          <a href="/about" className="hover:text-gray-300">
            About
          </a>
          <a href="/contact" className="hover:text-gray-300">
            Contact
          </a>
        </nav>
      </header>

      <div className="h-full w-full">
        <RemixChildApp />
      </div>
    </div>
  );
}

export default App;
