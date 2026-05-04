<script setup lang="ts">
import BoutonRetour from '@/components/BoutonRetour.vue';
import ProfileLink from '@/components/ProfileLink.vue';

</script>

<template>
<main id="bg-0">
    <div class="box extra-tp-margin">
      <h1 class="no-bt-margin">Réalisations - MyAvatar
        <a href="https://www.php.net/"><img class="mini-logo" src="/images/php.webp" alt="php" title="PHP"></a>
        <a href="https://symfony.com/"><img class="mini-logo" src="/images/symfony.webp" alt="symfony" title="Symfony"></a>
        <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript"><img class="mini-logo" src="/images/js.webp" alt="js" title="JavaScript"></a>
        <a href="https://getbootstrap.com/"><img class="mini-logo" src="/images/bootstrap.webp" alt="bootstrap" title="Bootstrap"></a>
      </h1>
      <p>Dans le contexte d'une SAE <span class="trans">(Situation d'Apprentissage et Évaluation)</span>, j'ai participé durant 4 semaines à la réalisation d'une application web, faite en <b>PHP</b> avec le framework <a href="https://symfony.com/"><b>Symfony</b></a>.
        <br>Le but était de recréer les fonctionnalités principales de <a href="https://gravatar.com/"><b>Gravatar</b></a>: pouvoir centraliser tous ses liens, et héberger une photo de profil pour qu'elle soit modifiable en parallèle sur plusieurs plateformes.</p>
      <p>Le projet mélange du php, twig, et un peu de <b>JS</b> pour que la page de profil soit réactive.</p>
      <p>Enfin, il fallait créer des commandes Symfony, permettant d'ajouter et supprimer un utilisateur en une ligne.</p>

      <p>Ce projet a été fait en équipe de 4, avec l'aide de:</p>

      <div class="horizontal">
        <ProfileLink picName="damien"/>

        <ProfileLink picName="evan"/>

        <ProfileLink picName="tordeux"/>
      </div>

      <hr class="dashed">
      <h2>Galerie</h2>
      <div class="horizontal long-imgs">
        <a href="public/images/ma-0.png"><img class="pic-large" src="/images/ma-0.png" alt="myavatar-accueil"></a>
        <a href="public/images/ma-1.png"><img class="pic-large" src="/images/ma-1.png" alt="myavatar-page-utilisateur"></a>
        <a href="public/images/ma-2.png"><img class="pic-large" src="/images/ma-2.png" alt="myavatar-msg-flash"></a>
        <a href="public/images/ma-4.png"><img class="pic-large" src="/images/ma-4.png" alt="myavatar-commandes"></a>
      </div>

      <hr class="dashed">
      <h2>Contribution / Apprentissage</h2>
      <p>Ce projet représente mes premiers pas avec un <b>framework PHP</b>, j'ai notamment géré les liens ajoutables par les utilisateurs, le mode maintenance (redirection automatique), ainsi que la partie visuelle de la page d'accueil <span class="trans">(image 1)</span>.</p>
      <p>De plus, pour tester rapidement les fonctionnalités des utilisateurs, je me suis entierement occupé des commandes suivantes:</p>

      <p class="cmd">php bin/console remove:user [login]</p>
      <p>Permet de supprimer un utilisateur (et sa photo de profil) à partir de son login.</p>

      <p class="cmd">php bin/console add:user [login] [password] [mail] [role]</p>
      <p>Ajoute un utilisateur. Aucun paramètre n'est obligatoire, car elle vérifie pour chacun s'il est vide, et si oui, demande à l'utilisateur d'entrer / choisir une valeur <span class="trans">(image 4)</span>. Pour les paramètres de contrainte "unique" comme le login et le mail, la commande vérifie qu'il n'existe pas déjà dans la bd.</p>

    </div>

    <BoutonRetour/>
  </main>
</template>