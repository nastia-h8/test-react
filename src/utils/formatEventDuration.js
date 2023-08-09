import { formatDistanceStrict } from "date-fns";

export const formatEventDuration = (start, end) =>
  formatDistanceStrict(Date.parse(start), Date.parse(end));
