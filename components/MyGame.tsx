import React from "react"
import { Canvas } from "@react-three/fiber"
import Scene from "./Scene"
import { OrbitControls } from "@react-three/drei"
import { Physics } from "@react-three/cannon"
export const MyGame = () => {
  return (
    <div className="h-screen bg-black">
      <Canvas>
        <Physics>
          <OrbitControls />
          <Scene />
        </Physics>
      </Canvas>
    </div>
  )
}
