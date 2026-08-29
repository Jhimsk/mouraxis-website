import { Suspense, useRef, useState } from "react"
import { Canvas } from "@react-three/fiber"
import {
  OrbitControls,
  useGLTF,
  useProgress,
  Html,
} from "@react-three/drei"

function BridgeModel() {
  const { scene } = useGLTF("/models/bridge-001/bridge-001.glb")

  return <primitive object={scene} />
}

function Loader() {
  const { progress } = useProgress()

  return (
    <Html center>
      <div className="w-[280px] text-center">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#2F80ED]">
          Mouraxis Reality Capture
        </p>

        <p className="mt-4 text-sm text-white">
          Loading Bridge 001...
        </p>

        <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-[#2F80ED] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-2 text-xs text-slate-500">
          {Math.round(progress)}%
        </p>
      </div>
    </Html>
  )
}

export default function BridgeViewer() {
  const controlsRef = useRef(null)
  const viewerRef = useRef(null)
  const [autoRotate, setAutoRotate] = useState(false)

  const resetView = () => {
    controlsRef.current?.reset()
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      viewerRef.current?.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }

  return (
    <section
      ref={viewerRef}
      className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950"
    >
      <div className="absolute right-4 top-4 z-10 flex gap-2">
        <button
          type="button"
          onClick={() => setAutoRotate((prev) => !prev)}
          className="rounded-lg border border-white/20 bg-slate-950/80 px-4 py-2 text-sm text-white"
        >
          {autoRotate ? "Stop Rotate" : "Auto Rotate"}
        </button>

        <button
          type="button"
          onClick={toggleFullscreen}
          className="rounded-lg border border-white/20 bg-slate-950/80 px-4 py-2 text-sm text-white"
        >
          Fullscreen
        </button>

        <button
          type="button"
          onClick={resetView}
          className="rounded-lg border border-white/20 bg-slate-950/80 px-4 py-2 text-sm text-white"
        >
          Reset View
        </button>
      </div>

      <div className="h-[65vh] min-h-[500px] max-h-[700px] w-full fullscreen:h-screen fullscreen:max-h-none">
        <Canvas
          camera={{
            position: [-7.4, -148.5, 85.5],
            fov: 40,
          }}
          dpr={[1, 1.5]}
        >
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={1.5} />

            <directionalLight
              position={[10, 20, 10]}
              intensity={2}
            />

            <BridgeModel />

            <OrbitControls
              ref={controlsRef}
              makeDefault
              target={[-2.1, 6.3, -24.2]}
              enablePan
              enableZoom
              enableRotate
              autoRotate={autoRotate}
              autoRotateSpeed={0.6}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}