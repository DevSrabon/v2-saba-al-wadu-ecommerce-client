import { env } from "@/lib";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { getSession } from "next-auth/react";

export const baseApiQuery = fetchBaseQuery({
  baseUrl: `${env.baseAPI + "/api/v1" || "http://[::1]:9099/api/v1/"}`,
  prepareHeaders: async (headers) => {
    const session = await getSession(); // Get session from NextAuth

    if (session) {
      headers.set("Authorization", `Bearer ${session.accessToken}`);
    }

    return headers;
  },
});
