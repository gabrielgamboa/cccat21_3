import Trade from "../../domain/Trade";
import DatabaseConnection from "../database/DatabaseConnection";

export default interface TradeRepository {
  findByMarketId(marketId: string): Promise<Trade[]>;
}

export class TradeRepositoryDatabase implements TradeRepository {
  constructor(readonly connection: DatabaseConnection) {
  }

  async findByMarketId(marketId: string): Promise<Trade[]> {
    const tradesData = await this.connection.query("select * from trades where market_id = $1", [marketId]);
    const trades: Trade[] =  tradesData.map((tradeData: any) => {
      return new Trade(
        tradeData.trade_id,
        tradeData.market_id,
        tradeData.buy_order_id,
        tradeData.sell_order_id,
        tradeData.side,
        parseFloat(tradeData.quantity),
        parseFloat(tradeData.price),
        tradeData.timestamp
      );
    });
    return trades;
  }
}