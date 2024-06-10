import { HireRequestWhereInput } from "./HireRequestWhereInput";
import { HireRequestOrderByInput } from "./HireRequestOrderByInput";

export type HireRequestFindManyArgs = {
  where?: HireRequestWhereInput;
  orderBy?: Array<HireRequestOrderByInput>;
  skip?: number;
  take?: number;
};
