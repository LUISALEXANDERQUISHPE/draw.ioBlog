'use client';

interface Video {
  id: string;
  title: string;
  youtubeId: string;
  thumbnail?: string;
}

interface VideoCardProps {
  video: Video;
  onClick: () => void;
}

export function VideoCard({ video, onClick }: VideoCardProps) {
  const thumbnailUrl = video.thumbnail || `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;

  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-lg bg-muted aspect-video cursor-pointer transition-all duration-300 hover:shadow-lg"
    >
      <img
        src={thumbnailUrl}
        alt={video.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
        <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
          <svg
            className="w-6 h-6 text-primary-foreground ml-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
        <h3 className="text-white font-semibold text-sm line-clamp-2">{video.title}</h3>
      </div>
    </button>
  );
}
