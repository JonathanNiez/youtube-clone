import Link from "next/link";
import { videos } from "./data/videos";

export default function Home() {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {videos.map((v) => (
        <Link
          key={v.id}
          href={`/video/${v.id}`}
        >
          <img
            src={v.thumbnail}
            alt={v.title}
            className="w-full rounded-xl aspect-video object-cover hover:scale-105 transition-transform"
          />
          <h3 className="font-semibold mt-2">{v.title}</h3>
          <p className="text-sm text-gray-600">{v.channel}</p>
          <p className="text-sm text-gray-600">
            {v.viewCount.toLocaleString()} views
          </p>
        </Link>
      ))}
    </div>
  );
}
