// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class AppProxyForwarder extends SmartContract {
  static bind(address: Address): AppProxyForwarder {
    return new AppProxyForwarder("AppProxyForwarder", address);
  }

  isForwarder(): boolean {
    let result = super.call("isForwarder", []);

    return result[0].toBoolean();
  }

  try_isForwarder(): CallResult<boolean> {
    let result = super.tryCall("isForwarder", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  canForward(sender: Address, evmCallScript: Bytes): boolean {
    let result = super.call("canForward", [
      EthereumValue.fromAddress(sender),
      EthereumValue.fromBytes(evmCallScript)
    ]);

    return result[0].toBoolean();
  }

  try_canForward(sender: Address, evmCallScript: Bytes): CallResult<boolean> {
    let result = super.tryCall("canForward", [
      EthereumValue.fromAddress(sender),
      EthereumValue.fromBytes(evmCallScript)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }
}

export class ForwardCall extends EthereumCall {
  get inputs(): ForwardCall__Inputs {
    return new ForwardCall__Inputs(this);
  }

  get outputs(): ForwardCall__Outputs {
    return new ForwardCall__Outputs(this);
  }
}

export class ForwardCall__Inputs {
  _call: ForwardCall;

  constructor(call: ForwardCall) {
    this._call = call;
  }

  get evmCallScript(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class ForwardCall__Outputs {
  _call: ForwardCall;

  constructor(call: ForwardCall) {
    this._call = call;
  }
}