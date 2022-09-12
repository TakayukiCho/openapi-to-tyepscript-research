import axiosClient from '@aspida/axios'
import api from "./sample/$api"
import type { Pet } from './sample/@types'

;(async () => {
  const client = api(axiosClient())

  await client.pet.$post({
    body: {
      name: 'hoge',
      photoUrls: [],
      status: 'available'
    },
    config: {
      headers: {
        'Authorization': 'bearer SOME TOKEN'
      }
    }

  })
  const pet = await client.pet._petId(100).$get()
  console.log(pet)
})()
