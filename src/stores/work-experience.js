import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useWorkExperienceStore = defineStore('workExperience', () => {
  const experiences = ref([])

  addExperience()

  const workExperienceSection = computed(() => ({
    columns: [
      {
        width: 120,
        text: 'Experiencia laboral',
        style: 'sectionTitle'
      },
      {
        width: '*',
        columns: [
          experiences.value.map((experience, i) => ([
            {
              text: experience.job,
              style: ['subSectionTitle', ...(i > 0 ? ['mt10'] : [])]
            },
            {
              text: `en ${experience.company}`,
              style: 'subSectionTitle'
            },
            {
              text: `${experience.startingDate} - ${experience.finishingDate}`,
              style: 'italic'
            },
            {
              text: experience.location,
              style: 'italic'
            },
            {
              text: experience.description,
              style: ['gray']
            }
          ])).flat()
        ]
      }
    ]
  }))

  const completed = computed(() => experiences.value.length > 0 && experiences.value.every(experience => experience.job && experience.company && experience.location && experience.startingDate && experience.finishingDate && experience.description))

  function set (data) {
    if (!data.experience.length) return
    experiences.value = data.experience.map(experience => ({
      job: experience.job,
      company: experience.company,
      location: '',
      startingDate: parseDate(experience.startingDate),
      finishingDate: experience.onCourse ? 'Actualidad' : parseDate(experience.finishingDate),
      description: experience.description
    }))
  }

  function addExperience () {
    experiences.value.push({
      job: '',
      company: '',
      location: '',
      startingDate: '',
      finishingDate: '',
      description: ''
    })
  }

  function parseDate (date) {
    const monthYear = new Date(date).toLocaleString('es', { month: 'short', year: 'numeric' })
    return capitalizeFirstLetter(monthYear)
  }

  function capitalizeFirstLetter (string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  return { experiences, completed, set, addExperience, workExperienceSection }
})
