import { useState } from "react";
import type { Service } from "../types/service";

interface ServiceFiltersProps {
  services: Service[];
}

const categories = ["All categories", "Shopping", "Images", "News", "Finance"];

function ServiceFilters({ services }: ServiceFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [searchTerm, setSearchTerm] = useState("");

  function handleCategorySelect(category: string) {
    setSelectedCategory(category);
    setIsOpen(false);
  }

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log({
      category: selectedCategory,
      search: searchTerm,
    });
  }

  return (
    <section className="my-10 w-full p-6">
      <h2 className="mb-5 text-2xl font-bold">
        Find Services ({services.length})
      </h2>

      <form onSubmit={handleSearch}>
        <div className="flex w-full">
          {/* Dropdown */}
          <div className="relative shrink-0">
            <button
              id="dropdown-button"
              type="button"
              aria-expanded={isOpen}
              aria-haspopup="true"
              aria-controls="category-dropdown"
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex h-full items-center gap-2 rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {selectedCategory}

              <svg
                className={`h-4 w-4 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="m6 9 6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Dropdown menu */}
            {isOpen && (
              <div
                id="category-dropdown"
                className="absolute left-0 top-full z-50 mt-1 w-44 rounded-lg border border-gray-200 bg-white shadow-lg"
              >
                <ul className="py-2 text-sm text-gray-700">
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        type="button"
                        onClick={() => handleCategorySelect(category)}
                        className={`block w-full px-4 py-2 text-left hover:bg-gray-100 ${
                          selectedCategory === category
                            ? "bg-gray-100 font-semibold"
                            : ""
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Search input */}
          <input
            type="search"
            id="search-dropdown"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="min-w-0 flex-1 border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search for services..."
          />

          {/* Search button */}
          <button
            type="submit"
            className="rounded-e-lg bg-blue-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
        </div>
      </form>
    </section>
  );
}

export default ServiceFilters;
