import { Input } from "@/components/ui/input";
import axios from "axios";
import { useState } from "react";

const CreateTrip = () => {
  const [query, setQuery] = useState(""); // Correctly initialized as an empty string
  const [results, setResults] = useState([]); // Correctly initialized as an empty array
  const [loading, setLoading] = useState(false); // Correctly initialized as a boolean

  const fetchLocations = async (query) => {
    const url = "https://api.foursquare.com/v3/places/search";
    const config = {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_FOURSQUARE_API_KEY}`,
        "Content-Type": "application/json",
      },
      params: {
        query,
        categories: "19019", // Geographical locations category
        limit: 5, // Number of results to fetch
      },
    };

    try {
      setLoading(true); // Set loading to true before making the request
      const res = await axios.get(url, config);
      console.log(res.data.results);
      setResults(res.data.results || []); // Safely set results to an array
    } catch (error) {
      console.error("Error fetching locations:", error.message);
    } finally {
      setLoading(false); // Reset loading to false after request completion
    }
  };

  const handleSearch = (e) => {
    setQuery(e.target.value); // Update query state with user input

    if (e.target.value.trim() !== "") {
      fetchLocations(e.target.value); // Fetch locations when input is non-empty
    } else {
      setResults([]); // Clear results when input is empty
    }
  };

  console.log(`Bearer ${import.meta.env.VITE_FOURSQUARE_API_KEY}`);

  return (
    <div className="h-screen flex flex-col items-center justify-center mt-[100px]">
      <Input
        type="text"
        placeholder="Enter city name..."
        value={query}
        onChange={handleSearch}
        className="mb-4"
      />
      {loading && <p>Loading...</p>} {/* Show loading state */}
      <ul>
        {results.map((res, idx) => (
          <li key={idx} className="p-2 border-b">
            <strong>{res.name}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CreateTrip;
