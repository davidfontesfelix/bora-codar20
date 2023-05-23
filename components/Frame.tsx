interface FrameProps {
  sizeH: number
  sizeW: number
  url?: any
}

export default function Frame(props: FrameProps) {
  function checkHeight() {
    if (props.sizeH === 1) {
      return '284px'
    } else if (props.sizeH === 2) {
      return '400px'
    } else if (props.sizeH === 3) {
      return '600px'
    }
  }

  function checkWidth() {
    if (props.sizeW === 1) {
      return '384px'
    }
  }

  return (
    <div
      className={`group flex items-end bg-center ${props.url} hover:border hover:border-4`}
      style={{
        width: checkWidth(),
        height: checkHeight(),
      }}
    >
      <span className="h-[73px] w-full justify-end bg-gradient-to-t from-[#00000085] pl-6 pt-6 text-xl text-white opacity-0 group-hover:opacity-100 ">
        Abstract Name
      </span>
    </div>
  )
}
