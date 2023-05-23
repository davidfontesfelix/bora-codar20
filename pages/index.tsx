import Image from 'next/image'
import ArrowDownRight from '../assets/arrow-down-right.svg'
import { Hepta_Slab } from 'next/font/google'

import Frame from '@/components/Frame'

const heptaSlap = Hepta_Slab({
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div className={`h-full w-full bg-[#121214] ${heptaSlap.className}`}>
      {/* Noise */}
      <div className=" absolute bg-[url(../assets/noise-effect-ruido.svg)] bg-cover bg-repeat"></div>

      <div className="flex justify-center gap-[10px]">
        <div className="relative z-10  w-[385px] pt-[140px] text-5xl">
          <h1 className="z-10 font-hepta text-white">
            The — <br /> Abstract <br /> Gallery
          </h1>
          <Image className="mt-8" alt="" src={ArrowDownRight} />
        </div>
        <div className="relative ">
          <div className=" mt-[140px] flex gap-8">
            <Frame
              url={'bg-[url(../assets/frames/img4.png)]'}
              sizeH={3}
              sizeW={1}
            />
            <div className="flex flex-col gap-8">
              <Frame
                url={'bg-[url(../assets/frames/img2.png)]'}
                sizeH={1}
                sizeW={1}
              />
              <Frame
                url={'bg-[url(../assets/frames/img3.png)]'}
                sizeH={1}
                sizeW={1}
              />
            </div>
          </div>
          <div className="mt-8">
            <Frame
              url={'bg-[url(../assets/frames/img1.png)]'}
              sizeH={2}
              sizeW={2}
            />
          </div>
          <div className="mt-6 flex gap-8">
            <div className="flex flex-col gap-8">
              <Frame
                url={'bg-[url(../assets/frames/img5.png)]'}
                sizeH={1}
                sizeW={1}
              />
              <Frame
                url={'bg-[url(../assets/frames/img7.png)]'}
                sizeH={1}
                sizeW={1}
              />
            </div>
            <Frame
              url={'bg-[url(../assets/frames/img6.png)]'}
              sizeH={3}
              sizeW={1}
            />
          </div>
          <div className="mb-20 mt-8">
            <Frame
              url={'bg-[url(../assets/frames/img8.png)]'}
              sizeH={2}
              sizeW={2}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
