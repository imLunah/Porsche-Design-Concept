import './App.css'
import { useState, Suspense, useRef, useFrame } from "react"

import { Canvas } from "@react-three/fiber"
import { Stage, CameraControls, Text3D, } from "@react-three/drei"
import Porsche from '../public/Porsche'
import { useControls } from "leva"
import { SiPorsche } from "react-icons/si";


const PorscheCar = ({ position, rotation, scale }) => {

  // const {x1, y1, z1} = useControls({
  //     x1: {
  //       value: 0,
  //       min: -100,
  //       max: 100,
  //       step: 0.01

  //     },
  //     y1: {
  //       value: 0,
  //       min: -100,
  //       max: 100,
  //       step: 0.01

  //     },
  //     z1: {
  //       value: 0,
  //       min: -100,
  //       max: 100,
  //       step: 0.01

  //     },

  // })

  return (

    <mesh position={position} rotation={rotation} scale={scale}>
      <Porsche />

    </mesh>


  )

}

const App = () => {


  return <div className="h-screen text-white">


    <div >

      <ul className="flex justify-center items-center flex-row gap-40 mt-10 font-semibold text-xl"  >

        <li className="mr-52"> <SiPorsche /> </li>
        <li> <a href=""> Highlights </a> </li>
        <li> <a href=""> Design </a></li>
        <li> <a href=""> Performance </a> </li>
        <li> <a href=""> Charging </a> </li>
        <li><a href="" > Configure </a>  </li>
      </ul>



    </div>

    <div className="flex justify-center items-center gap-10 flex-wrap flex-col ">
      <h1 className="font-bold text-7xl text-center mt-20"> Have an immersive experience </h1>
      <a href="https://www.porsche.com/usa/?cs_redirect=1" className="border-solid border-2 py-2 px-6 rounded-full font-bold hover:bg-stone-950"> Explore </a>

    </div>

    <Canvas camera={{ position: [20, 2.5, -7] }}  >
      <color attach="background" args={['#0e0e0e']} />

      <Stage intensity={0.5}
        adjustCamera={false}
        environment="city">




        <Text3D
          curveSegments={500}
          bevelEnabled
          bevelThickness={0.1}
          height={0.5}

          lineHeight={0.8}
          size={1.5}
          position={[-2, 6, 1]}
          rotation={[12.55,3,0]}


          font="/Lastica_Regular.json">
          {`911 GT3`}
          <meshPhysicalMaterial color={'#B12B28'} />
        </Text3D>

        <CameraControls polarRotateSpeed={[1]} truckSpeed={[1]} minZoom={0} />



        <Suspense fallback={null}>
          <PorscheCar position={[2,6,1]} scale={3}/>
        </Suspense>

      </Stage>

    </Canvas>

    <h1> Hello </h1>




  </div>


}


export default App
