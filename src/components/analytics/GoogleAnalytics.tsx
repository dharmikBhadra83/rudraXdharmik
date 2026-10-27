import { GoogleAnalytics as NextGoogleAnalytics } from "@next/third-parties/google";

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function GoogleAnalytics() {
  if (!gaMeasurementId) {
    return null;
  }

  return <NextGoogleAnalytics gaId={gaMeasurementId} />;
}
