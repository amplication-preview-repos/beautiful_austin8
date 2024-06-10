/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { BillService } from "../bill.service";
import { BillCreateInput } from "./BillCreateInput";
import { Bill } from "./Bill";
import { BillFindManyArgs } from "./BillFindManyArgs";
import { BillWhereUniqueInput } from "./BillWhereUniqueInput";
import { BillUpdateInput } from "./BillUpdateInput";

export class BillControllerBase {
  constructor(protected readonly service: BillService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Bill })
  async createBill(@common.Body() data: BillCreateInput): Promise<Bill> {
    return await this.service.createBill({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Bill] })
  @ApiNestedQuery(BillFindManyArgs)
  async bills(@common.Req() request: Request): Promise<Bill[]> {
    const args = plainToClass(BillFindManyArgs, request.query);
    return this.service.bills({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Bill })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async bill(
    @common.Param() params: BillWhereUniqueInput
  ): Promise<Bill | null> {
    const result = await this.service.bill({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Bill })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBill(
    @common.Param() params: BillWhereUniqueInput,
    @common.Body() data: BillUpdateInput
  ): Promise<Bill | null> {
    try {
      return await this.service.updateBill({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Bill })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBill(
    @common.Param() params: BillWhereUniqueInput
  ): Promise<Bill | null> {
    try {
      return await this.service.deleteBill({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
