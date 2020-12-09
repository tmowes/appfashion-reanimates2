export interface BackgroundProps {
  colorSelection: {
    position: { x: number; y: number }
    current: { start: string; end: string }
    previous: { start: string; end: string }
  }
}
