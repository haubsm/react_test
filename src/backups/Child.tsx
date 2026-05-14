import Parent from './Parent'

export default function Child() {
  const abc = 123
  return (
    <>
      <Parent
        title={abc}
        name="world"
        onClick={() => {
          console.log('hello')
        }}
      />
    </>
  )
}
