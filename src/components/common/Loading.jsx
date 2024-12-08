import { ClockLoader } from "react-spinners"


const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <ClockLoader size={70} color="teal" />
    </div>
  )
}

export default Loading