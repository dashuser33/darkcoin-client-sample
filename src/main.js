"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const module_1 = require("darkcoin-client/build/module");
// import DarkcoinClient from 'darkcoin-client/build/main/lib/darkcoinClient';
const config = {
    url: 'http://localhost:19998',
    user: "dashrpc",
    password: "87deb2c6a69cae93f8898e276f9ff10f"
};
const client = new module_1.DarkcoinClient(config);
client.callRPCMethod('help', []).then((res) => {
    //console.log("balance is " + res.result.balance);
    console.log(res.result);
    //    console.log(res)
}).catch((e) => {
    console.log(e);
});
/**
 * Some predefined delays (in milliseconds).
 */
var Delays;
(function (Delays) {
    Delays[Delays["Short"] = 500] = "Short";
    Delays[Delays["Medium"] = 2000] = "Medium";
    Delays[Delays["Long"] = 5000] = "Long";
})(Delays = exports.Delays || (exports.Delays = {}));
/**
 * Returns a Promise<string> that resolves after given time.
 *
 * @param {string} name - A name.
 * @param {number=} [delay=Delays.Medium] - Number of milliseconds to delay resolution of the Promise.
 * @returns {Promise<string>}
 */
function delayedHello(name, delay = Delays.Medium) {
    return new Promise((resolve) => setTimeout(() => resolve(`Hello, ${name}`), delay));
}
// Below are examples of using TSLint errors suppression
// Here it is suppressing missing type definitions for greeter function
// tslint:disable-next-line typedef
function greeter(name) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        // tslint:disable-next-line no-unsafe-any no-return-await
        return yield delayedHello(name, Delays.Short);
    });
}
exports.greeter = greeter;
greeter("boo").then(e => (console.log(e)));
//# sourceMappingURL=main.js.map