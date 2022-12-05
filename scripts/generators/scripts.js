import fs from "fs";

const SOURCES = [
  {
    path: "../../app",
    prefix: "app",
  },
  {
    path: "../../api",
    prefix: "api",
  },
  {
    path: "../../scripts",
    prefix: "script",
  },
];

const OUT_FILE = "../../package.json";

const scriptsList = SOURCES.map((s) => {
  const packageContent = fs.readFileSync(`${s.path}/package.json`).toString();

  const scripts = JSON.parse(packageContent).scripts;

  const renamedScripts = {};

  Object.keys(scripts).map((k) => {
    renamedScripts[`${s.prefix}:${k}`] = `cd ${s.path.replace(
      "../../",
      ""
    )} && yarn run ${k}`;
  });

  return renamedScripts;
});

const newScripts = scriptsList.reduce((a, b) => ({ ...a, ...b }), {});

const globalPackageOld = JSON.parse(fs.readFileSync(OUT_FILE).toString());

const globalPackageNew = { ...globalPackageOld, scripts: newScripts };

fs.writeFileSync(OUT_FILE, JSON.stringify(globalPackageNew, null, 2));
