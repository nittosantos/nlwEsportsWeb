interface GameBannerProps {
  title: string;
  bannerUrl: string;
  adsCount: number;
}

export const GameBanner: React.FC<GameBannerProps> = ({
  bannerUrl,
  title,
  adsCount,
}) => {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={bannerUrl} alt={title} />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white">{title}</strong>
        <span className="text-zinc-300 text-sm block mt-1">
          {adsCount} anúncio(s)
        </span>
      </div>
    </a>
  );
};
