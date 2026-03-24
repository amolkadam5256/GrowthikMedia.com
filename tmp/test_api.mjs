import { google } from "googleapis";

try {
  const g = google;
  if (g.mybusinessreviews) {
    console.log("Found mybusinessreviews");
  } else {
    console.log("mybusinessreviews NOT found in google object");
    const keys = Object.keys(google);
    console.log("Available keys starting with 'my':", keys.filter(k => k.startsWith("my")));
  }
} catch (e) {
  console.error(e);
}
