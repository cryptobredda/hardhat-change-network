"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line no-implicit-dependencies
const chai_1 = require("chai");
const helpers_1 = require("./helpers");
describe("Integration tests examples", function () {
    describe("Hardhat Runtime Environment extension", function () {
        helpers_1.useEnvironment("hardhat-project");
        it("Should add the functoin", function () {
            chai_1.assert.instanceOf(this.hre.changeNetwork, Function);
        });
    });
});
//# sourceMappingURL=project.test.js.map