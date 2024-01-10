/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
	BaseContract,
	BigNumberish,
	BytesLike,
	FunctionFragment,
	Result,
	Interface,
	EventFragment,
	AddressLike,
	ContractRunner,
	ContractMethod,
	Listener
} from 'ethers'
import type {
	TypedContractEvent,
	TypedDeferredTopicFilter,
	TypedEventLog,
	TypedLogDescription,
	TypedListener,
	TypedContractMethod
} from '../../../../../common'

export interface ERC1155HolderUpgradeableInterface extends Interface {
	getFunction(
		nameOrSignature:
			| 'onERC1155BatchReceived'
			| 'onERC1155Received'
			| 'supportsInterface'
	): FunctionFragment

	getEvent(nameOrSignatureOrTopic: 'Initialized'): EventFragment

	encodeFunctionData(
		functionFragment: 'onERC1155BatchReceived',
		values: [
			AddressLike,
			AddressLike,
			BigNumberish[],
			BigNumberish[],
			BytesLike
		]
	): string
	encodeFunctionData(
		functionFragment: 'onERC1155Received',
		values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BytesLike]
	): string
	encodeFunctionData(
		functionFragment: 'supportsInterface',
		values: [BytesLike]
	): string

	decodeFunctionResult(
		functionFragment: 'onERC1155BatchReceived',
		data: BytesLike
	): Result
	decodeFunctionResult(
		functionFragment: 'onERC1155Received',
		data: BytesLike
	): Result
	decodeFunctionResult(
		functionFragment: 'supportsInterface',
		data: BytesLike
	): Result
}

export namespace InitializedEvent {
	export type InputTuple = [version: BigNumberish]
	export type OutputTuple = [version: bigint]
	export interface OutputObject {
		version: bigint
	}
	export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>
	export type Filter = TypedDeferredTopicFilter<Event>
	export type Log = TypedEventLog<Event>
	export type LogDescription = TypedLogDescription<Event>
}

export interface ERC1155HolderUpgradeable extends BaseContract {
	connect(runner?: ContractRunner | null): ERC1155HolderUpgradeable
	waitForDeployment(): Promise<this>

	interface: ERC1155HolderUpgradeableInterface

	queryFilter<TCEvent extends TypedContractEvent>(
		event: TCEvent,
		fromBlockOrBlockhash?: string | number | undefined,
		toBlock?: string | number | undefined
	): Promise<Array<TypedEventLog<TCEvent>>>
	queryFilter<TCEvent extends TypedContractEvent>(
		filter: TypedDeferredTopicFilter<TCEvent>,
		fromBlockOrBlockhash?: string | number | undefined,
		toBlock?: string | number | undefined
	): Promise<Array<TypedEventLog<TCEvent>>>

	on<TCEvent extends TypedContractEvent>(
		event: TCEvent,
		listener: TypedListener<TCEvent>
	): Promise<this>
	on<TCEvent extends TypedContractEvent>(
		filter: TypedDeferredTopicFilter<TCEvent>,
		listener: TypedListener<TCEvent>
	): Promise<this>

	once<TCEvent extends TypedContractEvent>(
		event: TCEvent,
		listener: TypedListener<TCEvent>
	): Promise<this>
	once<TCEvent extends TypedContractEvent>(
		filter: TypedDeferredTopicFilter<TCEvent>,
		listener: TypedListener<TCEvent>
	): Promise<this>

	listeners<TCEvent extends TypedContractEvent>(
		event: TCEvent
	): Promise<Array<TypedListener<TCEvent>>>
	listeners(eventName?: string): Promise<Array<Listener>>
	removeAllListeners<TCEvent extends TypedContractEvent>(
		event?: TCEvent
	): Promise<this>

	onERC1155BatchReceived: TypedContractMethod<
		[
			arg0: AddressLike,
			arg1: AddressLike,
			arg2: BigNumberish[],
			arg3: BigNumberish[],
			arg4: BytesLike
		],
		[string],
		'nonpayable'
	>

	onERC1155Received: TypedContractMethod<
		[
			arg0: AddressLike,
			arg1: AddressLike,
			arg2: BigNumberish,
			arg3: BigNumberish,
			arg4: BytesLike
		],
		[string],
		'nonpayable'
	>

	supportsInterface: TypedContractMethod<
		[interfaceId: BytesLike],
		[boolean],
		'view'
	>

	getFunction<T extends ContractMethod = ContractMethod>(
		key: string | FunctionFragment
	): T

	getFunction(
		nameOrSignature: 'onERC1155BatchReceived'
	): TypedContractMethod<
		[
			arg0: AddressLike,
			arg1: AddressLike,
			arg2: BigNumberish[],
			arg3: BigNumberish[],
			arg4: BytesLike
		],
		[string],
		'nonpayable'
	>
	getFunction(
		nameOrSignature: 'onERC1155Received'
	): TypedContractMethod<
		[
			arg0: AddressLike,
			arg1: AddressLike,
			arg2: BigNumberish,
			arg3: BigNumberish,
			arg4: BytesLike
		],
		[string],
		'nonpayable'
	>
	getFunction(
		nameOrSignature: 'supportsInterface'
	): TypedContractMethod<[interfaceId: BytesLike], [boolean], 'view'>

	getEvent(
		key: 'Initialized'
	): TypedContractEvent<
		InitializedEvent.InputTuple,
		InitializedEvent.OutputTuple,
		InitializedEvent.OutputObject
	>

	filters: {
		'Initialized(uint8)': TypedContractEvent<
			InitializedEvent.InputTuple,
			InitializedEvent.OutputTuple,
			InitializedEvent.OutputObject
		>
		Initialized: TypedContractEvent<
			InitializedEvent.InputTuple,
			InitializedEvent.OutputTuple,
			InitializedEvent.OutputObject
		>
	}
}
