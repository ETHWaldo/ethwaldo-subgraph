import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CreatorRegistered,
  DealApproved,
  DealCreated,
  DealRejected,
  FundsReleased,
  OwnershipTransferred,
  SponsorRegistered
} from "../generated/ETHWaldo/ETHWaldo"

export function createCreatorRegisteredEvent(
  id: BigInt,
  creator: Address
): CreatorRegistered {
  let creatorRegisteredEvent = changetype<CreatorRegistered>(newMockEvent())

  creatorRegisteredEvent.parameters = new Array()

  creatorRegisteredEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  creatorRegisteredEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )

  return creatorRegisteredEvent
}

export function createDealApprovedEvent(dealId: BigInt): DealApproved {
  let dealApprovedEvent = changetype<DealApproved>(newMockEvent())

  dealApprovedEvent.parameters = new Array()

  dealApprovedEvent.parameters.push(
    new ethereum.EventParam("dealId", ethereum.Value.fromUnsignedBigInt(dealId))
  )

  return dealApprovedEvent
}

export function createDealCreatedEvent(
  dealId: BigInt,
  sponsor: Address,
  creator: Address,
  amount: BigInt
): DealCreated {
  let dealCreatedEvent = changetype<DealCreated>(newMockEvent())

  dealCreatedEvent.parameters = new Array()

  dealCreatedEvent.parameters.push(
    new ethereum.EventParam("dealId", ethereum.Value.fromUnsignedBigInt(dealId))
  )
  dealCreatedEvent.parameters.push(
    new ethereum.EventParam("sponsor", ethereum.Value.fromAddress(sponsor))
  )
  dealCreatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  dealCreatedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return dealCreatedEvent
}

export function createDealRejectedEvent(dealId: BigInt): DealRejected {
  let dealRejectedEvent = changetype<DealRejected>(newMockEvent())

  dealRejectedEvent.parameters = new Array()

  dealRejectedEvent.parameters.push(
    new ethereum.EventParam("dealId", ethereum.Value.fromUnsignedBigInt(dealId))
  )

  return dealRejectedEvent
}

export function createFundsReleasedEvent(
  dealId: BigInt,
  amount: BigInt
): FundsReleased {
  let fundsReleasedEvent = changetype<FundsReleased>(newMockEvent())

  fundsReleasedEvent.parameters = new Array()

  fundsReleasedEvent.parameters.push(
    new ethereum.EventParam("dealId", ethereum.Value.fromUnsignedBigInt(dealId))
  )
  fundsReleasedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return fundsReleasedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createSponsorRegisteredEvent(
  id: BigInt,
  sponsor: Address
): SponsorRegistered {
  let sponsorRegisteredEvent = changetype<SponsorRegistered>(newMockEvent())

  sponsorRegisteredEvent.parameters = new Array()

  sponsorRegisteredEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  sponsorRegisteredEvent.parameters.push(
    new ethereum.EventParam("sponsor", ethereum.Value.fromAddress(sponsor))
  )

  return sponsorRegisteredEvent
}
