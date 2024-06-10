import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PetFoodService } from "./petFood.service";
import { PetFoodControllerBase } from "./base/petFood.controller.base";

@swagger.ApiTags("petFoods")
@common.Controller("petFoods")
export class PetFoodController extends PetFoodControllerBase {
  constructor(protected readonly service: PetFoodService) {
    super(service);
  }
}
