import {
  CreatorRegistered as CreatorRegisteredEvent,
  DealApproved as DealApprovedEvent,
  DealCreated as DealCreatedEvent,
  DealRejected as DealRejectedEvent,
  FundsReleased as FundsReleasedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  SponsorRegistered as SponsorRegisteredEvent
} from "../generated/ETHWaldo/ETHWaldo"
import {
  CreatorRegistered,
  DealApproved,
  DealCreated,
  DealRejected,
  FundsReleased,
  OwnershipTransferred,
  SponsorRegistered
} from "../generated/schema"

export function handleCreatorRegistered(event: CreatorRegisteredEvent): void {
  let entity = new CreatorRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.id = event.params.id
  entity.creator = event.params.creator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDealApproved(event: DealApprovedEvent): void {
  let entity = new DealApproved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.dealId = event.params.dealId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDealCreated(event: DealCreatedEvent): void {
  let entity = new DealCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.dealId = event.params.dealId
  entity.sponsor = event.params.sponsor
  entity.creator = event.params.creator
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDealRejected(event: DealRejectedEvent): void {
  let entity = new DealRejected(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.dealId = event.params.dealId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFundsReleased(event: FundsReleasedEvent): void {
  let entity = new FundsReleased(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.dealId = event.params.dealId
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSponsorRegistered(event: SponsorRegisteredEvent): void {
  let entity = new SponsorRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.id = event.params.id
  entity.sponsor = event.params.sponsor

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
