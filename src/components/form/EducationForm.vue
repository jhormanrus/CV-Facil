<script setup>
import { useEducationStore } from '../../stores/education'
import BasicInput from '../BasicInput.vue'
import PrimaryRouterButton from '../PrimaryRouterButton.vue'
import SecondaryButton from '../SecondaryButton.vue'
import SecondaryRouterButton from '../SecondaryRouterButton.vue'
import SimpleTrash from '../icons/SimpleTrash.vue'

const educationStore = useEducationStore()
</script>

<template>
  <div class="flex flex-col gap-10 w-full max-w-xl">
    <div class="space-y-6">
      <h2 class="text-3xl font-bold text-stone-600">
        Tu educación
      </h2>
      <p class="font-bold text-base text-stone-400">
        Describe tu educación, incluyendo tu título, la institución y el periodo de tiempo.
      </p>
    </div>
    <div class="space-y-6">
      <template v-for="(education, index) in educationStore.educations" :key="index">
        <div class="flex items-center gap-4 text-lg font-bold">
          <div class="w-12 h-12 bg-stone-800 text-stone-200 rounded-full flex justify-center items-center">{{ index + 1 }}</div>
          <span class="text-stone-700">
            {{ education.title? education.title : 'Educación' }}
          </span>
          <button v-if="educationStore.educations.length > 1" @click="educationStore.removeEducation(index)" type="button" class="ms-auto w-12 h-12 bg-stone-100/30 border border-stone-200 hover:border-stone-300 transition duration-300 rounded-full shadow-lg shadow-stone-400/10 hover:shadow-stone-400/20 flex justify-center items-center">
            <SimpleTrash class="w-5 h-5" />
          </button>
        </div>
        <div class="flex gap-6">
          <BasicInput v-model="education.title" id="title-{{ index }}" label="Título" placeholder="Ingeniería de software" class="grow" />
          <BasicInput v-model="education.institution" id="institution-{{ index }}" label="Institución" placeholder="Universidad de Oxford" class="grow" />
        </div>
        <div class="flex gap-6">
          <BasicInput v-model="education.location" id="location-{{ index }}" label="Ubicación" placeholder="Remoto" class="grow" />
          <BasicInput v-model="education.startingDate" id="starting-date-{{ index }}" label="Inicio" placeholder="2015" class="grow" />
          <BasicInput v-model="education.finishingDate" id="finishing-date-{{ index }}" label="Fin" placeholder="2019" class="grow" />
        </div>
      </template>
    </div>
    <div class="flex gap-4">
      <SecondaryButton @click="educationStore.addEducation">
        Añadir educación
      </SecondaryButton>
      <SecondaryRouterButton to="/wizard" class="ms-auto">
        Volver
      </SecondaryRouterButton>
      <PrimaryRouterButton to-route-name="technical-skills">
        Siguiente
      </PrimaryRouterButton>
    </div>
  </div>
</template>
