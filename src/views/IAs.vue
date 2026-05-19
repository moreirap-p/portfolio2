<script setup lang="ts">
import BoutonRetour from '@/components/BoutonRetour.vue';
import ProfileLink from '@/components/ProfileLink.vue';

</script>

<template>
<main id="bg-12">
    <div class="box extra-tp-margin">
      <h1 class="no-bt-margin">Réalisations - Elaboration d'IAs
        <a href="https://www.python.org/about/"><img class="mini-logo" src="/images/python.webp" alt="python" title="Python"></a>
        <a href="https://gymnasium.farama.org/"><img class="mini-logo" src="/images/gymnasium.webp" alt="gymnasium" title="Gymnasium"></a>
      </h1>
      <p>Dans le contexte d'une SAE <span class="trans">(Situation d'Apprentissage et Évaluation)</span>, j'ai suivis durant une partie de l'année, des cours de <b>Stanford</b> <a class="italic trans" href="https://www.youtube.com/playlist?list=PLoROMvodv4rN4wG6Nk6sNpTEbuOSosZdX">(disponibles ici)</a> sur le <a>reinforcement learning</a> et les algorithmes qui le permettent.
      Ces différents algorithmes ont ensuite été implémentés en <b>Python</b> sur des environnements de la librairie <b>Gymnasium</b> (qui se base sur la libraire <a href="https://aiwiki.ai/wiki/Gym">Gym</a> d'<a href="https://openai.com/about/">OpenAI</a>).</p>
      <p>Les connaissances acquises ont ensuite été regroupées dans un document devant servir de cours pour introduir les concepts à des élèves.</p>
      <p>De plus, le projet a été réalisé en applicant une méthode agile de développement, avec une revue de sprint <span class="trans">(= phase)</span> effectuée en présentiel chaque semaine.</p>

      <p>Ce projet a été fait en équipe de 6, avec l'aide de:</p>

      <div class="horizontal">
        <ProfileLink picName="hicham"/>

        <ProfileLink picName="damien"/>

        <ProfileLink picName="evan"/>

        <ProfileLink picName="mattéo"/>

        <ProfileLink picName="tordeux"/>
      </div>

      <hr class="dashed">
      <h2>Galerie</h2>
      <div class="horizontal long-imgs">
        <a href="images/ia-0.png"><img class="pic-large" src="/images/ia-0.png" alt="ia-policy-evaluation"></a>
        <a href="images/ia-1.png"><img class="pic-large" src="/images/ia-1.png" alt="ia-mountain-car"></a>
        <a href="images/ia-2.png"><img class="pic-large" src="/images/ia-2.png" alt="ia-sarsa"></a>
        <a href="images/ia-4.png"><img class="pic-large" src="/images/ia-4.png" alt="ia-sarsa2"></a>
      </div>

      <hr class="dashed">
      <h2>Contribution / Apprentissage</h2>
      <p>Il est important à noter que chacun d'entre nous a travaillé des méthodes / environnements différents. Ma contribution principale à ce projet doit être l'algorithme de policy evaluation <span class="trans">(image 1)</span>.
        Sinon, en terme d'implémentations j'ai fait un <a href="https://en.wikipedia.org/wiki/Q-learning">Q-Learning</a> basique puis un <a href="https://en.wikipedia.org/wiki/State%E2%80%93action%E2%80%93reward%E2%80%93state%E2%80%93action">SARSA</a> sur MoutainCar. Enfin, j'ai étudié et rédigé l'explication du <a href="https://en.wikipedia.org/wiki/Minimax">MinMax</a>, et de son optimisation: <a href="https://en.wikipedia.org/wiki/Alpha%E2%80%93beta_pruning">Alpha-Beta</a>.</p>
    </div>

    <BoutonRetour/>

  </main>
</template>