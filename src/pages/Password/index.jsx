import React from "react"
import { Link, useSearchParams } from "react-router-dom"
import Input from "../../components/Input"

import "./Password.css"

function PasswordReset() {
  const [searchParams] = useSearchParams()

  console.log(searchParams.get("name"))

  return (
    <div className="container-fluid main-content">
      <div className="row login-container d-flex justify-content-center align-items-center">
        <div className="col-5 mx-auto">
          <div className="card">
            <div className="card-body card-padding-large">
              <h4 className="card-title mt-4 color-primary text-center">Réinitialiser le mot de passe</h4>
              <p className="text-center">Créer votre compte pour profiter du shopping en ligne au Congo.</p>

              <form className="mt-5">

                <Input type="text" />

                <div className="d-grid mb-4">
                  <button className="btn button-primary">Continuer</button>
                </div>

                <Link to="/">Créer un compte</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PasswordReset