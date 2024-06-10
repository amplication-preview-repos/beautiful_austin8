import { Module } from "@nestjs/common";
import { PetFoodModuleBase } from "./base/petFood.module.base";
import { PetFoodService } from "./petFood.service";
import { PetFoodController } from "./petFood.controller";
import { PetFoodResolver } from "./petFood.resolver";

@Module({
  imports: [PetFoodModuleBase],
  controllers: [PetFoodController],
  providers: [PetFoodService, PetFoodResolver],
  exports: [PetFoodService],
})
export class PetFoodModule {}
