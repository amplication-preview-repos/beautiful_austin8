import { Module } from "@nestjs/common";
import { HireRequestModuleBase } from "./base/hireRequest.module.base";
import { HireRequestService } from "./hireRequest.service";
import { HireRequestController } from "./hireRequest.controller";
import { HireRequestResolver } from "./hireRequest.resolver";

@Module({
  imports: [HireRequestModuleBase],
  controllers: [HireRequestController],
  providers: [HireRequestService, HireRequestResolver],
  exports: [HireRequestService],
})
export class HireRequestModule {}
