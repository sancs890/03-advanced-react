const ErrorExample = () => {
  const handleClick = () => {
    count = count + 1
    console.log(count)
  }
  let count = 0
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleClick} type="button" className="btn">
        {' '}
        increase{' '}
      </button>
    </div>
  )
}

export default ErrorExample
