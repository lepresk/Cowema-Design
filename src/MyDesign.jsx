import React from "react"

export default function MyDesign() {
  return (
    <div class="container">
      <div class="card mt-xl-5 m-auto">
        <div class="card-body">
          <div class="container">
            <h6 class="card-title">Création de compte</h6>
            <p class="card-subtitle">Créer un compte pour profiter du shopping en ligne</p>
            <div class="form">
              <form action="" method="post" class="formInput">
                <div class="formG form-group">
                  <label for=""></label>
                  <input type="text" class="input form-control m-auto" name="" id="" placeholder="Nom et Prénom">
                </div>
                <div class="formG form-group">
                  <label for=""></label>
                  <input style="font-family: 'Font Awesome 5 Free'; font-weight: 700;" type="text" class="input form-control m-auto" name="" id="" placeholder="Ville &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &#xf05b;">
                </div>
                <div class="formG form-group">
                  <label for=""></label>
                  <input type="phone" class="input form-control m-auto" name="" id="" placeholder="Numero de téléphone">
                    <div class="formG form-group">
                      <label for=""></label>
                      <input type="submit" class="submit form-control m-auto" name="" id="" value="CONTINUER">
                    </div>
                  </form>
                  <div class="row">
                    <div class="question col-md-4">Avez-vous un compte?</div>
                    <a class="question2 col-md-2">Connexion</a>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div class="row">
          <button class="others col md-6">S'inscrire avec facebook</button>
          <button class="others2 col md-6">S'incrire avec google</button>



        </div>
      </div>
      )
}