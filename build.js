import { writeFileSync } from "fs";
import { getModelFromSource } from "@incubateur-ademe/publicodes-tools/compilation";
import { disabledLogger } from "@incubateur-ademe/publicodes-tools";
import Engine from "publicodes";

const srcFiles = "data/**/*.publicodes";
const destPath = "modele-numerique.model.json";

const model = getModelFromSource(srcFiles, { verbose: true });

try {
  new Engine(model, { logger: disabledLogger });
} catch (e) {
  console.error(`❌ Model compilation failed:\n${e.message}\n`);
  process.exit(-1);
}

writeFileSync(destPath, JSON.stringify(model, null, 2));

console.log(`✅ Model compiled to ${destPath}`);
