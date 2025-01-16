import { useState, useEffect } from "react";
import { MediaItem } from './useFetch';


type SortOption = "asc" | "desc";

export default function useSort(data: MediaItem[]) {
  const [sortOption, setSortOption] = useState<SortOption>("asc");
  const [sortedData, setSortedData] = useState<MediaItem[]>([]);

  useEffect(() => {
    const sorted = [...data].sort((a, b) => {
      if (sortOption === "asc") {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
    setSortedData(sorted);
  }, [data, sortOption]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value as SortOption);
  };

  return { sortedData, handleSortChange };
}
