// Pre-rendered Remotion video (see src/remotion/PlumberHero.jsx).
// Re-render with: npx remotion render src/remotion/index.js PlumberHero public/hero-video.mp4
const videoSrc = `${import.meta.env.BASE_URL}hero-video.mp4`
const posterSrc = `${import.meta.env.BASE_URL}hero-poster.jpg`

export default function HeroVideo() {
  return (
    <div className="relative w-full max-w-[520px] mx-auto overflow-hidden rounded-md border border-border bg-surface">
      <video
        src={videoSrc}
        poster={posterSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="block aspect-square w-full object-cover"
        aria-label="Animated FlowRight Plumbing showcase"
      />
      {/* caption strip */}
      <div className="absolute bottom-0 inset-x-0 flex items-center justify-center gap-2 bg-neutral/85 px-4 py-2.5 text-[13px] font-medium text-on-surface backdrop-blur">
        <span className="inline-block h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
        Rendered with Remotion
      </div>
    </div>
  )
}
