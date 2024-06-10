import * as graphql from "@nestjs/graphql";
import { HireRequestResolverBase } from "./base/hireRequest.resolver.base";
import { HireRequest } from "./base/HireRequest";
import { HireRequestService } from "./hireRequest.service";

@graphql.Resolver(() => HireRequest)
export class HireRequestResolver extends HireRequestResolverBase {
  constructor(protected readonly service: HireRequestService) {
    super(service);
  }
}
