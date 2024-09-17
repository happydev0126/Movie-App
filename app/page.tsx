/*"use client";
import { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
// { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';




const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
import Results from "@/components/Results";

//     --url 'https://api.themoviedb.org/3/account/null/rated/movies?language=en-US&page=1&sort_by=created_at.asc'
const fetchMovies = async (movie: string) => {
  let endpoint = "";

  switch (movie) {
    case "nowPlaying":
      endpoint = `/movie/now-playing`;
      break;
    case "popular":
      endpoint = `/movie/popular`;
      break;
    case "topRated":
      endpoint = `/movie/top-rated`;
      break;
    case "upcoming":
      endpoint = `/movie/upcoming`;
      break;
    default:
      throw new Error("Invalid category");
  }
  const res = await fetch(
    `https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}&language=en-US&page=1`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data.results;
};
export default function Home() {
  const searchParams = useSearchParams();
  const movie = searchParams.get('movie') || 'popular';

  const {
    data: results,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['movies', movie],
    queryFn: () => fetchMovies(movie as string),

  });
  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Results results={results || []} />
      </div>
    </Suspense>
  );
}
*/

"use client";
import { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from 'next/navigation';
import Results from "@/components/Results";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;


const fetchMovies = async (movie: string) => {
  let endpoint = "";

  switch (movie) {
    case "trending":
      endpoint = `/trending/movie/week`;
      break;
    case "popular":
      endpoint = `/movie/popular`;
      break;
    case "topRated":
      endpoint = `/movie/top-rated`;
      break;
    case "upcoming":
      endpoint = `/movie/upcoming`;
      break;
    default:
      throw new Error("Invalid category");
  }
  const res = await fetch(
    `https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}&language=en-US&page=1`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data.results;
};

export default function Home() {
  const searchParams = useSearchParams();
  const movie = searchParams.get('movie') || 'popular';

  const {
    data: results,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['movies', movie],
    queryFn: () => fetchMovies(movie),
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  return (
    <div suppressHydrationWarning={true}>
    <Suspense>
      <div>
        <Results results={results || []} />
      </div>
    </Suspense>
    </div>
  );
}