import * as graphql from "@nestjs/graphql";
import { PetFoodResolverBase } from "./base/petFood.resolver.base";
import { PetFood } from "./base/PetFood";
import { PetFoodService } from "./petFood.service";

@graphql.Resolver(() => PetFood)
export class PetFoodResolver extends PetFoodResolverBase {
  constructor(protected readonly service: PetFoodService) {
    super(service);
  }
}
