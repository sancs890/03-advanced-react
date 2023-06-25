import React from 'react'
import { data } from '../../../data'
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)
  const removeMember = (id) => {
    const newPeople = people.filter((p) => p.id !== id)
    setPeople(newPeople)
  }
  const clearAll = () => {
    setPeople([])
  }
  return (
    <div>
      <h4>Here are the members</h4>
      <ul>
        {people.map((d1) => {
          return (
            <div key={d1.id}>
              <li>{d1.name}</li>
              <button type="button" onClick={() => removeMember(d1.id)}>
                remove
              </button>
            </div>
          )
        })}
      </ul>
      <button type="button" className="btn" onClick={clearAll}>
        Clear All
      </button>
    </div>
  )
}

export default UseStateArray
