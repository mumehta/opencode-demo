import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion'

// Seamless 5s loop for FlowRight Plumbing hero.
// EVERY animation is periodic in `loop` (frame / DURATION) so the MP4
// loops without any pop. Driven by useCurrentFrame() + interpolate()
// per Remotion markup best practices.
// Palette mirrors Designs/smc.co-design.md (SMC Green Precision):
// neutral #FFFFFF canvas, muted-surface #F5F5F5 panels,
// primary #009900 green accent, secondary #000000 ink,
// border #E8E8E8. Icons are inline SVG / CSS shapes
// — no emoji (headless Chrome lacks emoji fonts).
export const PlumberHero = () => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const DURATION = fps * 5

  // Seamless loop progress 0 -> 1
  const loop = frame / DURATION
  const wave = Math.sin(loop * Math.PI * 2)

  // Badge pulse
  const badgeScale = interpolate(wave, [-1, 1], [0.96, 1.04])

  // Wrench float + gentle rock
  const wrenchY = interpolate(wave, [-1, 1], [-14, 14])
  const wrenchRotate = interpolate(wave, [-1, 1], ['-8deg', '8deg'])

  // Water drops falling (3 drops, staggered, wrap around)
  const drops = [0, 1, 2].map((i) => {
    const offset = (loop + i / 3) % 1
    return {
      top: interpolate(offset, [0, 1], [-40, 620]),
      opacity: interpolate(offset, [0, 0.15, 0.85, 1], [0, 1, 1, 0]),
      key: i,
    }
  })

  // Stars gently twinkle with staggered phase (always visible, no pop)
  const star = (i) => {
    const phase = Math.sin(loop * Math.PI * 2 + i * 0.7)
    return {
      opacity: interpolate(phase, [-1, 1], [0.75, 1]),
      scale: interpolate(phase, [-1, 1], [0.92, 1.08]),
    }
  }

  // Bottom shimmer sweep
  const sweepX = interpolate(loop, [0, 1], [-300, 900])

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Aeonik, "Inter Tight", Inter, system-ui, sans-serif',
        overflow: 'hidden',
      }}
    >
      {/* soft radial glow */}
      <div
        style={{
          position: 'absolute',
          width: 640,
          height: 640,
          borderRadius: '50%',
          backgroundColor: '#F5F5F5',
          opacity: 0.25,
        }}
      />
      {/* falling drops (CSS droplets — no emoji font needed) */}
      {drops.map((d) => (
        <div
          key={d.key}
          style={{
            position: 'absolute',
            left: 130 + d.key * 260,
            top: d.top,
            width: 30,
            height: 30,
            backgroundColor: '#009900',
            borderRadius: '0 50% 50% 50%',
            rotate: '45deg',
            opacity: d.opacity,
          }}
        />
      ))}

      {/* main card */}
      <div
        style={{
          position: 'relative',
          width: 560,
          backgroundColor: '#ffffff',
          borderRadius: 10,
          padding: '44px 40px',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
          border: '1px solid #E8E8E8',
        }}
      >
        {/* badge */}
        <div
          style={{
            backgroundColor: '#009900',
            color: '#000000',
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: 2,
            padding: '10px 28px',
            borderRadius: 999,
            scale: String(badgeScale),
          }}
        >
          ● 24/7 EMERGENCY
        </div>

        {/* wrench (inline SVG — renders in headless Chrome) */}
        <div
          style={{
            marginTop: 18,
            translate: `0px ${wrenchY}px`,
            rotate: wrenchRotate,
          }}
        >
          <svg
            width="110"
            height="110"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        </div>

        <div
          style={{
            fontSize: 44,
            fontWeight: 800,
            color: '#000000',
            marginTop: 8,
            fontFamily: 'Aeonik, "Inter Tight", sans-serif',
          }}
        >
          FlowRight
        </div>
        <div style={{ fontSize: 24, color: '#000000', fontWeight: 400, marginTop: 2 }}>
          Plumbing • Done Right
        </div>

        {/* stars */}
        <div style={{ display: 'flex', gap: 8, marginTop: 18 }}>
          {[0, 1, 2, 3, 4].map((i) => {
            const s = star(i)
            return (
              <div
                key={i}
                style={{
                  fontSize: 36,
                  color: '#009900',
                  opacity: s.opacity,
                  scale: String(s.scale),
                }}
              >
                ★
              </div>
            )
          })}
        </div>
        <div style={{ fontSize: 20, color: '#000000', opacity: 0.65, marginTop: 6 }}>
          4.9 — 2,400+ happy homes
        </div>

        {/* phone pill */}
        <div
          style={{
            marginTop: 24,
            backgroundColor: '#F5F5F5',
            color: '#000000',
            fontSize: 26,
            fontWeight: 500,
            padding: '14px 36px',
            borderRadius: 4,
            border: '1px solid #E8E8E8',
            fontFamily: 'monospace',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#009900"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          (555) 123-4567
        </div>

        {/* shimmer sweep */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: sweepX - 300,
            width: 120,
            background: 'linear-gradient(100deg, transparent, rgba(0,153,0,0.10), transparent)',
            pointerEvents: 'none',
          }}
        />
      </div>
    </AbsoluteFill>
  )
}
