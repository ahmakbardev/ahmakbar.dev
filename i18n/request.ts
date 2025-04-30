import { notFound } from "next/navigation";
import {
  getRequestConfig,
  type GetRequestConfigParams,
  type RequestConfig,
} from "next-intl/server";
import { routing } from "@/lib/routing";

export default getRequestConfig(
  async ({ locale }: GetRequestConfigParams): Promise<RequestConfig> => {
    const language = (locale ?? "en") as "en" | "id";

    // Validate locale
    if (!routing.locales.includes(language)) notFound();

    // Load translation files
    const featureMessages = (
      await import(`@/dictionaries/feature-section/${language}.json`)
    ).default;

    console.log(">>> Loaded messages for:", language);
    console.log(featureMessages);

    return {
      locale: language,
      messages: {
        ...featureMessages,
      },
    };
  },
);
