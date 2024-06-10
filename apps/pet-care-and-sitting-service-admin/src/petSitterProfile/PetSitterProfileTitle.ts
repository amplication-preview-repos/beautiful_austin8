import { PetSitterProfile as TPetSitterProfile } from "../api/petSitterProfile/PetSitterProfile";

export const PETSITTERPROFILE_TITLE_FIELD = "id";

export const PetSitterProfileTitle = (record: TPetSitterProfile): string => {
  return record.id?.toString() || String(record.id);
};
