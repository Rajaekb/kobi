import Image from 'next/image'
import { FC } from 'react'


const Footer: FC = () => {
  return (
  <div className='h-14 flex justify-between items-center border-t-[1px]'>
    <div> © 2023 Kobidev . All right Reserved</div>
    <div className='flex gap-2'>  
      <Image alt="kobifacebook" src="/3.png" width={20} height={20} />
      <Image alt="kobifacebook" src="/5.png" width={20} height={20} />
      <Image alt="kobifacebook" src="/2.png" width={20} height={20} />
      <Image alt="kobifacebook" src="/1.png" width={20} height={20} />
    </div>
  </div>
  )
}

export default Footer