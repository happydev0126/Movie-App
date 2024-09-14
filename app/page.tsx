'use client'
import { useQuery } from '@tanstack/react-query';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
import Results from '@/components/Results';


const fetchMovies = async (genre: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`
  );
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data.results;
};
export default function Home() {
  const genre = 'fetchTrending';
  const { data: results, error, isLoading } = useQuery({
    queryKey: ['movies', genre],
    queryFn: () => fetchMovies(genre),
  });
  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  return (
    <div>
             <Results results={results || []} />
    </div>
  );
}
