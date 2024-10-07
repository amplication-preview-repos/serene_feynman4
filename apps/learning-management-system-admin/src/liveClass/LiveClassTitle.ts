import { LiveClass as TLiveClass } from "../api/liveClass/LiveClass";

export const LIVECLASS_TITLE_FIELD = "id";

export const LiveClassTitle = (record: TLiveClass): string => {
  return record.id?.toString() || String(record.id);
};
