import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LiveClassResolverBase } from "./base/liveClass.resolver.base";
import { LiveClass } from "./base/LiveClass";
import { LiveClassService } from "./liveClass.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LiveClass)
export class LiveClassResolver extends LiveClassResolverBase {
  constructor(
    protected readonly service: LiveClassService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
