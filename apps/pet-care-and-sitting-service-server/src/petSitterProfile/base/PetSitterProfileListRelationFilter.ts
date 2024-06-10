/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PetSitterProfileWhereInput } from "./PetSitterProfileWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PetSitterProfileListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PetSitterProfileWhereInput,
  })
  @ValidateNested()
  @Type(() => PetSitterProfileWhereInput)
  @IsOptional()
  @Field(() => PetSitterProfileWhereInput, {
    nullable: true,
  })
  every?: PetSitterProfileWhereInput;

  @ApiProperty({
    required: false,
    type: () => PetSitterProfileWhereInput,
  })
  @ValidateNested()
  @Type(() => PetSitterProfileWhereInput)
  @IsOptional()
  @Field(() => PetSitterProfileWhereInput, {
    nullable: true,
  })
  some?: PetSitterProfileWhereInput;

  @ApiProperty({
    required: false,
    type: () => PetSitterProfileWhereInput,
  })
  @ValidateNested()
  @Type(() => PetSitterProfileWhereInput)
  @IsOptional()
  @Field(() => PetSitterProfileWhereInput, {
    nullable: true,
  })
  none?: PetSitterProfileWhereInput;
}
export { PetSitterProfileListRelationFilter as PetSitterProfileListRelationFilter };
