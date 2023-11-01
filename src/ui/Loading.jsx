import { FaSpinner } from "react-icons/fa"

export const Loading = () => {
  return (
    <div className="flex justify-center items-center text-4xl mt-5 h-[600px]">
      <FaSpinner className="icon-spin" />
    </div>
  )
}
