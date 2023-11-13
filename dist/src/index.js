"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("hardhat/config");
const construction_1 = require("hardhat/internal/core/providers/construction");
// This import is needed to let the TypeScript compiler know that it should include your type
// extensions in your npm package's types file.
require("./type-extensions");
config_1.extendEnvironment((hre) => {
    // We add a field to the Hardhat Runtime Environment here.
    // We use lazyObject to avoid initializing things until they are actually
    // needed.
    const providers = {};
    hre.getProvider = async function getProvider(name) {
        if (!providers[name]) {
            providers[name] = await construction_1.createProvider(this.config, name, this.artifacts);
        }
        return providers[name];
    };
    hre.changeNetwork = async function changeNetwork(newNetwork) {
        if (!this.config.networks[newNetwork]) {
            throw new Error(`changeNetwork: Couldn't find network '${newNetwork}'`);
        }
        if (!providers[this.network.name]) {
            providers[this.network.name] = this.network.provider;
        }
        this.network.name = newNetwork;
        this.network.config = this.config.networks[newNetwork];
        this.network.provider = await this.getProvider(newNetwork);
        if (this.ethers) {
            const { HardhatEthersProvider } = require("@nomicfoundation/hardhat-ethers/internal/hardhat-ethers-provider");
            this.ethers.provider = new HardhatEthersProvider(this.network.provider, this.network.name);
        }
    };
});
//# sourceMappingURL=index.js.map