import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LiveClassServiceBase } from "./base/liveClass.service.base";

@Injectable()
export class LiveClassService extends LiveClassServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
