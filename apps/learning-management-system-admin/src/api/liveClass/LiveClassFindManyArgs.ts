import { LiveClassWhereInput } from "./LiveClassWhereInput";
import { LiveClassOrderByInput } from "./LiveClassOrderByInput";

export type LiveClassFindManyArgs = {
  where?: LiveClassWhereInput;
  orderBy?: Array<LiveClassOrderByInput>;
  skip?: number;
  take?: number;
};
