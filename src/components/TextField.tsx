interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export default function TexField({ label, ...restProps }: Props) {
  return (
    <>
      <label className="flex items-center gap-2">
        {label && <span>{label}</span>}
        <input
          {...restProps}
          className="grow rounded-lg border border-green-300 border-green-500"></input>
      </label>
    </>
  )
}
