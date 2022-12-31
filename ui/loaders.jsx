// ============================================================
// HTML Elements configured for "loading" animation components
// Elements with the ".sk-" className prefix adapted from 
// SpinKit, sourced from https://tobiasahlin.com/spinkit/
// ============================================================

export const BrickLoader = () => {
  return (
    <div className="sk-cube-grid">
      <div className="sk-cube sk-cube1"></div>
      <div className="sk-cube sk-cube2"></div>
      <div className="sk-cube sk-cube3"></div>
      <div className="sk-cube sk-cube4"></div>
      <div className="sk-cube sk-cube5"></div>
      <div className="sk-cube sk-cube6"></div>
      <div className="sk-cube sk-cube7"></div>
      <div className="sk-cube sk-cube8"></div>
      <div className="sk-cube sk-cube9"></div>
    </div>
  )
}

export const WaveLoader = () => {
  return (
    <div className="sk-waveLoader">
      <div className="sk-rect1"></div>
      <div className="sk-rect2"></div>
      <div className="sk-rect3"></div>
      <div className="sk-rect4"></div>
      <div className="sk-rect5"></div>
    </div>
  )
}