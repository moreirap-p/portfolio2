<script setup>
import BoutonRetour from '@/components/BoutonRetour.vue';
import { ref } from 'vue';

//const today = (new Date()).toLocaleDateString("fr-FR", {day: "numeric", month: "long", year: "numeric"})
const titles =
    ["Paulo","Pualo","encore Paulo","toujours Paulo","Polo","Paul","lui","lui ?","oui, lui","lui là",
        "Pablo","bon arrêtes.","svp.","stp.","(-_-)","...."]
let nb = -1
const title = ref("Paulo")
const filterStyle = ref('')

let isDisabled = localStorage.getItem('sh') === 'on'

function nextTitle() {
  if (isDisabled) return

  localStorage.setItem('sh', 'on')
  nb++

  if (nb >= titles.length) {
    title.value = titles[0]
    isDisabled = true

  } else {
    title.value = titles[nb]
  }
}

function colour(event) {
  const shadow = getComputedStyle(event.target).filter.replace(/hue-rotate\([^)]+\)/, '').trim()

  const r = Math.floor(Math.random() * 361)
  filterStyle.value = `${shadow}hue-rotate(${r}deg)`
}

</script>

<template>
    <main id="bg-acceuil">
    <div class="box extra-tp-margin">
      <h1 class="no-bt-margin">Portfolio 2024/2026 - Paulo Moreira</h1>
      <span class="italic trans">dernière mise à jour le 7 mai 2026</span>
      <hr class="dashed">
      <div class="horizontal">
        <div>
          <p><b>À propos de moi:</b></p>
          <p>Étudiant de 22 ans, passionné par l'informatique, la musique, les jeux vidéos, et l'audio-visuel en général.</p>
          <p>Je suis actuellement en dernière année de BUT informatique option RACDV.</p>
          <a target="_blank" href="public/pdfs/MoreiraPereira-CV git.pdf"><b>télécharger mon CV</b></a>
        </div>

        <img id="pualo" class="pic round" src="/images/paulo.webp" :title="title" alt="photo" @mouseenter="nextTitle" @click="colour" :style="{ filter: filterStyle }">
      </div>
      <p>J'ai toujours été intéressé par l'informatique, d'abord via les <b>jeux vidéos</b>, l'envie de savoir comment ils sont faits (ce qui m'a aussi amené à composer de la musique en tout genres), et plus récemment par le <b>développement web</b>.</p>
    </div>

    <div class="box">
      
      <h2>Biographie</h2>
      <p>Durant l'été 2023, j'ai obtenu mon <b>Baccalauréat STI2D</b> (spécialité SIN) au <a href="https://dhuoda.mon-ent-occitanie.fr/">lycée Dhuoda</a>. J'y ai appris les bases de l'électronique et de la <b>programmation embarquée</b>, notamment avec les technologies <a href="https://www.arduino.cc/"><b>Arduino</b></a>, et le <a href="https://www.python.org/"><b>Python</b></a>.</p>
      <p>Cela fait quasiment 3 ans que je suis en <b>BUT informatique</b> à <a href="https://iut-montpellier-sete.edu.umontpellier.fr/">l'IUT de Montpellier-Sète</a>. J'ai pû apprendre les notions de <b>développement efficace</b> et <b>orienté objet</b> en back-end, et d'<b>interface utilisateur</b> ergonomique en front-end. J'ai principalement travaillé en <a href="https://www.java.com/en/download/help/whatis_java.html"><b>Java</b></a>, en <a href="https://fr.wikipedia.org/wiki/C_(langage)">C</a>, et découvert les OS <a href="https://www.linux.org/pages/download/"><b>Linux</b></a> durant la première année,
      tandis que la deuxième et troisième année se concentrèrent plus sur les langages <b>web</b> comme <a href="https://www.php.net/">PHP</a> et (surtout) <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript"><b>JavaScript</b></a>.</p>

      <hr class="dashed">
      <h2>Expérience Professionnelle</h2>
      <div class="horizontal job">
        <RouterLink :to="{name: 'nuisance'}">
          <p><b>Stage (principalement) en JS chez Geomatys</b>
          <span class="trans-plus"><br>du 03/02/2025 au 28/03/2025</span></p>
          <p>Amélioration de la partie cliente (en JavaScript sous le Framework VueJs) <br>
          du portail sur la nuisance moustique, avec adaption de l’API java.</p>
        </RouterLink>
        <div>
          <a href="https://www.geomatys.com/"><img class="pic reduisible-thiner" src="/images/geomatys.webp" alt="logo-geomatys"></a>
        </div>
      </div>

      <hr class="dashed">
      <h2>Vision pour le futur</h2>
      <p>Je compte soit être accepté en <b>école d'ingénieur</b> (ou en master), soit continuer à pratiquer du web / logiciel dans mon temps libre. Si cette deuxième option s'avère vrai, j'aimerais également étudier le domaine de l'<a href="https://fr.wikipedia.org/wiki/Intelligence_artificielle_g%C3%A9n%C3%A9rative"><b>IA générative</b></a> et / ou du jeu vidéo.</p>
    </div>

    <BoutonRetour/>
    </main>

</template>
