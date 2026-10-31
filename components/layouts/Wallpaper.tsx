// A quiet background, fixed so it shows at every scroll position: soft light from the top,
// faint topographic contour lines in two corners, and fine film grain. No animation.
const contours = "absolute inset-0 bg-[url('/images/contours.svg')] bg-size-[max(1100px,85vw)_auto] bg-no-repeat opacity-[0.08]";

const grain = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

export default function Wallpaper() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_-10%,rgb(255_255_255/0.07),transparent_70%)]"></div>

      {/* Contours generated once into an SVG: top-right, plus a rotated copy bottom-left, each fading toward the middle */}
      <div className={`${contours} bg-position-[right_-10rem_top_-6rem] mask-[radial-gradient(60%_70%_at_90%_10%,black,transparent)]`}></div>
      <div className={`${contours} rotate-180 bg-position-[right_-14rem_top_-10rem] mask-[radial-gradient(50%_60%_at_90%_10%,black,transparent)]`}></div>

      <div className="absolute inset-0 opacity-[0.045]" style={{ backgroundImage: grain }}></div>
    </div>
  );
}
