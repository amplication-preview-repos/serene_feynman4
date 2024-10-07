import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LiveClassModuleBase } from "./base/liveClass.module.base";
import { LiveClassService } from "./liveClass.service";
import { LiveClassController } from "./liveClass.controller";
import { LiveClassResolver } from "./liveClass.resolver";

@Module({
  imports: [LiveClassModuleBase, forwardRef(() => AuthModule)],
  controllers: [LiveClassController],
  providers: [LiveClassService, LiveClassResolver],
  exports: [LiveClassService],
})
export class LiveClassModule {}
