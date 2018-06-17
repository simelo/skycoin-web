import { BaseCoin } from './basecoin.coin';
import { coinsId } from '../constants/coins-id.const';
import { environment } from '../../environments/environment';

export class SkyCoin extends BaseCoin {
  constructor() {
    super({
      id: coinsId.sky,
      nodeUrl: environment.production ? 'https://node.skycoin.net/api/v1/' : '/api/v1/',
      nodeVersion: environment.production ? '0.23.0' : '0.23.1-rc2',
      coinName: 'Skycoin',
      coinSymbol: 'SKY',
      hoursName: 'Coin Hours'
    });
  }
}
