import Link from "next/link";
import Image from "next/image";
import { videos } from "../data/videos";

export default function VideoPage({ id }) {
  const video = videos.find((v) => v.id === id);
  if (!video) return <div>Video not found</div>;

  const others = videos.filter((v) => v.id !== id);

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="flex-1">
        <iframe
          className="w-full aspect-video rounded-xl"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          allowFullScreen
          autoFocus
        />
        <h1 className="text-xl font-bold mt-3">{video.title}</h1>
        <p className="text-sm text-gray-600">
          {video.channel} • {video.viewCount.toLocaleString()} views
        </p>
      </div>

      <div className="lg:w-96 flex flex-col">
        {others.map((v) => (
          <Link
            key={v.id}
            href={`/video/${v.id}`}
            className="flex gap-2 hover:bg-gray-100 py-2 rounded-lg transition-colors"
          >
            <Image
              src={v.thumbnail}
              alt={v.title}
              width={208}
              height={117}
              className="w-52 rounded-lg aspect-video object-cover"
            />
            <div>
              <h3 className="text-sm font-semibold">{v.title}</h3>
              <p className="text-xs text-gray-600">{v.channel}</p>
              <p className="text-xs text-gray-600">
                {v.viewCount.toLocaleString()} views
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
