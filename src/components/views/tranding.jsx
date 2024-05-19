"use client";

import { useGetTrending } from "@/hooks/useGetTrending";
import { Card, Rate, Skeleton } from "antd";
import Image from "next/image";

export const Tranding = () => {
  const { data, isLoading } = useGetTrending("all", "day");
  return (
    <div className="space-y-6 w-full">
      <div className="">
        <h5 className="text-3xl font-bold">Tranding</h5>
      </div>
      <div className="flex flex-nowrap space-x-6 relative px-10 py-8 overflow-x-auto">
        {isLoading ? (
          <div className="trending-grid flex flex-nowrap space-x-4">
            {[...Array(10)].map((_, index) => (
              <div key={index} className="trending-card">
                <Skeleton active paragraph={{ rows: 6 }} />
              </div>
            ))}
          </div>
        ) : (
          data.map((item) => (
            <div className="flex flex-nowrap space-x-4" key={item.id}>
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
              >
                <Card.Meta title={item.title || item.name} description={`Rating: ${item.vote_average}`} />
              </Card>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
