import { writeFileSync } from "fs";
import { getModelFromSource } from "@incubateur-ademe/publicodes-tools/compilation";

const srcFiles = "data/**/*.publicodes";
const destPath = "co2-model-digital-usage.model.json";

const model = getModelFromSource(srcFiles);

writeFileSync(destPath, JSON.stringify(model, null, 2));

console.log(`✅ Model compiled to ${destPath}`);
