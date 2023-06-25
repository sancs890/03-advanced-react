import { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Sanjeev',
    age: 28,
    hobby: 'Lying on the bed',
  })
  const showNewPerson = () => {
    // setPerson({
    //   name: 'Alagur',
    //   age: 28,
    //   hobby: 'Not Lying on the bed',
    // })
    setPerson({ ...person, name: 'Srushti' })
  }
  const { name, age, hobby } = { ...person }
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>Enjoys : {hobby}</p>
      <button type="button" className="btn" onClick={showNewPerson}>
        Show Alagur
      </button>
    </div>
  )
}

export default UseStateObject
