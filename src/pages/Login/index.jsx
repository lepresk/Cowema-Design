import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import Input from "../../components/Input"
import "./Login.css"

function Login() {

  const navivate = useNavigate()
  const [name, setName] = useState('')

  function onNameChanged(e) {
    setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    navivate(`/reset-password?name=${name}`)
  }

  return (
    <div className="container-fluid main-content">
      <div className="row login-container d-flex justify-content-center align-items-center">
        <div className="col-5 mx-auto">
          <div className="card">
            <div className="card-body card-padding-large">
              <h4 className="card-title mt-4 color-primary text-center">Création de compte</h4>
              <p className="text-center">Créer votre compte pour profiter du shopping en ligne au Congo.</p>

              <form className="mt-5" onSubmit={handleSubmit}>

                <Input type="text" />

                <Input placeholder="Nom et Prénom" type="text" value={name} onChange={onNameChanged} />

                <Input type="email" placeholder="Email" />

                <Input type="text" placeholder="Numéro de téléphone" />

                <div className="d-grid mb-4">
                  <Button type="submit">Continuer</Button>
                </div>

                <Link to="/reset-password">Mot de passe oublié</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login