import React, { useRef, useState } from "react"
import { ThreeElements } from "@react-three/fiber"
import { PlaneProps, useBox, usePlane } from "@react-three/cannon"
import { Mesh } from "three"

function Box(props: ThreeElements["mesh"]) {
  const [ref, api] = useBox(
    () => ({ mass: 1, position: [0, 0, 0] }),
    useRef<Mesh>(null)
  )
  return (
    <mesh ref={ref} position={[0, 5, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  )
}
function Plane(props: PlaneProps) {
  const [ref] = usePlane(
    () => ({
      rotation: [-Math.PI / 2, 0, 0],
      position: [0, -2, 0],
      ...props
    }),
    useRef<Mesh>(null)
  )
  return (
    <mesh ref={ref} position={[0, -10, 0]}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color={"blue"} />
    </mesh>
  )
}
const Scene = () => {
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, 0]} />
      <Plane />
    </>
  )
}

export default Scene
