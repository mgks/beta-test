/**
 * Live demonstration script linked dynamically into the playground.
 * Any updates to this file are automatically reflected in documentation.
 */
function calculateMetrics(base, multiplier) {
  const score = base * multiplier;
  const status = score > 100 ? "OPTIMAL" : "STABLE";
  return { base, multiplier, score, status };
}

const metrics = calculateMetrics(24, 5);
console.log("Calculated System Metrics:", metrics);
console.info("Active Git Branch:", window.docmd?.var?.get("docmd.gitBranch") || "main");

return metrics.score;
