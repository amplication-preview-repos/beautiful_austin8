import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HireRequestServiceBase } from "./base/hireRequest.service.base";

@Injectable()
export class HireRequestService extends HireRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
