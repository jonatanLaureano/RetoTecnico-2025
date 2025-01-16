import { IoSearch } from "react-icons/io5";

type SearchBarProps = {
  setQuery: (query: string) => void;
};

export default function SearchBar({ setQuery }: SearchBarProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search-bar">
      <div className="search-container">
        <IoSearch className="search-icon" />
        <input
          type="text"
          placeholder="Busca por título, descripción o tipo de medio..."
          onChange={handleInputChange}
          className="input"
        />
      </div>
    </div>
  );
}
