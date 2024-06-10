import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PetSitterProfileServiceBase } from "./base/petSitterProfile.service.base";

@Injectable()
export class PetSitterProfileService extends PetSitterProfileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
