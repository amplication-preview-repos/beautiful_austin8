import { PetFood as TPetFood } from "../api/petFood/PetFood";

export const PETFOOD_TITLE_FIELD = "id";

export const PetFoodTitle = (record: TPetFood): string => {
  return record.id?.toString() || String(record.id);
};
