/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { HireRequest } from "./HireRequest";
import { HireRequestCountArgs } from "./HireRequestCountArgs";
import { HireRequestFindManyArgs } from "./HireRequestFindManyArgs";
import { HireRequestFindUniqueArgs } from "./HireRequestFindUniqueArgs";
import { DeleteHireRequestArgs } from "./DeleteHireRequestArgs";
import { HireRequestService } from "../hireRequest.service";
@graphql.Resolver(() => HireRequest)
export class HireRequestResolverBase {
  constructor(protected readonly service: HireRequestService) {}

  async _hireRequestsMeta(
    @graphql.Args() args: HireRequestCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [HireRequest])
  async hireRequests(
    @graphql.Args() args: HireRequestFindManyArgs
  ): Promise<HireRequest[]> {
    return this.service.hireRequests(args);
  }

  @graphql.Query(() => HireRequest, { nullable: true })
  async hireRequest(
    @graphql.Args() args: HireRequestFindUniqueArgs
  ): Promise<HireRequest | null> {
    const result = await this.service.hireRequest(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => HireRequest)
  async deleteHireRequest(
    @graphql.Args() args: DeleteHireRequestArgs
  ): Promise<HireRequest | null> {
    try {
      return await this.service.deleteHireRequest(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
