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

export type MetadataStruct = { protocol: BigNumberish; pointer: string }

export type MetadataStructOutput = [protocol: bigint, pointer: string] & {
	protocol: bigint
	pointer: string
}

export declare namespace DirectGrantsSimpleStrategy {
	export type MilestoneStruct = {
		amountPercentage: BigNumberish
		metadata: MetadataStruct
		milestoneStatus: BigNumberish
	}

	export type MilestoneStructOutput = [
		amountPercentage: bigint,
		metadata: MetadataStructOutput,
		milestoneStatus: bigint
	] & {
		amountPercentage: bigint
		metadata: MetadataStructOutput
		milestoneStatus: bigint
	}

	export type RecipientStruct = {
		useRegistryAnchor: boolean
		recipientAddress: AddressLike
		grantAmount: BigNumberish
		metadata: MetadataStruct
		recipientStatus: BigNumberish
		milestonesReviewStatus: BigNumberish
	}

	export type RecipientStructOutput = [
		useRegistryAnchor: boolean,
		recipientAddress: string,
		grantAmount: bigint,
		metadata: MetadataStructOutput,
		recipientStatus: bigint,
		milestonesReviewStatus: bigint
	] & {
		useRegistryAnchor: boolean
		recipientAddress: string
		grantAmount: bigint
		metadata: MetadataStructOutput
		recipientStatus: bigint
		milestonesReviewStatus: bigint
	}
}

export declare namespace IStrategy {
	export type PayoutSummaryStruct = {
		recipientAddress: AddressLike
		amount: BigNumberish
	}

	export type PayoutSummaryStructOutput = [
		recipientAddress: string,
		amount: bigint
	] & { recipientAddress: string; amount: bigint }
}

export interface DirectGrantsSimpleStrategyInterface extends Interface {
	getFunction(
		nameOrSignature:
			| 'NATIVE'
			| 'allocate'
			| 'allocatedGrantAmount'
			| 'distribute'
			| 'getAllo'
			| 'getMilestoneStatus'
			| 'getMilestones'
			| 'getPayouts'
			| 'getPoolAmount'
			| 'getPoolId'
			| 'getRecipient'
			| 'getRecipientStatus'
			| 'getStrategyId'
			| 'grantAmountRequired'
			| 'increasePoolAmount'
			| 'initialize'
			| 'isPoolActive'
			| 'isValidAllocator'
			| 'metadataRequired'
			| 'milestones'
			| 'registerRecipient'
			| 'registryGating'
			| 'rejectMilestone'
			| 'reviewSetMilestones'
			| 'setMilestones'
			| 'setPoolActive'
			| 'setRecipientStatusToInReview'
			| 'submitMilestone'
			| 'upcomingMilestone'
			| 'withdraw'
	): FunctionFragment

	getEvent(
		nameOrSignatureOrTopic:
			| 'Allocated'
			| 'Distributed'
			| 'Initialized'
			| 'MilestoneStatusChanged'
			| 'MilestoneSubmitted'
			| 'MilestonesReviewed'
			| 'MilestonesSet'
			| 'PoolActive'
			| 'RecipientStatusChanged'
			| 'Registered'
	): EventFragment

	encodeFunctionData(functionFragment: 'NATIVE', values?: undefined): string
	encodeFunctionData(
		functionFragment: 'allocate',
		values: [BytesLike, AddressLike]
	): string
	encodeFunctionData(
		functionFragment: 'allocatedGrantAmount',
		values?: undefined
	): string
	encodeFunctionData(
		functionFragment: 'distribute',
		values: [AddressLike[], BytesLike, AddressLike]
	): string
	encodeFunctionData(functionFragment: 'getAllo', values?: undefined): string
	encodeFunctionData(
		functionFragment: 'getMilestoneStatus',
		values: [AddressLike, BigNumberish]
	): string
	encodeFunctionData(
		functionFragment: 'getMilestones',
		values: [AddressLike]
	): string
	encodeFunctionData(
		functionFragment: 'getPayouts',
		values: [AddressLike[], BytesLike[]]
	): string
	encodeFunctionData(
		functionFragment: 'getPoolAmount',
		values?: undefined
	): string
	encodeFunctionData(functionFragment: 'getPoolId', values?: undefined): string
	encodeFunctionData(
		functionFragment: 'getRecipient',
		values: [AddressLike]
	): string
	encodeFunctionData(
		functionFragment: 'getRecipientStatus',
		values: [AddressLike]
	): string
	encodeFunctionData(
		functionFragment: 'getStrategyId',
		values?: undefined
	): string
	encodeFunctionData(
		functionFragment: 'grantAmountRequired',
		values?: undefined
	): string
	encodeFunctionData(
		functionFragment: 'increasePoolAmount',
		values: [BigNumberish]
	): string
	encodeFunctionData(
		functionFragment: 'initialize',
		values: [BigNumberish, BytesLike]
	): string
	encodeFunctionData(
		functionFragment: 'isPoolActive',
		values?: undefined
	): string
	encodeFunctionData(
		functionFragment: 'isValidAllocator',
		values: [AddressLike]
	): string
	encodeFunctionData(
		functionFragment: 'metadataRequired',
		values?: undefined
	): string
	encodeFunctionData(
		functionFragment: 'milestones',
		values: [AddressLike, BigNumberish]
	): string
	encodeFunctionData(
		functionFragment: 'registerRecipient',
		values: [BytesLike, AddressLike]
	): string
	encodeFunctionData(
		functionFragment: 'registryGating',
		values?: undefined
	): string
	encodeFunctionData(
		functionFragment: 'rejectMilestone',
		values: [AddressLike, BigNumberish]
	): string
	encodeFunctionData(
		functionFragment: 'reviewSetMilestones',
		values: [AddressLike, BigNumberish]
	): string
	encodeFunctionData(
		functionFragment: 'setMilestones',
		values: [AddressLike, DirectGrantsSimpleStrategy.MilestoneStruct[]]
	): string
	encodeFunctionData(
		functionFragment: 'setPoolActive',
		values: [boolean]
	): string
	encodeFunctionData(
		functionFragment: 'setRecipientStatusToInReview',
		values: [AddressLike[]]
	): string
	encodeFunctionData(
		functionFragment: 'submitMilestone',
		values: [AddressLike, BigNumberish, MetadataStruct]
	): string
	encodeFunctionData(
		functionFragment: 'upcomingMilestone',
		values: [AddressLike]
	): string
	encodeFunctionData(
		functionFragment: 'withdraw',
		values: [BigNumberish]
	): string

	decodeFunctionResult(functionFragment: 'NATIVE', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'allocate', data: BytesLike): Result
	decodeFunctionResult(
		functionFragment: 'allocatedGrantAmount',
		data: BytesLike
	): Result
	decodeFunctionResult(functionFragment: 'distribute', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'getAllo', data: BytesLike): Result
	decodeFunctionResult(
		functionFragment: 'getMilestoneStatus',
		data: BytesLike
	): Result
	decodeFunctionResult(
		functionFragment: 'getMilestones',
		data: BytesLike
	): Result
	decodeFunctionResult(functionFragment: 'getPayouts', data: BytesLike): Result
	decodeFunctionResult(
		functionFragment: 'getPoolAmount',
		data: BytesLike
	): Result
	decodeFunctionResult(functionFragment: 'getPoolId', data: BytesLike): Result
	decodeFunctionResult(
		functionFragment: 'getRecipient',
		data: BytesLike
	): Result
	decodeFunctionResult(
		functionFragment: 'getRecipientStatus',
		data: BytesLike
	): Result
	decodeFunctionResult(
		functionFragment: 'getStrategyId',
		data: BytesLike
	): Result
	decodeFunctionResult(
		functionFragment: 'grantAmountRequired',
		data: BytesLike
	): Result
	decodeFunctionResult(
		functionFragment: 'increasePoolAmount',
		data: BytesLike
	): Result
	decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result
	decodeFunctionResult(
		functionFragment: 'isPoolActive',
		data: BytesLike
	): Result
	decodeFunctionResult(
		functionFragment: 'isValidAllocator',
		data: BytesLike
	): Result
	decodeFunctionResult(
		functionFragment: 'metadataRequired',
		data: BytesLike
	): Result
	decodeFunctionResult(functionFragment: 'milestones', data: BytesLike): Result
	decodeFunctionResult(
		functionFragment: 'registerRecipient',
		data: BytesLike
	): Result
	decodeFunctionResult(
		functionFragment: 'registryGating',
		data: BytesLike
	): Result
	decodeFunctionResult(
		functionFragment: 'rejectMilestone',
		data: BytesLike
	): Result
	decodeFunctionResult(
		functionFragment: 'reviewSetMilestones',
		data: BytesLike
	): Result
	decodeFunctionResult(
		functionFragment: 'setMilestones',
		data: BytesLike
	): Result
	decodeFunctionResult(
		functionFragment: 'setPoolActive',
		data: BytesLike
	): Result
	decodeFunctionResult(
		functionFragment: 'setRecipientStatusToInReview',
		data: BytesLike
	): Result
	decodeFunctionResult(
		functionFragment: 'submitMilestone',
		data: BytesLike
	): Result
	decodeFunctionResult(
		functionFragment: 'upcomingMilestone',
		data: BytesLike
	): Result
	decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result
}

export namespace AllocatedEvent {
	export type InputTuple = [
		recipientId: AddressLike,
		amount: BigNumberish,
		token: AddressLike,
		sender: AddressLike
	]
	export type OutputTuple = [
		recipientId: string,
		amount: bigint,
		token: string,
		sender: string
	]
	export interface OutputObject {
		recipientId: string
		amount: bigint
		token: string
		sender: string
	}
	export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>
	export type Filter = TypedDeferredTopicFilter<Event>
	export type Log = TypedEventLog<Event>
	export type LogDescription = TypedLogDescription<Event>
}

export namespace DistributedEvent {
	export type InputTuple = [
		recipientId: AddressLike,
		recipientAddress: AddressLike,
		amount: BigNumberish,
		sender: AddressLike
	]
	export type OutputTuple = [
		recipientId: string,
		recipientAddress: string,
		amount: bigint,
		sender: string
	]
	export interface OutputObject {
		recipientId: string
		recipientAddress: string
		amount: bigint
		sender: string
	}
	export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>
	export type Filter = TypedDeferredTopicFilter<Event>
	export type Log = TypedEventLog<Event>
	export type LogDescription = TypedLogDescription<Event>
}

export namespace InitializedEvent {
	export type InputTuple = [poolId: BigNumberish, data: BytesLike]
	export type OutputTuple = [poolId: bigint, data: string]
	export interface OutputObject {
		poolId: bigint
		data: string
	}
	export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>
	export type Filter = TypedDeferredTopicFilter<Event>
	export type Log = TypedEventLog<Event>
	export type LogDescription = TypedLogDescription<Event>
}

export namespace MilestoneStatusChangedEvent {
	export type InputTuple = [
		recipientId: AddressLike,
		milestoneId: BigNumberish,
		status: BigNumberish
	]
	export type OutputTuple = [
		recipientId: string,
		milestoneId: bigint,
		status: bigint
	]
	export interface OutputObject {
		recipientId: string
		milestoneId: bigint
		status: bigint
	}
	export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>
	export type Filter = TypedDeferredTopicFilter<Event>
	export type Log = TypedEventLog<Event>
	export type LogDescription = TypedLogDescription<Event>
}

export namespace MilestoneSubmittedEvent {
	export type InputTuple = [
		recipientId: AddressLike,
		milestoneId: BigNumberish,
		metadata: MetadataStruct
	]
	export type OutputTuple = [
		recipientId: string,
		milestoneId: bigint,
		metadata: MetadataStructOutput
	]
	export interface OutputObject {
		recipientId: string
		milestoneId: bigint
		metadata: MetadataStructOutput
	}
	export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>
	export type Filter = TypedDeferredTopicFilter<Event>
	export type Log = TypedEventLog<Event>
	export type LogDescription = TypedLogDescription<Event>
}

export namespace MilestonesReviewedEvent {
	export type InputTuple = [recipientId: AddressLike, status: BigNumberish]
	export type OutputTuple = [recipientId: string, status: bigint]
	export interface OutputObject {
		recipientId: string
		status: bigint
	}
	export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>
	export type Filter = TypedDeferredTopicFilter<Event>
	export type Log = TypedEventLog<Event>
	export type LogDescription = TypedLogDescription<Event>
}

export namespace MilestonesSetEvent {
	export type InputTuple = [
		recipientId: AddressLike,
		milestonesLength: BigNumberish
	]
	export type OutputTuple = [recipientId: string, milestonesLength: bigint]
	export interface OutputObject {
		recipientId: string
		milestonesLength: bigint
	}
	export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>
	export type Filter = TypedDeferredTopicFilter<Event>
	export type Log = TypedEventLog<Event>
	export type LogDescription = TypedLogDescription<Event>
}

export namespace PoolActiveEvent {
	export type InputTuple = [active: boolean]
	export type OutputTuple = [active: boolean]
	export interface OutputObject {
		active: boolean
	}
	export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>
	export type Filter = TypedDeferredTopicFilter<Event>
	export type Log = TypedEventLog<Event>
	export type LogDescription = TypedLogDescription<Event>
}

export namespace RecipientStatusChangedEvent {
	export type InputTuple = [recipientId: AddressLike, status: BigNumberish]
	export type OutputTuple = [recipientId: string, status: bigint]
	export interface OutputObject {
		recipientId: string
		status: bigint
	}
	export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>
	export type Filter = TypedDeferredTopicFilter<Event>
	export type Log = TypedEventLog<Event>
	export type LogDescription = TypedLogDescription<Event>
}

export namespace RegisteredEvent {
	export type InputTuple = [
		recipientId: AddressLike,
		data: BytesLike,
		sender: AddressLike
	]
	export type OutputTuple = [recipientId: string, data: string, sender: string]
	export interface OutputObject {
		recipientId: string
		data: string
		sender: string
	}
	export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>
	export type Filter = TypedDeferredTopicFilter<Event>
	export type Log = TypedEventLog<Event>
	export type LogDescription = TypedLogDescription<Event>
}

export interface DirectGrantsSimpleStrategy extends BaseContract {
	connect(runner?: ContractRunner | null): DirectGrantsSimpleStrategy
	waitForDeployment(): Promise<this>

	interface: DirectGrantsSimpleStrategyInterface

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

	NATIVE: TypedContractMethod<[], [string], 'view'>

	allocate: TypedContractMethod<
		[_data: BytesLike, _sender: AddressLike],
		[void],
		'payable'
	>

	allocatedGrantAmount: TypedContractMethod<[], [bigint], 'view'>

	distribute: TypedContractMethod<
		[_recipientIds: AddressLike[], _data: BytesLike, _sender: AddressLike],
		[void],
		'nonpayable'
	>

	getAllo: TypedContractMethod<[], [string], 'view'>

	getMilestoneStatus: TypedContractMethod<
		[_recipientId: AddressLike, _milestoneId: BigNumberish],
		[bigint],
		'view'
	>

	getMilestones: TypedContractMethod<
		[_recipientId: AddressLike],
		[DirectGrantsSimpleStrategy.MilestoneStructOutput[]],
		'view'
	>

	getPayouts: TypedContractMethod<
		[_recipientIds: AddressLike[], _data: BytesLike[]],
		[IStrategy.PayoutSummaryStructOutput[]],
		'view'
	>

	getPoolAmount: TypedContractMethod<[], [bigint], 'view'>

	getPoolId: TypedContractMethod<[], [bigint], 'view'>

	getRecipient: TypedContractMethod<
		[_recipientId: AddressLike],
		[DirectGrantsSimpleStrategy.RecipientStructOutput],
		'view'
	>

	getRecipientStatus: TypedContractMethod<
		[_recipientId: AddressLike],
		[bigint],
		'view'
	>

	getStrategyId: TypedContractMethod<[], [string], 'view'>

	grantAmountRequired: TypedContractMethod<[], [boolean], 'view'>

	increasePoolAmount: TypedContractMethod<
		[_amount: BigNumberish],
		[void],
		'nonpayable'
	>

	initialize: TypedContractMethod<
		[_poolId: BigNumberish, _data: BytesLike],
		[void],
		'nonpayable'
	>

	isPoolActive: TypedContractMethod<[], [boolean], 'view'>

	isValidAllocator: TypedContractMethod<
		[_allocator: AddressLike],
		[boolean],
		'view'
	>

	metadataRequired: TypedContractMethod<[], [boolean], 'view'>

	milestones: TypedContractMethod<
		[arg0: AddressLike, arg1: BigNumberish],
		[
			[bigint, MetadataStructOutput, bigint] & {
				amountPercentage: bigint
				metadata: MetadataStructOutput
				milestoneStatus: bigint
			}
		],
		'view'
	>

	registerRecipient: TypedContractMethod<
		[_data: BytesLike, _sender: AddressLike],
		[string],
		'payable'
	>

	registryGating: TypedContractMethod<[], [boolean], 'view'>

	rejectMilestone: TypedContractMethod<
		[_recipientId: AddressLike, _milestoneId: BigNumberish],
		[void],
		'nonpayable'
	>

	reviewSetMilestones: TypedContractMethod<
		[_recipientId: AddressLike, _status: BigNumberish],
		[void],
		'nonpayable'
	>

	setMilestones: TypedContractMethod<
		[
			_recipientId: AddressLike,
			_milestones: DirectGrantsSimpleStrategy.MilestoneStruct[]
		],
		[void],
		'nonpayable'
	>

	setPoolActive: TypedContractMethod<[_flag: boolean], [void], 'nonpayable'>

	setRecipientStatusToInReview: TypedContractMethod<
		[_recipientIds: AddressLike[]],
		[void],
		'nonpayable'
	>

	submitMilestone: TypedContractMethod<
		[
			_recipientId: AddressLike,
			_milestoneId: BigNumberish,
			_metadata: MetadataStruct
		],
		[void],
		'nonpayable'
	>

	upcomingMilestone: TypedContractMethod<[arg0: AddressLike], [bigint], 'view'>

	withdraw: TypedContractMethod<[_amount: BigNumberish], [void], 'nonpayable'>

	getFunction<T extends ContractMethod = ContractMethod>(
		key: string | FunctionFragment
	): T

	getFunction(
		nameOrSignature: 'NATIVE'
	): TypedContractMethod<[], [string], 'view'>
	getFunction(
		nameOrSignature: 'allocate'
	): TypedContractMethod<
		[_data: BytesLike, _sender: AddressLike],
		[void],
		'payable'
	>
	getFunction(
		nameOrSignature: 'allocatedGrantAmount'
	): TypedContractMethod<[], [bigint], 'view'>
	getFunction(
		nameOrSignature: 'distribute'
	): TypedContractMethod<
		[_recipientIds: AddressLike[], _data: BytesLike, _sender: AddressLike],
		[void],
		'nonpayable'
	>
	getFunction(
		nameOrSignature: 'getAllo'
	): TypedContractMethod<[], [string], 'view'>
	getFunction(
		nameOrSignature: 'getMilestoneStatus'
	): TypedContractMethod<
		[_recipientId: AddressLike, _milestoneId: BigNumberish],
		[bigint],
		'view'
	>
	getFunction(
		nameOrSignature: 'getMilestones'
	): TypedContractMethod<
		[_recipientId: AddressLike],
		[DirectGrantsSimpleStrategy.MilestoneStructOutput[]],
		'view'
	>
	getFunction(
		nameOrSignature: 'getPayouts'
	): TypedContractMethod<
		[_recipientIds: AddressLike[], _data: BytesLike[]],
		[IStrategy.PayoutSummaryStructOutput[]],
		'view'
	>
	getFunction(
		nameOrSignature: 'getPoolAmount'
	): TypedContractMethod<[], [bigint], 'view'>
	getFunction(
		nameOrSignature: 'getPoolId'
	): TypedContractMethod<[], [bigint], 'view'>
	getFunction(
		nameOrSignature: 'getRecipient'
	): TypedContractMethod<
		[_recipientId: AddressLike],
		[DirectGrantsSimpleStrategy.RecipientStructOutput],
		'view'
	>
	getFunction(
		nameOrSignature: 'getRecipientStatus'
	): TypedContractMethod<[_recipientId: AddressLike], [bigint], 'view'>
	getFunction(
		nameOrSignature: 'getStrategyId'
	): TypedContractMethod<[], [string], 'view'>
	getFunction(
		nameOrSignature: 'grantAmountRequired'
	): TypedContractMethod<[], [boolean], 'view'>
	getFunction(
		nameOrSignature: 'increasePoolAmount'
	): TypedContractMethod<[_amount: BigNumberish], [void], 'nonpayable'>
	getFunction(
		nameOrSignature: 'initialize'
	): TypedContractMethod<
		[_poolId: BigNumberish, _data: BytesLike],
		[void],
		'nonpayable'
	>
	getFunction(
		nameOrSignature: 'isPoolActive'
	): TypedContractMethod<[], [boolean], 'view'>
	getFunction(
		nameOrSignature: 'isValidAllocator'
	): TypedContractMethod<[_allocator: AddressLike], [boolean], 'view'>
	getFunction(
		nameOrSignature: 'metadataRequired'
	): TypedContractMethod<[], [boolean], 'view'>
	getFunction(nameOrSignature: 'milestones'): TypedContractMethod<
		[arg0: AddressLike, arg1: BigNumberish],
		[
			[bigint, MetadataStructOutput, bigint] & {
				amountPercentage: bigint
				metadata: MetadataStructOutput
				milestoneStatus: bigint
			}
		],
		'view'
	>
	getFunction(
		nameOrSignature: 'registerRecipient'
	): TypedContractMethod<
		[_data: BytesLike, _sender: AddressLike],
		[string],
		'payable'
	>
	getFunction(
		nameOrSignature: 'registryGating'
	): TypedContractMethod<[], [boolean], 'view'>
	getFunction(
		nameOrSignature: 'rejectMilestone'
	): TypedContractMethod<
		[_recipientId: AddressLike, _milestoneId: BigNumberish],
		[void],
		'nonpayable'
	>
	getFunction(
		nameOrSignature: 'reviewSetMilestones'
	): TypedContractMethod<
		[_recipientId: AddressLike, _status: BigNumberish],
		[void],
		'nonpayable'
	>
	getFunction(
		nameOrSignature: 'setMilestones'
	): TypedContractMethod<
		[
			_recipientId: AddressLike,
			_milestones: DirectGrantsSimpleStrategy.MilestoneStruct[]
		],
		[void],
		'nonpayable'
	>
	getFunction(
		nameOrSignature: 'setPoolActive'
	): TypedContractMethod<[_flag: boolean], [void], 'nonpayable'>
	getFunction(
		nameOrSignature: 'setRecipientStatusToInReview'
	): TypedContractMethod<[_recipientIds: AddressLike[]], [void], 'nonpayable'>
	getFunction(
		nameOrSignature: 'submitMilestone'
	): TypedContractMethod<
		[
			_recipientId: AddressLike,
			_milestoneId: BigNumberish,
			_metadata: MetadataStruct
		],
		[void],
		'nonpayable'
	>
	getFunction(
		nameOrSignature: 'upcomingMilestone'
	): TypedContractMethod<[arg0: AddressLike], [bigint], 'view'>
	getFunction(
		nameOrSignature: 'withdraw'
	): TypedContractMethod<[_amount: BigNumberish], [void], 'nonpayable'>

	getEvent(
		key: 'Allocated'
	): TypedContractEvent<
		AllocatedEvent.InputTuple,
		AllocatedEvent.OutputTuple,
		AllocatedEvent.OutputObject
	>
	getEvent(
		key: 'Distributed'
	): TypedContractEvent<
		DistributedEvent.InputTuple,
		DistributedEvent.OutputTuple,
		DistributedEvent.OutputObject
	>
	getEvent(
		key: 'Initialized'
	): TypedContractEvent<
		InitializedEvent.InputTuple,
		InitializedEvent.OutputTuple,
		InitializedEvent.OutputObject
	>
	getEvent(
		key: 'MilestoneStatusChanged'
	): TypedContractEvent<
		MilestoneStatusChangedEvent.InputTuple,
		MilestoneStatusChangedEvent.OutputTuple,
		MilestoneStatusChangedEvent.OutputObject
	>
	getEvent(
		key: 'MilestoneSubmitted'
	): TypedContractEvent<
		MilestoneSubmittedEvent.InputTuple,
		MilestoneSubmittedEvent.OutputTuple,
		MilestoneSubmittedEvent.OutputObject
	>
	getEvent(
		key: 'MilestonesReviewed'
	): TypedContractEvent<
		MilestonesReviewedEvent.InputTuple,
		MilestonesReviewedEvent.OutputTuple,
		MilestonesReviewedEvent.OutputObject
	>
	getEvent(
		key: 'MilestonesSet'
	): TypedContractEvent<
		MilestonesSetEvent.InputTuple,
		MilestonesSetEvent.OutputTuple,
		MilestonesSetEvent.OutputObject
	>
	getEvent(
		key: 'PoolActive'
	): TypedContractEvent<
		PoolActiveEvent.InputTuple,
		PoolActiveEvent.OutputTuple,
		PoolActiveEvent.OutputObject
	>
	getEvent(
		key: 'RecipientStatusChanged'
	): TypedContractEvent<
		RecipientStatusChangedEvent.InputTuple,
		RecipientStatusChangedEvent.OutputTuple,
		RecipientStatusChangedEvent.OutputObject
	>
	getEvent(
		key: 'Registered'
	): TypedContractEvent<
		RegisteredEvent.InputTuple,
		RegisteredEvent.OutputTuple,
		RegisteredEvent.OutputObject
	>

	filters: {
		'Allocated(address,uint256,address,address)': TypedContractEvent<
			AllocatedEvent.InputTuple,
			AllocatedEvent.OutputTuple,
			AllocatedEvent.OutputObject
		>
		Allocated: TypedContractEvent<
			AllocatedEvent.InputTuple,
			AllocatedEvent.OutputTuple,
			AllocatedEvent.OutputObject
		>

		'Distributed(address,address,uint256,address)': TypedContractEvent<
			DistributedEvent.InputTuple,
			DistributedEvent.OutputTuple,
			DistributedEvent.OutputObject
		>
		Distributed: TypedContractEvent<
			DistributedEvent.InputTuple,
			DistributedEvent.OutputTuple,
			DistributedEvent.OutputObject
		>

		'Initialized(uint256,bytes)': TypedContractEvent<
			InitializedEvent.InputTuple,
			InitializedEvent.OutputTuple,
			InitializedEvent.OutputObject
		>
		Initialized: TypedContractEvent<
			InitializedEvent.InputTuple,
			InitializedEvent.OutputTuple,
			InitializedEvent.OutputObject
		>

		'MilestoneStatusChanged(address,uint256,uint8)': TypedContractEvent<
			MilestoneStatusChangedEvent.InputTuple,
			MilestoneStatusChangedEvent.OutputTuple,
			MilestoneStatusChangedEvent.OutputObject
		>
		MilestoneStatusChanged: TypedContractEvent<
			MilestoneStatusChangedEvent.InputTuple,
			MilestoneStatusChangedEvent.OutputTuple,
			MilestoneStatusChangedEvent.OutputObject
		>

		'MilestoneSubmitted(address,uint256,tuple)': TypedContractEvent<
			MilestoneSubmittedEvent.InputTuple,
			MilestoneSubmittedEvent.OutputTuple,
			MilestoneSubmittedEvent.OutputObject
		>
		MilestoneSubmitted: TypedContractEvent<
			MilestoneSubmittedEvent.InputTuple,
			MilestoneSubmittedEvent.OutputTuple,
			MilestoneSubmittedEvent.OutputObject
		>

		'MilestonesReviewed(address,uint8)': TypedContractEvent<
			MilestonesReviewedEvent.InputTuple,
			MilestonesReviewedEvent.OutputTuple,
			MilestonesReviewedEvent.OutputObject
		>
		MilestonesReviewed: TypedContractEvent<
			MilestonesReviewedEvent.InputTuple,
			MilestonesReviewedEvent.OutputTuple,
			MilestonesReviewedEvent.OutputObject
		>

		'MilestonesSet(address,uint256)': TypedContractEvent<
			MilestonesSetEvent.InputTuple,
			MilestonesSetEvent.OutputTuple,
			MilestonesSetEvent.OutputObject
		>
		MilestonesSet: TypedContractEvent<
			MilestonesSetEvent.InputTuple,
			MilestonesSetEvent.OutputTuple,
			MilestonesSetEvent.OutputObject
		>

		'PoolActive(bool)': TypedContractEvent<
			PoolActiveEvent.InputTuple,
			PoolActiveEvent.OutputTuple,
			PoolActiveEvent.OutputObject
		>
		PoolActive: TypedContractEvent<
			PoolActiveEvent.InputTuple,
			PoolActiveEvent.OutputTuple,
			PoolActiveEvent.OutputObject
		>

		'RecipientStatusChanged(address,uint8)': TypedContractEvent<
			RecipientStatusChangedEvent.InputTuple,
			RecipientStatusChangedEvent.OutputTuple,
			RecipientStatusChangedEvent.OutputObject
		>
		RecipientStatusChanged: TypedContractEvent<
			RecipientStatusChangedEvent.InputTuple,
			RecipientStatusChangedEvent.OutputTuple,
			RecipientStatusChangedEvent.OutputObject
		>

		'Registered(address,bytes,address)': TypedContractEvent<
			RegisteredEvent.InputTuple,
			RegisteredEvent.OutputTuple,
			RegisteredEvent.OutputObject
		>
		Registered: TypedContractEvent<
			RegisteredEvent.InputTuple,
			RegisteredEvent.OutputTuple,
			RegisteredEvent.OutputObject
		>
	}
}
