import { paths } from "./schema";

import { Fetcher } from "openapi-typescript-fetch";

// declare fetcher for paths
const fetcher = Fetcher.for<paths>()

// global configuration
fetcher.configure({
  baseUrl: "https://petstore.swagger.io/v2",
  init: {
    headers: {},
  },
  use: [] // middlewares
})

const findPetsByStatus = fetcher.path("/pet/findByStatus").method("get").create()

const addPet = fetcher.path("/pet").method("post").create()

try {
  const { status, data: pets } = await findPetsByStatus({
    status: "available",
  })
  const newPet = await addPet({
    name: "みけ",
    photoUrls: ['localhost:3000/mike.jpg']
  })

} catch(e) {
  // check which operation threw the exception
  if (e instanceof addPet.Error) {
    // get discriminated union { status, data }
    const error = e.getActualType()
    error.status
    if (error.status === 405) {
      //handling error
    }
  }
}