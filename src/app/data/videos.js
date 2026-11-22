export const videos = Array.from({ length: 100 }, (_, i) => ({
  id: String(i + 1),
  title: `Video ${i + 1}`,
  channel: "Channel Name",
  thumbnail: `https://picsum.photos/seed/${i + 1}/320/180`,
  viewCount: (i + 1) * 12345,
}));
