<template>
  <!--  Hey, I see you! -->
  <header>
    <nav>
      <div><RouterLink :to="{name: 'accueil'}" :class="{ 'current-page': route.name === 'accueil' }">Accueil</RouterLink></div>
      <div class="submenu-parent"><a id="reals">Réalisations</a>
        <div class="submenu">
          <div v-for="link in links" :key="link.label">
            <div><RouterLink :to="{name: link.name}" :class="{ 'current-page': route.name === link.name }">{{ link.label }}</RouterLink></div>
          </div>
        </div>
      </div>
      <div v-for="link in links" :key="link.label">
        <div class="reduisible"><RouterLink :to="{name: link.name}" :class="{ 'current-page': route.name === link.name }">{{ link.label }}</RouterLink></div>
      </div>
    
      <div id="mode-toggle" @click="toggleDarkMode"><img id="switch" :src="icon" alt="mode sombre" title="Thème" @mouseenter="switchIconToLight" @mouseleave="switchIconToDark"></div>
    </nav>
  </header>
    <router-view />
  <footer>
  <div id="bas-de-page">
    <span>@2026 Paulo Moreira</span>
  
    <div>
      <span class="not-on-mobile">mes liens:</span>
      <a href="https://www.linkedin.com/in/paulo-moreira-pereira/">
        <img src="/images/linkedin.webp" alt="logo-LinkedIn">
      </a>
      <a href="https://github.com/moreirap-p">
        <img src="/images/github.webp" alt="logo-GitHub">
      </a>
    </div>
  </div>
</footer>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()

// Navbar

const links = [{ name: 'trains', label: 'TRAINS' },
  { name: 'sae3a', label: 'SAE 3a' },
  { name: 'nuisance', label: 'Nuisance Moustique' },
  { name: 'my-avatar', label: 'MyAvatar' },
  { name: 'ias', label: 'IAs' }
]

// Dark Mode

let icon = ref('images/dark-mode.webp')

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode")
  localStorage.setItem('dark', document.body.classList.contains("dark-mode") ? 'enabled' : 'disabled')
}

if (localStorage.getItem('dark') === 'enabled') document.body.classList.add('dark-mode')

function switchIconToDark() {
  icon.value = "images/dark-mode.webp"
}

function switchIconToLight() {
  icon.value = "images/dark-mode-hover.webp"
}

</script>