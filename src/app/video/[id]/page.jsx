import { Suspense } from "react";
import VideoPage from "../../components/VideoPage";

async function VideoContent({ params }) {
  const { id } = await params;
  return <VideoPage id={id} />;
}

export default function Page({ params }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VideoContent params={params} />
    </Suspense>
  );
}
