import React, { useState } from "react"

let currentId = 1

// function Counter({ formVisible }) {
//   const [value, setValue] = useState(0)

//   return (
//     <div>
//       <h2>{value}</h2>
//       <p>Formulaire visible : {JSON.stringify(formVisible)}</p>
//       <button onClick={() => setValue(value + 1)}>Incrementer</button>
//     </div>
//   )
// }

const UserForm = ({ user, onSubmit, onCancel }) => {

  const formUser = user || { id: null, lastName: '', firstName: '', email: '' }

  const [firstName, setFirstName] = useState(formUser.firstName)
  const [lastName, setLastName] = useState(formUser.lastName)
  const [email, setEmail] = useState(formUser.email)

  const handleSubmit = () => {
    const user = {
      id: formUser.id,
      firstName,
      lastName,
      email
    }

    setFirstName('')
    setLastName('')
    setEmail('')

    onSubmit(user)
  }

  return (
    <div className="row">
      <div className="col-6">
        <div className="mb-3">
          <label className="form-label">Nom</label>
          <input type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Prénom</label>
          <input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <button className="btn d-inline-block btn-primary mr-2" onClick={handleSubmit}>Enregistrer</button>
          <button className="btn btn-danger" onClick={onCancel}>Annuler</button>
        </div>
      </div>
    </div>
  )
}

export default function Home() {

  const [users, setUsers] = useState([])
  const [formVisible, setFormVisible] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  const handleCancel = () => {
    setFormVisible(false)
    setCurrentUser(null)
  }

  const handleSubmit = (user) => {
   
    setUsers((oldState) => {
      if (user.id) {
        const index = oldState.findIndex(item => item.id === user.id)
        const userToEdit = oldState[index]

        const newUser = { ...userToEdit, ...user }
        const newUsers = [...oldState]

        newUsers[index] = newUser

        return newUsers
      } else {
        currentId++
        user.id = currentId
        return [...oldState, user]
      }
    })
    setFormVisible(false)
  }

  const handleDelete = (userId) => {
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
  }

  const handleEditClick = (user) => {
    setCurrentUser(user)
    setFormVisible(true)
  }

  return (
    <div className="container py-5">
      {!formVisible && <button className="btn btn-primary" onClick={() => setFormVisible(true)}>Nouveau</button>}

      {formVisible && <UserForm user={currentUser} onCancel={handleCancel} onSubmit={handleSubmit} />}

      { /*formVisible ? <UserForm onCancel={handleCancel} onSubmit={handleSubmit} /> : null*/}

      <table className="table mt-4">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>
                <button className="btn btn-sm btn-info mr-2" onClick={() => handleEditClick(user)}>Editer</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(user.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <Counter formVisible={formVisible} /> */}
    </div>
  )
}
