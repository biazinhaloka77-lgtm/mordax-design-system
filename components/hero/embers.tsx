const EMBERS = [
  { left: 52, bottom: 8, delay: 0, size: 3, drift: 30 },
  { left: 61, bottom: 14, delay: 1.6, size: 2, drift: -20 },
  { left: 68, bottom: 4, delay: 3.1, size: 3, drift: 40 },
  { left: 76, bottom: 10, delay: 0.8, size: 2, drift: -35 },
  { left: 83, bottom: 6, delay: 2.4, size: 4, drift: 25 },
  { left: 90, bottom: 12, delay: 4.2, size: 2, drift: -15 },
  { left: 57, bottom: 2, delay: 5.0, size: 2, drift: 45 },
  { left: 72, bottom: 18, delay: 5.8, size: 3, drift: -30 },
  { left: 94, bottom: 3, delay: 1.1, size: 2, drift: -40 },
]

export function Embers() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {EMBERS.map((e, i) => (
        <span
          key={i}
          className="absolute animate-ember rounded-full bg-ember shadow-[0_0_8px_2px_rgb(242_106_27/0.7)] motion-reduce:hidden"
          style={
            {
              left: `${e.left}%`,
              bottom: `${e.bottom}%`,
              width: e.size,
              height: e.size,
              animationDelay: `${e.delay}s`,
              '--drift': `${e.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}
