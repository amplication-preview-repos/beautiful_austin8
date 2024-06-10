import { Module } from "@nestjs/common";
import { PetSitterProfileModuleBase } from "./base/petSitterProfile.module.base";
import { PetSitterProfileService } from "./petSitterProfile.service";
import { PetSitterProfileController } from "./petSitterProfile.controller";
import { PetSitterProfileResolver } from "./petSitterProfile.resolver";

@Module({
  imports: [PetSitterProfileModuleBase],
  controllers: [PetSitterProfileController],
  providers: [PetSitterProfileService, PetSitterProfileResolver],
  exports: [PetSitterProfileService],
})
export class PetSitterProfileModule {}
