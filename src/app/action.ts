"use server";

import { getLocale } from "next-intl/server";

export const getLang = async () => {
  return await getLocale();
};
