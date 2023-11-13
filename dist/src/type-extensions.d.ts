import "hardhat/types/runtime";
import { EthereumProvider } from "hardhat/types/provider";
declare module "hardhat/types/runtime" {
    interface HardhatRuntimeEnvironment {
        changeNetwork(newNetwork: string): Promise<void>;
        getProvider(newNetwork: string): Promise<EthereumProvider>;
    }
}
//# sourceMappingURL=type-extensions.d.ts.map