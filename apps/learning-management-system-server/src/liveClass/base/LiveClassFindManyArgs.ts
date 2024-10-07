/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LiveClassWhereInput } from "./LiveClassWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { LiveClassOrderByInput } from "./LiveClassOrderByInput";

@ArgsType()
class LiveClassFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LiveClassWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => LiveClassWhereInput, { nullable: true })
  @Type(() => LiveClassWhereInput)
  where?: LiveClassWhereInput;

  @ApiProperty({
    required: false,
    type: [LiveClassOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [LiveClassOrderByInput], { nullable: true })
  @Type(() => LiveClassOrderByInput)
  orderBy?: Array<LiveClassOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { LiveClassFindManyArgs as LiveClassFindManyArgs };