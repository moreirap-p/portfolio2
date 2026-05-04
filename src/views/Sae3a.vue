<script setup lang="ts">
import BoutonRetour from '@/components/BoutonRetour.vue';
import ProfileLink from '@/components/ProfileLink.vue';

</script>

<template>
<main id="bg-1"> 
    <div class="box extra-tp-margin">
      <h1 class="no-bt-margin">Réalisations - SAE 3a 
        <a href="https://mariadb.org/"><img class="mini-logo" src="/images/mariadb.webp" alt="mariadb" title="MariaDB"></a>
        <a href="https://www.postgresql.org/"><img class="mini-logo" src="/images/postgresql.webp" alt="postgresql" title="PostGreSQL"></a>
        <a href="https://www.php.net/"><img class="mini-logo" src="/images/php.webp" alt="php" title="PHP"></a>
        <a href="https://developer.mozilla.org/fr/docs/Web/HTML"><img class="mini-logo" src="/images/html.webp" alt="html" title="HTML"></a>
      </h1>
      <p>Dans le contexte d'une SAE <span class="trans">(Situation d'Apprentissage et Évaluation)</span>, nous avons dû créer (en ~4 mois) une application en <b>PHP</b> reliée à une base de données.</p>
      <p>Au département informatique de l’IUT de Montpellier-Sète, le logiciel libre <a href="https://scodoc.org/"><b>Scodoc</b></a> est utilisé pour gérer les absences et notes les étudiants tout au long de leur scolarité à l’IUT.</p>
      <p>Cependant, il n’y a actuellement pas de logiciel permettant aux jurys, enseignants et écoles recrutantes de facilement analyser / comparer ces résultats à la fin de l’année. L'IUT a donc besoin d'une plateforme web sécurisée pour gérer la poursuite d'étude des étudiants.</p>
      <p>Cette réalisation devait donc formaliser tous ces résultats pour faire ressortir le profil de chaque étudiant, et de pouvoir le comparer à d’autres peu importe leur parcours.</p>
      <p>De plus, le projet a été réalisé en applicant une méthode agile de développement, avec une revue de sprint <span class="trans">(= phase)</span> effectuée toutes les 4 à 6 semaines en présenciel avec le client.</p>

      <p>Ce projet a été fait en équipe de 5, avec l'aide de:</p>

      <div class="horizontal">
        <ProfileLink picName="hicham"/>

        <ProfileLink picName="damien"/>

        <ProfileLink picName="evan"/>

        <ProfileLink picName="marc"/>
      </div>

      <hr class="dashed">
      <h2>Galerie</h2>
      <div class="horizontal long-imgs">
        <a href="public/images/sae3a-0.PNG"><img class="pic-large" src="/images/sae3a-0.PNG" alt="sae3a-interface"></a>
        <a href="public/images/sae3a-1.PNG"><img class="pic-large" src="/images/sae3a-1.PNG" alt="sae3a-interface"></a>
        <a href="public/images/sae3a-2.PNG"><img class="pic-large" src="/images/sae3a-2.PNG" alt="sae3a-interface"></a>
        <a href="public/images/sae3a-4.PNG"><img class="pic-large" src="/images/sae3a-4.PNG" alt="sae3a-interface"></a>
      </div>

      <hr class="dashed">
      <h2>Contribution / Apprentissage</h2>
      <p>Ma contribution principale à ce projet fut la structure de la base de données <span class="trans">(et ses fonctions / procédures / triggers / vues)</span>, la possibilité d'importer les résultats d'un semestre à partir des fichiers venant de Scodoc <span class="trans">(image 4)</span>, et la génération d'un pdf avec tous les avis de pousuite d'étude attribués à un étudiant <span class="trans">(image 3)</span>.</p>
      <p>Nous avons débuté le projet en utilisant une base de donnée fonctionnant sous <b>MariaDB</b>, mais nous avons jugé préférable de passer vers <b>PostGreSQL</b>, ce qui m'a donné beacoup d'expérience dans les languages de bd relationelles, en plus des connaissances approfondies en PHP où les principes de <a href="https://fr.wikipedia.org/wiki/Mod%C3%A8le-vue-contr%C3%B4leur">structure MVC</a> et <a href="https://fr.wikipedia.org/wiki/CRUD">CRUD</a> ont été appliqués.</p>
    </div>

    <BoutonRetour/>

  </main>
</template>