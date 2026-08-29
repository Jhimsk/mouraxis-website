import { useEffect } from "react"
import BridgeViewer from "../components/BridgeViewer"

export default function Bridge001Page() {
  useEffect(() => {
    document.title = "Bridge 001 | Mouraxis"

    return () => {
      document.title = "Mouraxis | Geospatial & Infrastructure Intelligence"
    }
  }, [])

  return (
    <main className="min-h-screen bg-[#07111f] text-white">

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pb-8 pt-20 md:px-10 md:pt-28">

        <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#2F80ED]">
          Mouraxis Reality Capture
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
          Bridge 001
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
          Interactive photogrammetric reconstruction of bridge infrastructure
          captured from aerial imagery and processed into a detailed spatial
          representation of the structure and surrounding site.
        </p>

      </section>

      {/* 3D VIEWER */}
      <section className="mx-auto max-w-7xl px-6 md:px-10">

        <BridgeViewer />

        <p className="mt-3 text-center text-xs tracking-wide text-slate-500">
          Drag to rotate · Scroll to zoom · Right-drag to pan
        </p>

      </section>

      {/* PROJECT OVERVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">

        <div className="grid gap-10 border-t border-white/10 pt-12 md:grid-cols-3">

          {/* CAPTURE */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#2F80ED]">
              Capture
            </p>

            <h2 className="mt-3 text-xl font-medium text-white">
              Aerial Reality Capture
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Overlapping aerial imagery was collected from multiple viewing
              angles to document the bridge deck, approaches, structural
              elements, control structures, and surrounding site context.
            </p>
          </div>

          {/* RECONSTRUCTION */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#2F80ED]">
              Reconstruction
            </p>

            <h2 className="mt-3 text-xl font-medium text-white">
              3D Photogrammetric Model
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Selected imagery was processed through a photogrammetric workflow
              to generate a textured 3D model and dense point cloud representing
              the captured infrastructure.
            </p>
          </div>

          {/* QA/QC */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#2F80ED]">
              QA / QC
            </p>

            <h2 className="mt-3 text-xl font-medium text-white">
              Geospatial Data Review
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Source imagery and reconstructed geometry were reviewed for
              coverage, image quality, reconstruction artifacts, spatial
              continuity, and usable infrastructure geometry.
            </p>
          </div>

        </div>

        {/* TECHNICAL STATISTICS */}
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">

          <div className="bg-[#0b1625] p-6 md:p-8">
            <p className="text-3xl font-medium text-white">
              122
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Images Processed
            </p>
          </div>

          <div className="bg-[#0b1625] p-6 md:p-8">
            <p className="text-3xl font-medium text-white">
              10.0M
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Reconstructed Points
            </p>
          </div>

          <div className="bg-[#0b1625] p-6 md:p-8">
            <p className="text-3xl font-medium text-white">
              0.82 cm
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Average GSD
            </p>
          </div>

          <div className="bg-[#0b1625] p-6 md:p-8">
            <p className="text-3xl font-medium text-white">
              2.76 ha
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Reconstructed Area
            </p>
          </div>

        </div>

        {/* DATASET DETAILS */}
        <div className="mt-16 grid gap-10 rounded-2xl border border-white/10 bg-[#0b1625] p-8 md:grid-cols-2 md:p-10">

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#2F80ED]">
              Dataset
            </p>

            <h2 className="mt-3 text-2xl font-medium">
              Spatial Reconstruction
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
              The processed dataset includes the textured reality model and a
              dense geospatial point cloud generated from the same aerial image
              network.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">

            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Georeferencing
              </p>

              <p className="mt-2 text-sm text-slate-200">
                Image GPS
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Coordinate System
              </p>

              <p className="mt-2 text-sm text-slate-200">
                WGS 84 / UTM Zone 17N
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Reconstruction
              </p>

              <p className="mt-2 text-sm text-slate-200">
                Photogrammetry
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Model Type
              </p>

              <p className="mt-2 text-sm text-slate-200">
                Textured 3D Mesh
              </p>
            </div>

          </div>

        </div>

        {/* PROJECT NOTES */}
        <div className="mt-16 border-t border-white/10 pt-10">

          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#2F80ED]">
            Project Notes
          </p>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-500">
            Bridge 001 is a Mouraxis reality-capture demonstration produced
            using aerial imagery and GPS-based photogrammetric reconstruction.
            The dataset demonstrates visualization, reconstruction, and
            geospatial processing workflows and is not presented as a boundary
            survey, engineering inspection, or independently verified
            survey-grade dataset. Moving and reflective surfaces, particularly
            water, may produce incomplete or irregular reconstructed geometry.
          </p>

        </div>

      </section>

    </main>
  )
}