console.log("Starting script...");
try {
  const { google } = await import("googleapis");
  console.log("Imported googleapis");
  Object.keys(google).sort().forEach(key => {
    if (key.includes("mybusiness")) {
      console.log(key);
    }
  });
} catch (e) {
  console.error("Error importing googleapis:", e.message);
}
