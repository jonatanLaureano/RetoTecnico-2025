type SortSelectProps = {
    handleSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  };
  
  const SortSelect = ({ handleSortChange }: SortSelectProps) => {
    return (
      <div>
        <label htmlFor="sort-select">Orden por Titulo: </label>
        <select id="sort-select" onChange={handleSortChange}>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div>
    );
  };
  
  export default SortSelect;
  