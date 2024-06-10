import { PetSitterProfileWhereInput } from "./PetSitterProfileWhereInput";
import { PetSitterProfileOrderByInput } from "./PetSitterProfileOrderByInput";

export type PetSitterProfileFindManyArgs = {
  where?: PetSitterProfileWhereInput;
  orderBy?: Array<PetSitterProfileOrderByInput>;
  skip?: number;
  take?: number;
};
