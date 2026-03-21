const fs = require("fs");
const data = JSON.parse(fs.readFileSync("eslint-report.json", "utf-8"));
const counts = {};
const rulesExample = {};
let totalErrors = 0;
data.forEach((file) => {
  file.messages.forEach((msg) => {
    if (msg.severity === 2) {
      totalErrors++;
      counts[msg.ruleId] = (counts[msg.ruleId] || 0) + 1;
      if (!rulesExample[msg.ruleId]) {
        rulesExample[msg.ruleId] =
          `${file.filePath}:${msg.line}:${msg.column} - ${msg.message}`;
      }
    }
  });
});
console.log("Total Errors:", totalErrors);
console.log(
  "Error Rules Count:",
  Object.fromEntries(Object.entries(counts).sort((a, b) => b[1] - a[1])),
);
console.log("Examples:");
for (const rule in rulesExample) {
  console.log(rule, rulesExample[rule]);
}
