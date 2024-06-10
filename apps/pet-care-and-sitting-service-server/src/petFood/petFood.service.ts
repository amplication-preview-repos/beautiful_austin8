import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PetFoodServiceBase } from "./base/petFood.service.base";

@Injectable()
export class PetFoodService extends PetFoodServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
