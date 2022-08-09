import React from "react"
import { Canvas } from "@react-three/fiber"
import Scene from "./Scene"
import { OrbitControls } from "@react-three/drei"

export const MyGame = () => {
  return (
    <div className="h-screen bg-black">
      <Canvas>
        <OrbitControls />
        <Scene />
      </Canvas>
    </div>
  )
}
