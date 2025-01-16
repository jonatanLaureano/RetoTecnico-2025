import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ResultCard from "../components/ResultCard";
import useFetch from "../hooks/useFetch";
import useSort from "../hooks/useSort";
import SortSelect from "../components/SortSelect";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const { data, loading, error } = useFetch(query);
  const { sortedData, handleSortChange } = useSort(data);

  return (
    <div className="homepage">
      <h1 className="title">Búsqueda de medios de la NASA</h1>
      <SearchBar setQuery={setQuery} />
      <SortSelect handleSortChange={handleSortChange} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="results-grid">
        {sortedData.map((item) => (
          <ResultCard key={item.href} item={item} />
        ))}
      </div>
    </div>
  );
}
