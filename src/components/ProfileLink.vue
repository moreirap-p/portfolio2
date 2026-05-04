<script setup lang="ts">
import { computed } from 'vue'

const profiles = [{name: 'Hicham Ferhani', picName: 'hicham', linkedIn: 'https://www.linkedin.com/in/hicham-ferhani/'},
    {name: 'Damien Rostaing', picName: 'damien', linkedIn: 'https://www.linkedin.com/in/damien-rostaing/'},
    {name: 'Evan Nunes', picName: 'evan', linkedIn: 'https://www.linkedin.com/in/evan-nunes/'},
    {name: 'Marc Haye', picName: 'marc', linkedIn: 'https://www.linkedin.com/in/marc-haye/'},
    {name: 'Yann Bodiguel', picName: 'yann', linkedIn: 'https://www.linkedin.com/in/green-jacket/'},
    {name: 'Mattéo Benhalima', picName: 'mattéo', linkedIn: 'https://www.linkedin.com/in/matt%C3%A9o-benhalima/'},
    {name: 'Mattéo Tordeux', picName: 'tordeux', linkedIn: 'https://www.linkedin.com/in/matt%C3%A9o-tordeux/'}
] as const

type PicName = typeof profiles[number]['picName']

const props = defineProps<{
  picName: PicName
}>()

const profile = computed(() =>
  profiles.find(p => p.picName === props.picName)
)
</script>

<template>
    <div v-if="profile" class="force-block">
        <a :href="`${ profile.linkedIn }`"><img class="pic round medium" :src="`images/${ picName }.webp`" :alt="`linkedin-${ profile.picName }`"></a>
        <span>{{ profile.name }}</span>
    </div>
</template>