export function useCountHeight() {
  const vh_true = window.innerHeight / 100
  const root = document.documentElement
  root.style.setProperty('--vh', vh_true.toString())
}
