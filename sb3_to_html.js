#!/usr/bin/env node
import fs from 'fs';
import Packager from '@turbowarp/packager';

const [,, input, output] = process.argv;
if (!input) {
  console.error('Usage: node sb3_to_html.js <input.sb3> [output.html]');
  process.exit(1);
}
const outFile = output || 'output.html';

async function run() {
  const projectData = fs.readFileSync(input);
  const loadedProject = await Packager.loadProject(projectData);
  const packager = new Packager.Packager();
  packager.project = loadedProject;
  const result = await packager.package();
  fs.writeFileSync(outFile, result.data);
  console.log(`Wrote ${outFile}`);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
