import { Pet as TPet } from "../api/pet/Pet";

export const PET_TITLE_FIELD = "id";

export const PetTitle = (record: TPet): string => {
  return record.id?.toString() || String(record.id);
};
