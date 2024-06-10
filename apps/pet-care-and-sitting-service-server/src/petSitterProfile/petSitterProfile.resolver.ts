import * as graphql from "@nestjs/graphql";
import { PetSitterProfileResolverBase } from "./base/petSitterProfile.resolver.base";
import { PetSitterProfile } from "./base/PetSitterProfile";
import { PetSitterProfileService } from "./petSitterProfile.service";

@graphql.Resolver(() => PetSitterProfile)
export class PetSitterProfileResolver extends PetSitterProfileResolverBase {
  constructor(protected readonly service: PetSitterProfileService) {
    super(service);
  }
}
