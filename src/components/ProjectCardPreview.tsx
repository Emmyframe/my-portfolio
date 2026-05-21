import { useState } from 'react'

export type ProjectPreviewVariant =
  | 'commerce'
  | 'dashboard'
  | 'wellness'
  | 'onboarding'
  | 'field'
  | 'creator'

type Props = {
  variant: ProjectPreviewVariant
  /** Optional screenshot: place file in `public/project-previews/` e.g. `/project-previews/commerce.png` */
  image?: string
  label: string
  /** When the card links to a live URL, show a small badge on hover */
  showLiveCta?: boolean
}

function Chrome() {
  return (
    <div className="project-preview__chrome" aria-hidden="true">
      <span className="project-preview__dots">
        <span />
        <span />
        <span />
      </span>
      <span className="project-preview__url">preview.app</span>
    </div>
  )
}

function CommerceMock() {
  return (
    <div className="project-preview__mock project-preview__mock--commerce">
      <div className="ppc-phone">
        <div className="ppc-phone__bar" />
        <div className="ppc-phone__row">
          <div className="ppc-tile" />
          <div className="ppc-tile" />
        </div>
        <div className="ppc-phone__cart" />
      </div>
      <div className="ppc-store">
        <div className="ppc-store__hero" />
        <div className="ppc-store__grid">
          <div className="ppc-card" />
          <div className="ppc-card" />
          <div className="ppc-card" />
        </div>
      </div>
    </div>
  )
}

function DashboardMock() {
  return (
    <div className="project-preview__mock project-preview__mock--dashboard">
      <aside className="ppd-side">
        <span />
        <span />
        <span />
      </aside>
      <div className="ppd-main">
        <div className="ppd-kpis">
          <div className="ppd-kpi" />
          <div className="ppd-kpi" />
          <div className="ppd-kpi" />
        </div>
        <div className="ppd-chart">
          <div className="ppd-bar" style={{ height: '45%' }} />
          <div className="ppd-bar" style={{ height: '72%' }} />
          <div className="ppd-bar" style={{ height: '38%' }} />
          <div className="ppd-bar" style={{ height: '90%' }} />
          <div className="ppd-bar" style={{ height: '55%' }} />
          <div className="ppd-bar" style={{ height: '68%' }} />
        </div>
        <div className="ppd-row">
          <div className="ppd-cell" />
          <div className="ppd-cell" />
        </div>
      </div>
    </div>
  )
}

function WellnessMock() {
  return (
    <div className="project-preview__mock project-preview__mock--wellness">
      <div className="ppw-ring">
        <div className="ppw-ring__inner" />
      </div>
      <div className="ppw-cards">
        <div className="ppw-mini" />
        <div className="ppw-mini" />
        <div className="ppw-mini" />
      </div>
    </div>
  )
}

function OnboardingMock() {
  return (
    <div className="project-preview__mock project-preview__mock--onboarding">
      <div className="ppo-steps">
        <span className="ppo-steps__dot ppo-steps__dot--done" />
        <span className="ppo-steps__line" />
        <span className="ppo-steps__dot ppo-steps__dot--done" />
        <span className="ppo-steps__line" />
        <span className="ppo-steps__dot ppo-steps__dot--active" />
        <span className="ppo-steps__line" />
        <span className="ppo-steps__dot" />
      </div>
      <div className="ppo-form">
        <div className="ppo-line ppo-line--short" />
        <div className="ppo-line" />
        <div className="ppo-line" />
        <div className="ppo-upload">Drop file</div>
      </div>
    </div>
  )
}

function FieldMock() {
  return (
    <div className="project-preview__mock project-preview__mock--field">
      <div className="ppf-map">
        <div className="ppf-grid" />
        <div className="ppf-pin" />
      </div>
      <div className="ppf-list">
        <div className="ppf-item" />
        <div className="ppf-item" />
        <div className="ppf-item" />
      </div>
    </div>
  )
}

function CreatorMock() {
  return (
    <div className="project-preview__mock project-preview__mock--creator">
      <div className="ppcrt-hero" />
      <div className="ppcrt-row">
        <div className="ppcrt-media" />
        <div className="ppcrt-media" />
        <div className="ppcrt-media" />
      </div>
      <div className="ppcrt-text">
        <div className="ppcrt-line" />
        <div className="ppcrt-line ppcrt-line--narrow" />
      </div>
    </div>
  )
}

function MockContent({ variant }: { variant: ProjectPreviewVariant }) {
  switch (variant) {
    case 'commerce':
      return <CommerceMock />
    case 'dashboard':
      return <DashboardMock />
    case 'wellness':
      return <WellnessMock />
    case 'onboarding':
      return <OnboardingMock />
    case 'field':
      return <FieldMock />
    case 'creator':
      return <CreatorMock />
    default:
      return null
  }
}

export function ProjectCardPreview({ variant, image, label, showLiveCta }: Props) {
  const [imageFailed, setImageFailed] = useState(false)
  const hasImage = Boolean(image?.trim()) && !imageFailed

  return (
    <div className={`project-card__visual project-preview project-preview--${variant}`}>
      <Chrome />
      <div className="project-preview__viewport">
        {hasImage ? (
          <>
            <img
              className="project-preview__shot"
              src={image}
              alt={`${label} product screenshot`}
              width={1280}
              height={720}
              loading="lazy"
              decoding="async"
              onError={() => setImageFailed(true)}
            />
            <span className="project-preview__shot-fade" aria-hidden="true" />
          </>
        ) : (
          <MockContent variant={variant} />
        )}
      </div>
      {showLiveCta ? (
        <span className="project-card__cta" aria-hidden="true">
          Live site
        </span>
      ) : null}
      <span className="project-preview__shine" aria-hidden="true" />
      <span className="sr-only">{label} interface preview</span>
    </div>
  )
}
