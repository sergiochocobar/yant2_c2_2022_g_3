<template>
  <div id="app">
    <!-- <router-link to="/">Home</router-link>
    <router-link to="/user">User</router-link> -->
    
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
        <router-link class="navbar-brand" to="/">PharmApp</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link  class="nav-link" to="/user"><img class="iconoBoton" src="./assets/user-solid.png" style="width: 20px"/></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>