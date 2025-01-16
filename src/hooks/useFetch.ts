import { useState, useEffect } from "react";


type MediaItem = {
  title: string;
  description: string;
  media_type: string;
  href: string;
};

type ApiItem = {
  data: { title?: string; description?: string; media_type?: string }[];
  links?: { href: string }[];
};

export default function useFetch(query: string) {
  const [data, setData] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `${import.meta.env.VITE_NASA_API_URL}?q=${query}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();

        const results: MediaItem[] = json.collection.items.map((item: ApiItem) => ({
          title: item.data[0]?.title || "No Title",
          description: item.data[0]?.description || "No Description",
          media_type: item.data[0]?.media_type || "unknown",
          href: item.links?.[0]?.href || "",
        }));

        setData(results);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { data, loading, error };
}
