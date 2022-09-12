import { OpenAPI, PetService } from "./generated";

OpenAPI.TOKEN = async () => {
  // read from cookie
  return 'SOME BEARER'
}

const pet = await PetService.addPet({
  name: 'test',
  photoUrls: []
});
