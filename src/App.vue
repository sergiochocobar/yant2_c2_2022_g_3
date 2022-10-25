<template>
  <div id="app">

    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
        <router-link class="navbar-brand" to="/"><img src="./assets/logoPharmApp.png" style="width: 55px"/>PharmApp</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item pe-3">
              <router-link  class="nav-link" to="/"><img src="./assets/user-solid.png" style="width: 25px"/></router-link>
            </li>
            <li class="nav-item">
              <router-link  class="nav-link" to="/user"><img src="./assets/gear-solid.png" style="width: 25px"/></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>