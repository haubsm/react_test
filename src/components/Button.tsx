import Loader from './Loader'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  loading?: boolean
}

export default function Button({
  children,
  loading = false,
  ...restProps
}: Props) {
  return (
    <button
      className="relative h-[36px] min-w-[100px] rounded-lg bg-blue-500 text-white duration-100 hover:bg-blue-300"
      {...restProps}>
      {loading ? <Loader color="white" /> : children}
    </button>
  )
}
