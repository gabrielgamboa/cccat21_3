import TradeRepository from "../../infra/repository/TradeRepository"

type Output = {
  tradeId: string
   buyOrderId: string
   sellOrderId: string
   side: string
   quantity: number
   price: number
   timestamp: Date
}[]

export class GetTrades {
  constructor(
    private readonly tradeRepository: TradeRepository
  ) {

  }

  async execute(marketId: string): Promise<Output> {
    const trades = await this.tradeRepository.findByMarketId(marketId);
    return trades;
  }
}