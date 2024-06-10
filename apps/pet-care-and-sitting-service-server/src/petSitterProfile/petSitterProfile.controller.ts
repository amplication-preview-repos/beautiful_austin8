import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PetSitterProfileService } from "./petSitterProfile.service";
import { PetSitterProfileControllerBase } from "./base/petSitterProfile.controller.base";

@swagger.ApiTags("petSitterProfiles")
@common.Controller("petSitterProfiles")
export class PetSitterProfileController extends PetSitterProfileControllerBase {
  constructor(protected readonly service: PetSitterProfileService) {
    super(service);
  }
}
