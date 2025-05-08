export default class Trade {

  constructor (
      readonly tradeId: string,
      readonly marketId: string,
      readonly buyOrderId: string,
      readonly sellOrderId: string,
      readonly side: string,
      readonly quantity: number,
      readonly price: number,
      readonly timestamp: Date
  ) {        
  }
}
