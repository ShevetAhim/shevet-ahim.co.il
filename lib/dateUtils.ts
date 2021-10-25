import { FormatDate } from "./types";

export const formatDate: FormatDate = (date) =>
  new Date(date).toLocaleDateString("he");
