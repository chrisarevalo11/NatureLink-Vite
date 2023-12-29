/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BytesLike,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  Anchor,
  AnchorInterface,
} from "../../../../contracts/allo-protocol/core/Anchor";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_profileId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_registry",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "CALL_FAILED",
    type: "error",
  },
  {
    inputs: [],
    name: "UNAUTHORIZED",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "profileId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "registry",
    outputs: [
      {
        internalType: "contract Registry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60c060405234801561001057600080fd5b5060405161089138038061089183398101604081905261002f91610043565b6001600160a01b031660805260a052610080565b6000806040838503121561005657600080fd5b825160208401519092506001600160a01b038116811461007557600080fd5b809150509250929050565b60805160a0516107df6100b26000396000818160c7015261025201526000818161014d015261028101526107df6000f3fe6080604052600436106100745760003560e01c80637b1039991161004e5780637b1039991461013b578063b61d27f614610187578063bc197c81146101b4578063f23a6e61146101e057600080fd5b806301ffc9a71461008057806308386eba146100b5578063150b7a02146100f757600080fd5b3661007b57005b600080fd5b34801561008c57600080fd5b506100a061009b3660046103c2565b61020c565b60405190151581526020015b60405180910390f35b3480156100c157600080fd5b506100e97f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020016100ac565b34801561010357600080fd5b506101226101123660046104c6565b630a85bd0160e11b949350505050565b6040516001600160e01b031990911681526020016100ac565b34801561014757600080fd5b5061016f7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100ac565b34801561019357600080fd5b506101a76101a236600461052e565b610243565b6040516100ac91906105a9565b3480156101c057600080fd5b506101226101cf36600461065c565b63bc197c8160e01b95945050505050565b3480156101ec57600080fd5b506101226101fb366004610706565b63f23a6e6160e01b95945050505050565b60006001600160e01b03198216630271189760e51b148061023d57506301ffc9a760e01b6001600160e01b03198316145b92915050565b604051630e6e1ae360e21b81527f000000000000000000000000000000000000000000000000000000000000000060048201523360248201526060907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906339b86b8c90604401602060405180830381865afa1580156102d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102f4919061076b565b6103115760405163075fd2b160e01b815260040160405180910390fd5b6001600160a01b038416610338576040516384aed38d60e01b815260040160405180910390fd5b600080856001600160a01b03168585604051610354919061078d565b60006040518083038185875af1925050503d8060008114610391576040519150601f19603f3d011682016040523d82523d6000602084013e610396565b606091505b5091509150816103b9576040516384aed38d60e01b815260040160405180910390fd5b95945050505050565b6000602082840312156103d457600080fd5b81356001600160e01b0319811681146103ec57600080fd5b9392505050565b80356001600160a01b038116811461040a57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561044e5761044e61040f565b604052919050565b600082601f83011261046757600080fd5b813567ffffffffffffffff8111156104815761048161040f565b610494601f8201601f1916602001610425565b8181528460208386010111156104a957600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080608085870312156104dc57600080fd5b6104e5856103f3565b93506104f3602086016103f3565b925060408501359150606085013567ffffffffffffffff81111561051657600080fd5b61052287828801610456565b91505092959194509250565b60008060006060848603121561054357600080fd5b61054c846103f3565b925060208401359150604084013567ffffffffffffffff81111561056f57600080fd5b61057b86828701610456565b9150509250925092565b60005b838110156105a0578181015183820152602001610588565b50506000910152565b60208152600082518060208401526105c8816040850160208701610585565b601f01601f19169190910160400192915050565b600082601f8301126105ed57600080fd5b8135602067ffffffffffffffff8211156106095761060961040f565b8160051b610618828201610425565b928352848101820192828101908785111561063257600080fd5b83870192505b8483101561065157823582529183019190830190610638565b979650505050505050565b600080600080600060a0868803121561067457600080fd5b61067d866103f3565b945061068b602087016103f3565b9350604086013567ffffffffffffffff808211156106a857600080fd5b6106b489838a016105dc565b945060608801359150808211156106ca57600080fd5b6106d689838a016105dc565b935060808801359150808211156106ec57600080fd5b506106f988828901610456565b9150509295509295909350565b600080600080600060a0868803121561071e57600080fd5b610727866103f3565b9450610735602087016103f3565b93506040860135925060608601359150608086013567ffffffffffffffff81111561075f57600080fd5b6106f988828901610456565b60006020828403121561077d57600080fd5b815180151581146103ec57600080fd5b6000825161079f818460208701610585565b919091019291505056fea264697066735822122067863f5c65c2d883a75568127a7c03ab44361a6d7ab19f4e57d4e3b3710603e664736f6c63430008130033";

type AnchorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AnchorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Anchor__factory extends ContractFactory {
  constructor(...args: AnchorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _profileId: BytesLike,
    _registry: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_profileId, _registry, overrides || {});
  }
  override deploy(
    _profileId: BytesLike,
    _registry: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_profileId, _registry, overrides || {}) as Promise<
      Anchor & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Anchor__factory {
    return super.connect(runner) as Anchor__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AnchorInterface {
    return new Interface(_abi) as AnchorInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Anchor {
    return new Contract(address, _abi, runner) as unknown as Anchor;
  }
}
