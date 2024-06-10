import { PetFoodWhereInput } from "./PetFoodWhereInput";
import { PetFoodOrderByInput } from "./PetFoodOrderByInput";

export type PetFoodFindManyArgs = {
  where?: PetFoodWhereInput;
  orderBy?: Array<PetFoodOrderByInput>;
  skip?: number;
  take?: number;
};
