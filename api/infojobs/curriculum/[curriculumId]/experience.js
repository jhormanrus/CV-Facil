import wretch from 'wretch'
import { allowCors } from '../../../../src/middlewares/cors'

const clientId = process.env.CLIENT_ID ?? ''
const clientSecret = process.env.CLIENT_SECRET ?? ''

async function handler (req, res) {
  const bearer = req.headers.authorization
  const base64Credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')

  const { curriculumId } = req.query

  const data = wretch(`https://api.infojobs.net/api/2/curriculum/${curriculumId}/experience`)
    .accept('application/json')
    .auth(`Basic ${base64Credentials}, ${bearer}`)
    .get()

  const experience = await data.json()

  return res.json(experience)
}

export default allowCors(handler)
