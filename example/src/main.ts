import Crawler = require("../../index");

declare var process: any;

const c = new Crawler();
if (c && (typeof c.queue === "function")) {
    console.log("pass");
} else {
    console.error("wrong");
    process.exit(1);
}
