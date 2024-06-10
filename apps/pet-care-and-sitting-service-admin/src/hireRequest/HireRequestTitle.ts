import { HireRequest as THireRequest } from "../api/hireRequest/HireRequest";

export const HIREREQUEST_TITLE_FIELD = "id";

export const HireRequestTitle = (record: THireRequest): string => {
  return record.id?.toString() || String(record.id);
};
