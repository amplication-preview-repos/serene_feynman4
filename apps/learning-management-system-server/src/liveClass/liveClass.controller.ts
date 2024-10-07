import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LiveClassService } from "./liveClass.service";
import { LiveClassControllerBase } from "./base/liveClass.controller.base";

@swagger.ApiTags("liveClasses")
@common.Controller("liveClasses")
export class LiveClassController extends LiveClassControllerBase {
  constructor(
    protected readonly service: LiveClassService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
