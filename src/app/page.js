"use client";

import SearchForm from "@/components/search-form";
import { Tranding } from "@/components/views/tranding";
import { useGetMovies } from "@/hooks/useGetMovies";
import { useSearchMovies } from "@/hooks/useSearchMovies";
import { Card, Rate } from "antd";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const { data: initialMovies, isLoading: isLoadingInitialMovies } = useGetMovies();
  const { data: searchResults, isLoading: isLoadingSearch } = useSearchMovies(query);

  const handleSearch = (q) => {
    setQuery(q);
  };

  const moviesToDisplay = query ? searchResults : initialMovies;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-6 px-6 py-4 mt-24">
      <SearchForm onSearch={handleSearch} />
      <div class="w-full ">
        <Tranding />
      </div>
      {isLoadingInitialMovies || isLoadingSearch ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {moviesToDisplay?.map((item, i) => (
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                item.poster_path ? (
                  <Image alt={item.title} src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} width={240} height={360} />
                ) : (
                  <div style={{ width: 240, height: 360, backgroundColor: "#e0e0e0", display: "flex", justifyContent: "center", alignItems: "center" }}>No Image</div>
                )
              }
              key={item.id}
            >
              <div>
                <h5>
                  <strong>{item.title ? item.title : item.name}</strong>
                </h5>
                <div>
                  <span>{item.release_date}</span>
                  <div class="">
                    <Rate disabled defaultValue={item.vote_average} />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}
