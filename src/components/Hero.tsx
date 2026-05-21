import { Link } from 'react-router-dom'

/** Backdrop art: `public/hero-backdrop.png` — replace file to swap template (see `src/hero-backdrop.css`). */
/** Free stock: mobile / lifestyle — Pexels allows embedding in demos */
const HERO_VIDEO =
  'https://videos.pexels.com/video-files/4974782/4974782-hd_1280_720_30fps.mp4'

function DeviceVideo() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    >
      <source src={HERO_VIDEO} type="video/mp4" />
    </video>
  )
}

export function Hero() {
  return (
    <section className="hero hero--backdrop" id="top" aria-labelledby="hero-heading">
      <div className="hero__copy">
        <div className="hero__developer">
          <img
            className="hero__developer-photo"
            src="/emmy-portrait.png"
            alt=""
            width={64}
            height={64}
            decoding="async"
          />
          <div className="hero__developer-text">
            <span className="hero__developer-name">Emmy Stack</span>
            <span className="hero__developer-role">Full stack developer</span>
          </div>
        </div>
        <h1 id="hero-heading">Full stack apps that feel as good as they scale.</h1>
        <p className="tagline">
          I&apos;m Emmy Stack — I design and ship polished mobile and web experiences,
          from interface detail through APIs, data, and deployment.
        </p>
        <div className="hero__actions">
          <Link className="btn btn--primary" to="/projects">
            View work
          </Link>
          <Link className="btn btn--ghost" to="/contact">
            Contact me
          </Link>
        </div>
      </div>
      <div className="hero__stage" aria-hidden="true">
        <div className="hero__glow" />
        <div className="devices">
          <div className="device device--laptop">
            <div className="device__screen">
              <DeviceVideo />
            </div>
          </div>
          <div className="device device--phone-sm">
            <div className="device__screen">
              <DeviceVideo />
            </div>
          </div>
          <div className="device device--phone-md">
            <div className="device__screen">
              <DeviceVideo />
            </div>
          </div>
          <div className="device device--phone-lg">
            <div className="device__screen">
              <DeviceVideo />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
