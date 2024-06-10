import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HireRequestService } from "./hireRequest.service";
import { HireRequestControllerBase } from "./base/hireRequest.controller.base";

@swagger.ApiTags("hireRequests")
@common.Controller("hireRequests")
export class HireRequestController extends HireRequestControllerBase {
  constructor(protected readonly service: HireRequestService) {
    super(service);
  }
}
