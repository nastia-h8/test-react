import { format } from "date-fns";
// import { uk } from "date-fns/locale";

export const formatEventTimeStart = (start) =>
  format(
    Date.parse(start),
    "dd MMMM yyyy, HH:mm"
    // {locale: uk,}
  );
