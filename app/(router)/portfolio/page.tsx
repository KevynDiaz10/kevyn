import MotionTransition from '@/app/components/transition-component'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <>
    <MotionTransition position="bottom" className='bottom-0 left-0 hidden md:inline-block md:absolute'>
      <Image src={"/avatar-works.png"} alt='' width={300} height={300} className=''/>
    </MotionTransition>
    </>
  )
}
