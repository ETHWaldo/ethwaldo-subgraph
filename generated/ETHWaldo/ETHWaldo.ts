// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CreatorRegistered extends ethereum.Event {
  get params(): CreatorRegistered__Params {
    return new CreatorRegistered__Params(this);
  }
}

export class CreatorRegistered__Params {
  _event: CreatorRegistered;

  constructor(event: CreatorRegistered) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get creator(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class DealApproved extends ethereum.Event {
  get params(): DealApproved__Params {
    return new DealApproved__Params(this);
  }
}

export class DealApproved__Params {
  _event: DealApproved;

  constructor(event: DealApproved) {
    this._event = event;
  }

  get dealId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class DealCreated extends ethereum.Event {
  get params(): DealCreated__Params {
    return new DealCreated__Params(this);
  }
}

export class DealCreated__Params {
  _event: DealCreated;

  constructor(event: DealCreated) {
    this._event = event;
  }

  get dealId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get sponsor(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get creator(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class DealRejected extends ethereum.Event {
  get params(): DealRejected__Params {
    return new DealRejected__Params(this);
  }
}

export class DealRejected__Params {
  _event: DealRejected;

  constructor(event: DealRejected) {
    this._event = event;
  }

  get dealId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class FundsReleased extends ethereum.Event {
  get params(): FundsReleased__Params {
    return new FundsReleased__Params(this);
  }
}

export class FundsReleased__Params {
  _event: FundsReleased;

  constructor(event: FundsReleased) {
    this._event = event;
  }

  get dealId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class SponsorRegistered extends ethereum.Event {
  get params(): SponsorRegistered__Params {
    return new SponsorRegistered__Params(this);
  }
}

export class SponsorRegistered__Params {
  _event: SponsorRegistered;

  constructor(event: SponsorRegistered) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get sponsor(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ETHWaldo__creatorsResult {
  value0: BigInt;
  value1: Address;
  value2: string;

  constructor(value0: BigInt, value1: Address, value2: string) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    return map;
  }

  getId(): BigInt {
    return this.value0;
  }

  getAddr(): Address {
    return this.value1;
  }

  getIpfsHash(): string {
    return this.value2;
  }
}

export class ETHWaldo__dealsResultCreatorStruct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get addr(): Address {
    return this[1].toAddress();
  }

  get ipfsHash(): string {
    return this[2].toString();
  }
}

export class ETHWaldo__dealsResultSponsorStruct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get addr(): Address {
    return this[1].toAddress();
  }

  get ipfsHash(): string {
    return this[2].toString();
  }

  get registered(): boolean {
    return this[3].toBoolean();
  }
}

export class ETHWaldo__dealsResult {
  value0: BigInt;
  value1: string;
  value2: string;
  value3: ETHWaldo__dealsResultCreatorStruct;
  value4: ETHWaldo__dealsResultSponsorStruct;
  value5: BigInt;
  value6: BigInt;
  value7: BigInt;
  value8: boolean;
  value9: i32;
  value10: boolean;

  constructor(
    value0: BigInt,
    value1: string,
    value2: string,
    value3: ETHWaldo__dealsResultCreatorStruct,
    value4: ETHWaldo__dealsResultSponsorStruct,
    value5: BigInt,
    value6: BigInt,
    value7: BigInt,
    value8: boolean,
    value9: i32,
    value10: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
    this.value10 = value10;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromTuple(this.value3));
    map.set("value4", ethereum.Value.fromTuple(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set("value8", ethereum.Value.fromBoolean(this.value8));
    map.set(
      "value9",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value9))
    );
    map.set("value10", ethereum.Value.fromBoolean(this.value10));
    return map;
  }

  getId(): BigInt {
    return this.value0;
  }

  getIpfsHash(): string {
    return this.value1;
  }

  getVideoId(): string {
    return this.value2;
  }

  getCreator(): ETHWaldo__dealsResultCreatorStruct {
    return this.value3;
  }

  getSponsor(): ETHWaldo__dealsResultSponsorStruct {
    return this.value4;
  }

  getTotalAmount(): BigInt {
    return this.value5;
  }

  getReleasedAmount(): BigInt {
    return this.value6;
  }

  getViewCountRequirement(): BigInt {
    return this.value7;
  }

  getReadyToRelease(): boolean {
    return this.value8;
  }

  getState(): i32 {
    return this.value9;
  }

  getActive(): boolean {
    return this.value10;
  }
}

export class ETHWaldo__getDealResult {
  value0: BigInt;
  value1: string;
  value2: string;
  value3: Address;
  value4: Address;
  value5: BigInt;
  value6: BigInt;
  value7: BigInt;
  value8: boolean;
  value9: i32;
  value10: boolean;

  constructor(
    value0: BigInt,
    value1: string,
    value2: string,
    value3: Address,
    value4: Address,
    value5: BigInt,
    value6: BigInt,
    value7: BigInt,
    value8: boolean,
    value9: i32,
    value10: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
    this.value10 = value10;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromAddress(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set("value8", ethereum.Value.fromBoolean(this.value8));
    map.set(
      "value9",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value9))
    );
    map.set("value10", ethereum.Value.fromBoolean(this.value10));
    return map;
  }

  getId(): BigInt {
    return this.value0;
  }

  getIpfsHash(): string {
    return this.value1;
  }

  getVideoId(): string {
    return this.value2;
  }

  getCreator(): Address {
    return this.value3;
  }

  getSponsor(): Address {
    return this.value4;
  }

  getTotalAmount(): BigInt {
    return this.value5;
  }

  getReleasedAmount(): BigInt {
    return this.value6;
  }

  getViewCountRequirement(): BigInt {
    return this.value7;
  }

  getReadyToRelease(): boolean {
    return this.value8;
  }

  getState(): i32 {
    return this.value9;
  }

  getActive(): boolean {
    return this.value10;
  }
}

export class ETHWaldo__sponsorsResult {
  value0: BigInt;
  value1: Address;
  value2: string;
  value3: boolean;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: string,
    value3: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromBoolean(this.value3));
    return map;
  }

  getId(): BigInt {
    return this.value0;
  }

  getAddr(): Address {
    return this.value1;
  }

  getIpfsHash(): string {
    return this.value2;
  }

  getRegistered(): boolean {
    return this.value3;
  }
}

export class ETHWaldo extends ethereum.SmartContract {
  static bind(address: Address): ETHWaldo {
    return new ETHWaldo("ETHWaldo", address);
  }

  creators(param0: Address): ETHWaldo__creatorsResult {
    let result = super.call(
      "creators",
      "creators(address):(uint256,address,string)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new ETHWaldo__creatorsResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toString()
    );
  }

  try_creators(param0: Address): ethereum.CallResult<ETHWaldo__creatorsResult> {
    let result = super.tryCall(
      "creators",
      "creators(address):(uint256,address,string)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ETHWaldo__creatorsResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toString()
      )
    );
  }

  deals(param0: BigInt): ETHWaldo__dealsResult {
    let result = super.call(
      "deals",
      "deals(uint256):(uint256,string,string,(uint256,address,string),(uint256,address,string,bool),uint256,uint256,uint256,bool,uint8,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new ETHWaldo__dealsResult(
      result[0].toBigInt(),
      result[1].toString(),
      result[2].toString(),
      changetype<ETHWaldo__dealsResultCreatorStruct>(result[3].toTuple()),
      changetype<ETHWaldo__dealsResultSponsorStruct>(result[4].toTuple()),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBigInt(),
      result[8].toBoolean(),
      result[9].toI32(),
      result[10].toBoolean()
    );
  }

  try_deals(param0: BigInt): ethereum.CallResult<ETHWaldo__dealsResult> {
    let result = super.tryCall(
      "deals",
      "deals(uint256):(uint256,string,string,(uint256,address,string),(uint256,address,string,bool),uint256,uint256,uint256,bool,uint8,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ETHWaldo__dealsResult(
        value[0].toBigInt(),
        value[1].toString(),
        value[2].toString(),
        changetype<ETHWaldo__dealsResultCreatorStruct>(value[3].toTuple()),
        changetype<ETHWaldo__dealsResultSponsorStruct>(value[4].toTuple()),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toBigInt(),
        value[8].toBoolean(),
        value[9].toI32(),
        value[10].toBoolean()
      )
    );
  }

  getDeal(_dealId: BigInt): ETHWaldo__getDealResult {
    let result = super.call(
      "getDeal",
      "getDeal(uint256):(uint256,string,string,address,address,uint256,uint256,uint256,bool,uint8,bool)",
      [ethereum.Value.fromUnsignedBigInt(_dealId)]
    );

    return new ETHWaldo__getDealResult(
      result[0].toBigInt(),
      result[1].toString(),
      result[2].toString(),
      result[3].toAddress(),
      result[4].toAddress(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBigInt(),
      result[8].toBoolean(),
      result[9].toI32(),
      result[10].toBoolean()
    );
  }

  try_getDeal(_dealId: BigInt): ethereum.CallResult<ETHWaldo__getDealResult> {
    let result = super.tryCall(
      "getDeal",
      "getDeal(uint256):(uint256,string,string,address,address,uint256,uint256,uint256,bool,uint8,bool)",
      [ethereum.Value.fromUnsignedBigInt(_dealId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ETHWaldo__getDealResult(
        value[0].toBigInt(),
        value[1].toString(),
        value[2].toString(),
        value[3].toAddress(),
        value[4].toAddress(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toBigInt(),
        value[8].toBoolean(),
        value[9].toI32(),
        value[10].toBoolean()
      )
    );
  }

  manager(): Address {
    let result = super.call("manager", "manager():(address)", []);

    return result[0].toAddress();
  }

  try_manager(): ethereum.CallResult<Address> {
    let result = super.tryCall("manager", "manager():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  sponsors(param0: Address): ETHWaldo__sponsorsResult {
    let result = super.call(
      "sponsors",
      "sponsors(address):(uint256,address,string,bool)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new ETHWaldo__sponsorsResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toString(),
      result[3].toBoolean()
    );
  }

  try_sponsors(param0: Address): ethereum.CallResult<ETHWaldo__sponsorsResult> {
    let result = super.tryCall(
      "sponsors",
      "sponsors(address):(uint256,address,string,bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ETHWaldo__sponsorsResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toString(),
        value[3].toBoolean()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _manager(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveDealCall extends ethereum.Call {
  get inputs(): ApproveDealCall__Inputs {
    return new ApproveDealCall__Inputs(this);
  }

  get outputs(): ApproveDealCall__Outputs {
    return new ApproveDealCall__Outputs(this);
  }
}

export class ApproveDealCall__Inputs {
  _call: ApproveDealCall;

  constructor(call: ApproveDealCall) {
    this._call = call;
  }

  get _dealId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ApproveDealCall__Outputs {
  _call: ApproveDealCall;

  constructor(call: ApproveDealCall) {
    this._call = call;
  }
}

export class CreateDealCall extends ethereum.Call {
  get inputs(): CreateDealCall__Inputs {
    return new CreateDealCall__Inputs(this);
  }

  get outputs(): CreateDealCall__Outputs {
    return new CreateDealCall__Outputs(this);
  }
}

export class CreateDealCall__Inputs {
  _call: CreateDealCall;

  constructor(call: CreateDealCall) {
    this._call = call;
  }

  get _creator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _viewCountRequirement(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CreateDealCall__Outputs {
  _call: CreateDealCall;

  constructor(call: CreateDealCall) {
    this._call = call;
  }
}

export class RegisterCreatorCall extends ethereum.Call {
  get inputs(): RegisterCreatorCall__Inputs {
    return new RegisterCreatorCall__Inputs(this);
  }

  get outputs(): RegisterCreatorCall__Outputs {
    return new RegisterCreatorCall__Outputs(this);
  }
}

export class RegisterCreatorCall__Inputs {
  _call: RegisterCreatorCall;

  constructor(call: RegisterCreatorCall) {
    this._call = call;
  }

  get _creator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _ipfsHash(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class RegisterCreatorCall__Outputs {
  _call: RegisterCreatorCall;

  constructor(call: RegisterCreatorCall) {
    this._call = call;
  }
}

export class RegisterSponsorCall extends ethereum.Call {
  get inputs(): RegisterSponsorCall__Inputs {
    return new RegisterSponsorCall__Inputs(this);
  }

  get outputs(): RegisterSponsorCall__Outputs {
    return new RegisterSponsorCall__Outputs(this);
  }
}

export class RegisterSponsorCall__Inputs {
  _call: RegisterSponsorCall;

  constructor(call: RegisterSponsorCall) {
    this._call = call;
  }

  get _sponsor(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _ipfsHash(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class RegisterSponsorCall__Outputs {
  _call: RegisterSponsorCall;

  constructor(call: RegisterSponsorCall) {
    this._call = call;
  }
}

export class RejectDealCall extends ethereum.Call {
  get inputs(): RejectDealCall__Inputs {
    return new RejectDealCall__Inputs(this);
  }

  get outputs(): RejectDealCall__Outputs {
    return new RejectDealCall__Outputs(this);
  }
}

export class RejectDealCall__Inputs {
  _call: RejectDealCall;

  constructor(call: RejectDealCall) {
    this._call = call;
  }

  get _dealId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RejectDealCall__Outputs {
  _call: RejectDealCall;

  constructor(call: RejectDealCall) {
    this._call = call;
  }
}

export class ReleaseFundsCall extends ethereum.Call {
  get inputs(): ReleaseFundsCall__Inputs {
    return new ReleaseFundsCall__Inputs(this);
  }

  get outputs(): ReleaseFundsCall__Outputs {
    return new ReleaseFundsCall__Outputs(this);
  }
}

export class ReleaseFundsCall__Inputs {
  _call: ReleaseFundsCall;

  constructor(call: ReleaseFundsCall) {
    this._call = call;
  }

  get _dealId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ReleaseFundsCall__Outputs {
  _call: ReleaseFundsCall;

  constructor(call: ReleaseFundsCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetReadyToReleaseCall extends ethereum.Call {
  get inputs(): SetReadyToReleaseCall__Inputs {
    return new SetReadyToReleaseCall__Inputs(this);
  }

  get outputs(): SetReadyToReleaseCall__Outputs {
    return new SetReadyToReleaseCall__Outputs(this);
  }
}

export class SetReadyToReleaseCall__Inputs {
  _call: SetReadyToReleaseCall;

  constructor(call: SetReadyToReleaseCall) {
    this._call = call;
  }

  get _dealId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _views(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetReadyToReleaseCall__Outputs {
  _call: SetReadyToReleaseCall;

  constructor(call: SetReadyToReleaseCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}