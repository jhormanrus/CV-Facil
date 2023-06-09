import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WizardView from '../views/WizardView.vue'
import HomeBackground from '../components/HomeBackground.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: HomeBackground,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: 'import-cv',
          name: 'import-cv',
          component: () => import('../views/ImportCvView.vue')
        },
        {
          path: 'export-cv',
          name: 'export-cv',
          component: () => import('../views/ExportCvView.vue')
        }
      ]
    },
    {
      path: '/wizard',
      name: 'wizard',
      component: WizardView,
      children: [
        {
          path: '',
          name: 'progress-tracker',
          component: () => import('../components/ProgressTracker.vue')
        },
        {
          path: 'personal-information',
          name: 'personal-information',
          component: () => import('../components/form/PersonalInfoForm.vue')
          // component: () => import('../views/wizard/PersonalInformationView.vue')
        },
        {
          path: 'web-page',
          name: 'web-page',
          component: () => import('../components/form/WebPageForm.vue')
        },
        {
          path: 'professional-profile',
          name: 'professional-profile',
          component: () => import('../components/form/ProfessionalProfileForm.vue')
        },
        {
          path: 'work-experience',
          name: 'work-experience',
          component: () => import('../components/form/WorkExperienceForm.vue')
        },
        {
          path: 'education',
          name: 'education',
          component: () => import('../components/form/EducationForm.vue')
        },
        {
          path: 'technical-skills',
          name: 'technical-skills',
          component: () => import('../components/form/TechnicalSkillsForm.vue')
        },
        {
          path: 'aditional-skills',
          name: 'aditional-skills',
          component: () => import('../components/form/AditionalSkillsForm.vue')
        }
      ]
    }
  ]
})

export default router
