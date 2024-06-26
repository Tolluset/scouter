import { Injectable } from '@nestjs/common';

const UPBIT_API_VERSION = 'v1';
const UPBIT_API_URL = `https://api.upbit.com/${UPBIT_API_VERSION}`;

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getCoinMarketAll() {
    const marketsResult = await fetch(`${UPBIT_API_URL}/market/all`);
    const markets = await marketsResult.json();

    return markets;
  }

  async getCoinPrice(coin: string) {
    const coinPriceResult = await fetch(
      `${UPBIT_API_URL}/ticker?markets=${coin}`,
    );
    const coinPrice = await coinPriceResult.json();

    return coinPrice;
  }

  async getCoinCandles(coin: string) {
    const coinCandlesResult = await fetch(
      `${UPBIT_API_URL}/candles/days/?market=${coin}`,
    );
    const coinCandles = await coinCandlesResult.json();
    return coinCandles;
  }
}
const TICKER = [
  {
    market: 'KRW-BTC',
    trade_date: '20240408',
    trade_time: '152926',
    trade_date_kst: '20240409',
    trade_time_kst: '002926',
    trade_timestamp: 1712590166374,
    opening_price: 99369000,
    high_price: 103084000,
    low_price: 99100000,
    trade_price: 101750000,
    prev_closing_price: 99369000,
    change: 'RISE',
    change_price: 2381000,
    change_rate: 0.0239611951,
    signed_change_price: 2381000,
    signed_change_rate: 0.0239611951,
    trade_volume: 0.01964244,
    acc_trade_price: 497413956345.86914,
    acc_trade_price_24h: 571811979391.1132,
    acc_trade_volume: 4899.94436031,
    acc_trade_volume_24h: 5645.51285975,
    highest_52_week_price: 105000000,
    highest_52_week_date: '2024-03-14',
    lowest_52_week_price: 32510000,
    lowest_52_week_date: '2023-06-15',
    timestamp: 1712590166396,
  },
];

const CANDLE = [
  {
    market: 'KRW-BTC',
    candle_date_time_utc: '2024-04-08T00:00:00',
    candle_date_time_kst: '2024-04-08T09:00:00',
    opening_price: 99369000,
    high_price: 103084000,
    low_price: 99100000,
    trade_price: 101828000,
    timestamp: 1712590320434,
    candle_acc_trade_price: 497972933214.2218,
    candle_acc_trade_volume: 4905.43925392,
    prev_closing_price: 99369000,
    change_price: 2459000,
    change_rate: 0.0247461482,
  },
];

const MARKET_ALL = [
  {
    market: 'KRW-BTC',
    korean_name: '비트코인',
    english_name: 'Bitcoin',
  },
  {
    market: 'KRW-ETH',
    korean_name: '이더리움',
    english_name: 'Ethereum',
  },
  {
    market: 'BTC-ETH',
    korean_name: '이더리움',
    english_name: 'Ethereum',
  },
  {
    market: 'BTC-XRP',
    korean_name: '리플',
    english_name: 'Ripple',
  },
  {
    market: 'BTC-ETC',
    korean_name: '이더리움클래식',
    english_name: 'Ethereum Classic',
  },
  {
    market: 'BTC-CVC',
    korean_name: '시빅',
    english_name: 'Civic',
  },
  {
    market: 'BTC-DGB',
    korean_name: '디지바이트',
    english_name: 'DigiByte',
  },
  {
    market: 'BTC-SC',
    korean_name: '시아코인',
    english_name: 'Siacoin',
  },
  {
    market: 'BTC-SNT',
    korean_name: '스테이터스네트워크토큰',
    english_name: 'Status Network Token',
  },
  {
    market: 'BTC-WAVES',
    korean_name: '웨이브',
    english_name: 'Waves',
  },
  {
    market: 'BTC-NMR',
    korean_name: '뉴메레르',
    english_name: 'Numeraire',
  },
  {
    market: 'BTC-XEM',
    korean_name: '넴',
    english_name: 'NEM',
  },
  {
    market: 'BTC-QTUM',
    korean_name: '퀀텀',
    english_name: 'Qtum',
  },
  {
    market: 'BTC-BAT',
    korean_name: '베이직어텐션토큰',
    english_name: 'Basic Attention Token',
  },
  {
    market: 'BTC-LSK',
    korean_name: '리스크',
    english_name: 'Lisk',
  },
  {
    market: 'BTC-STEEM',
    korean_name: '스팀',
    english_name: 'Steem',
  },
  {
    market: 'BTC-DOGE',
    korean_name: '도지코인',
    english_name: 'Dogecoin',
  },
  {
    market: 'BTC-BNT',
    korean_name: '뱅코르',
    english_name: 'Bancor',
  },
  {
    market: 'BTC-XLM',
    korean_name: '스텔라루멘',
    english_name: 'Lumen',
  },
  {
    market: 'BTC-ARDR',
    korean_name: '아더',
    english_name: 'Ardor',
  },
  {
    market: 'BTC-ARK',
    korean_name: '아크',
    english_name: 'Ark',
  },
  {
    market: 'BTC-STORJ',
    korean_name: '스토리지',
    english_name: 'Storj',
  },
  {
    market: 'BTC-GRS',
    korean_name: '그로스톨코인',
    english_name: 'Groestlcoin',
  },
  {
    market: 'BTC-RLC',
    korean_name: '아이젝',
    english_name: 'iEx.ec',
  },
  {
    market: 'USDT-BTC',
    korean_name: '비트코인',
    english_name: 'Bitcoin',
  },
  {
    market: 'USDT-ETH',
    korean_name: '이더리움',
    english_name: 'Ethereum',
  },
  {
    market: 'USDT-XRP',
    korean_name: '리플',
    english_name: 'Ripple',
  },
  {
    market: 'USDT-ETC',
    korean_name: '이더리움클래식',
    english_name: 'Ethereum Classic',
  },
  {
    market: 'KRW-NEO',
    korean_name: '네오',
    english_name: 'NEO',
  },
  {
    market: 'KRW-MTL',
    korean_name: '메탈',
    english_name: 'Metal',
  },
  {
    market: 'KRW-XRP',
    korean_name: '리플',
    english_name: 'Ripple',
  },
  {
    market: 'KRW-ETC',
    korean_name: '이더리움클래식',
    english_name: 'Ethereum Classic',
  },
  {
    market: 'KRW-SNT',
    korean_name: '스테이터스네트워크토큰',
    english_name: 'Status Network Token',
  },
  {
    market: 'KRW-WAVES',
    korean_name: '웨이브',
    english_name: 'Waves',
  },
  {
    market: 'KRW-XEM',
    korean_name: '넴',
    english_name: 'NEM',
  },
  {
    market: 'KRW-QTUM',
    korean_name: '퀀텀',
    english_name: 'Qtum',
  },
  {
    market: 'KRW-LSK',
    korean_name: '리스크',
    english_name: 'Lisk',
  },
  {
    market: 'KRW-STEEM',
    korean_name: '스팀',
    english_name: 'Steem',
  },
  {
    market: 'KRW-XLM',
    korean_name: '스텔라루멘',
    english_name: 'Lumen',
  },
  {
    market: 'KRW-ARDR',
    korean_name: '아더',
    english_name: 'Ardor',
  },
  {
    market: 'KRW-ARK',
    korean_name: '아크',
    english_name: 'Ark',
  },
  {
    market: 'KRW-STORJ',
    korean_name: '스토리지',
    english_name: 'Storj',
  },
  {
    market: 'KRW-GRS',
    korean_name: '그로스톨코인',
    english_name: 'Groestlcoin',
  },
  {
    market: 'KRW-ADA',
    korean_name: '에이다',
    english_name: 'Ada',
  },
  {
    market: 'BTC-ADA',
    korean_name: '에이다',
    english_name: 'Ada',
  },
  {
    market: 'BTC-MANA',
    korean_name: '디센트럴랜드',
    english_name: 'Decentraland',
  },
  {
    market: 'KRW-SBD',
    korean_name: '스팀달러',
    english_name: 'SteemDollars',
  },
  {
    market: 'BTC-SBD',
    korean_name: '스팀달러',
    english_name: 'SteemDollars',
  },
  {
    market: 'KRW-POWR',
    korean_name: '파워렛저',
    english_name: 'Power ledger',
  },
  {
    market: 'BTC-POWR',
    korean_name: '파워렛저',
    english_name: 'Power ledger',
  },
  {
    market: 'KRW-BTG',
    korean_name: '비트코인골드',
    english_name: 'Bitcoin Gold',
  },
  {
    market: 'USDT-ADA',
    korean_name: '에이다',
    english_name: 'Ada',
  },
  {
    market: 'BTC-DNT',
    korean_name: '디스트릭트0x',
    english_name: 'district0x',
  },
  {
    market: 'BTC-ZRX',
    korean_name: '제로엑스',
    english_name: '0x Protocol',
  },
  {
    market: 'BTC-TRX',
    korean_name: '트론',
    english_name: 'TRON',
  },
  {
    market: 'BTC-TUSD',
    korean_name: '트루USD',
    english_name: 'TrueUSD',
  },
  {
    market: 'BTC-LRC',
    korean_name: '루프링',
    english_name: 'Loopring',
  },
  {
    market: 'KRW-ICX',
    korean_name: '아이콘',
    english_name: 'Icon',
  },
  {
    market: 'KRW-EOS',
    korean_name: '이오스',
    english_name: 'EOS',
  },
  {
    market: 'USDT-TUSD',
    korean_name: '트루USD',
    english_name: 'TrueUSD',
  },
  {
    market: 'KRW-TRX',
    korean_name: '트론',
    english_name: 'TRON',
  },
  {
    market: 'BTC-POLYX',
    korean_name: '폴리매쉬',
    english_name: 'Polymesh',
  },
  {
    market: 'USDT-SC',
    korean_name: '시아코인',
    english_name: 'Siacoin',
  },
  {
    market: 'USDT-TRX',
    korean_name: '트론',
    english_name: 'TRON',
  },
  {
    market: 'KRW-SC',
    korean_name: '시아코인',
    english_name: 'Siacoin',
  },
  {
    market: 'KRW-ONT',
    korean_name: '온톨로지',
    english_name: 'Ontology',
  },
  {
    market: 'KRW-ZIL',
    korean_name: '질리카',
    english_name: 'Zilliqa',
  },
  {
    market: 'KRW-POLYX',
    korean_name: '폴리매쉬',
    english_name: 'Polymesh',
  },
  {
    market: 'KRW-ZRX',
    korean_name: '제로엑스',
    english_name: '0x Protocol',
  },
  {
    market: 'KRW-LOOM',
    korean_name: '룸네트워크',
    english_name: 'Loom Network',
  },
  {
    market: 'BTC-BCH',
    korean_name: '비트코인캐시',
    english_name: 'Bitcoin Cash',
  },
  {
    market: 'USDT-BCH',
    korean_name: '비트코인캐시',
    english_name: 'Bitcoin Cash',
  },
  {
    market: 'KRW-BCH',
    korean_name: '비트코인캐시',
    english_name: 'Bitcoin Cash',
  },
  {
    market: 'BTC-HIFI',
    korean_name: '하이파이',
    english_name: 'Hifi Finance',
  },
  {
    market: 'BTC-LOOM',
    korean_name: '룸네트워크',
    english_name: 'Loom Network',
  },
  {
    market: 'KRW-BAT',
    korean_name: '베이직어텐션토큰',
    english_name: 'Basic Attention Token',
  },
  {
    market: 'KRW-IOST',
    korean_name: '아이오에스티',
    english_name: 'IOST',
  },
  {
    market: 'USDT-DGB',
    korean_name: '디지바이트',
    english_name: 'DigiByte',
  },
  {
    market: 'KRW-CVC',
    korean_name: '시빅',
    english_name: 'Civic',
  },
  {
    market: 'KRW-IQ',
    korean_name: '아이큐',
    english_name: 'IQ.wiki',
  },
  {
    market: 'KRW-IOTA',
    korean_name: '아이오타',
    english_name: 'IOTA',
  },
  {
    market: 'BTC-RVN',
    korean_name: '레이븐코인',
    english_name: 'Ravencoin',
  },
  {
    market: 'BTC-GO',
    korean_name: '고체인',
    english_name: 'GoChain',
  },
  {
    market: 'BTC-UPP',
    korean_name: '센티넬프로토콜',
    english_name: 'Sentinel Protocol',
  },
  {
    market: 'BTC-ENJ',
    korean_name: '엔진코인',
    english_name: 'Enjin',
  },
  {
    market: 'KRW-HIFI',
    korean_name: '하이파이',
    english_name: 'Hifi Finance',
  },
  {
    market: 'KRW-ONG',
    korean_name: '온톨로지가스',
    english_name: 'ONG',
  },
  {
    market: 'KRW-GAS',
    korean_name: '가스',
    english_name: 'GAS',
  },
  {
    market: 'BTC-MTL',
    korean_name: '메탈',
    english_name: 'Metal',
  },
  {
    market: 'KRW-UPP',
    korean_name: '센티넬프로토콜',
    english_name: 'Sentinel Protocol',
  },
  {
    market: 'KRW-ELF',
    korean_name: '엘프',
    english_name: 'aelf',
  },
  {
    market: 'USDT-DOGE',
    korean_name: '도지코인',
    english_name: 'Dogecoin',
  },
  {
    market: 'USDT-ZRX',
    korean_name: '제로엑스',
    english_name: '0x Protocol',
  },
  {
    market: 'USDT-RVN',
    korean_name: '레이븐코인',
    english_name: 'Ravencoin',
  },
  {
    market: 'USDT-BAT',
    korean_name: '베이직어텐션토큰',
    english_name: 'Basic Attention Token',
  },
  {
    market: 'KRW-KNC',
    korean_name: '카이버네트워크',
    english_name: 'Kyber Network',
  },
  {
    market: 'BTC-MOC',
    korean_name: '모스코인',
    english_name: 'Moss Coin',
  },
  {
    market: 'BTC-ZIL',
    korean_name: '질리카',
    english_name: 'Zilliqa',
  },
  {
    market: 'KRW-BSV',
    korean_name: '비트코인에스브이',
    english_name: 'Bitcoin SV',
  },
  {
    market: 'BTC-BSV',
    korean_name: '비트코인에스브이',
    english_name: 'Bitcoin SV',
  },
  {
    market: 'BTC-IOST',
    korean_name: '아이오에스티',
    english_name: 'IOST',
  },
  {
    market: 'KRW-THETA',
    korean_name: '쎄타토큰',
    english_name: 'Theta Token',
  },
  {
    market: 'BTC-DENT',
    korean_name: '덴트',
    english_name: 'Dent',
  },
  {
    market: 'KRW-QKC',
    korean_name: '쿼크체인',
    english_name: 'QuarkChain',
  },
  {
    market: 'BTC-ELF',
    korean_name: '엘프',
    english_name: 'aelf',
  },
  {
    market: 'KRW-BTT',
    korean_name: '비트토렌트',
    english_name: 'BitTorrent',
  },
  {
    market: 'BTC-IOTX',
    korean_name: '아이오텍스',
    english_name: 'IoTeX',
  },
  {
    market: 'BTC-SOLVE',
    korean_name: '솔브케어',
    english_name: 'Solve.Care',
  },
  {
    market: 'BTC-NKN',
    korean_name: '엔케이엔',
    english_name: 'NKN',
  },
  {
    market: 'BTC-META',
    korean_name: '메타디움',
    english_name: 'Metadium',
  },
  {
    market: 'KRW-MOC',
    korean_name: '모스코인',
    english_name: 'Moss Coin',
  },
  {
    market: 'BTC-ANKR',
    korean_name: '앵커',
    english_name: 'Ankr',
  },
  {
    market: 'BTC-CRO',
    korean_name: '크로노스',
    english_name: 'Cronos',
  },
  {
    market: 'KRW-TFUEL',
    korean_name: '쎄타퓨엘',
    english_name: 'Theta Fuel',
  },
  {
    market: 'KRW-MANA',
    korean_name: '디센트럴랜드',
    english_name: 'Decentraland',
  },
  {
    market: 'KRW-ANKR',
    korean_name: '앵커',
    english_name: 'Ankr',
  },
  {
    market: 'BTC-ORBS',
    korean_name: '오브스',
    english_name: 'Orbs',
  },
  {
    market: 'BTC-AERGO',
    korean_name: '아르고',
    english_name: 'Aergo',
  },
  {
    market: 'KRW-AERGO',
    korean_name: '아르고',
    english_name: 'Aergo',
  },
  {
    market: 'KRW-ATOM',
    korean_name: '코스모스',
    english_name: 'Cosmos',
  },
  {
    market: 'KRW-TT',
    korean_name: '썬더코어',
    english_name: 'ThunderCore',
  },
  {
    market: 'KRW-CRE',
    korean_name: '캐리프로토콜',
    english_name: 'Carry Protocol',
  },
  {
    market: 'BTC-ATOM',
    korean_name: '코스모스',
    english_name: 'Cosmos',
  },
  {
    market: 'BTC-STPT',
    korean_name: '에스티피',
    english_name: 'Standard Tokenization Protocol',
  },
  {
    market: 'KRW-MBL',
    korean_name: '무비블록',
    english_name: 'MovieBloc',
  },
  {
    market: 'BTC-EOS',
    korean_name: '이오스',
    english_name: 'EOS',
  },
  {
    market: 'BTC-DAI',
    korean_name: '다이',
    english_name: 'Dai',
  },
  {
    market: 'BTC-MKR',
    korean_name: '메이커',
    english_name: 'Maker',
  },
  {
    market: 'BTC-BORA',
    korean_name: '보라',
    english_name: 'BORA',
  },
  {
    market: 'KRW-WAXP',
    korean_name: '왁스',
    english_name: 'WAX',
  },
  {
    market: 'BTC-WAXP',
    korean_name: '왁스',
    english_name: 'WAX',
  },
  {
    market: 'KRW-HBAR',
    korean_name: '헤데라',
    english_name: 'Hedera',
  },
  {
    market: 'KRW-MED',
    korean_name: '메디블록',
    english_name: 'MediBloc',
  },
  {
    market: 'BTC-MED',
    korean_name: '메디블록',
    english_name: 'MediBloc',
  },
  {
    market: 'BTC-MLK',
    korean_name: '밀크',
    english_name: 'MiL.k',
  },
  {
    market: 'KRW-MLK',
    korean_name: '밀크',
    english_name: 'MiL.k',
  },
  {
    market: 'KRW-STPT',
    korean_name: '에스티피',
    english_name: 'Standard Tokenization Protocol',
  },
  {
    market: 'BTC-VET',
    korean_name: '비체인',
    english_name: 'VeChain',
  },
  {
    market: 'KRW-ORBS',
    korean_name: '오브스',
    english_name: 'Orbs',
  },
  {
    market: 'BTC-CHZ',
    korean_name: '칠리즈',
    english_name: 'Chiliz',
  },
  {
    market: 'KRW-VET',
    korean_name: '비체인',
    english_name: 'VeChain',
  },
  {
    market: 'BTC-FX',
    korean_name: '펑션엑스',
    english_name: 'Function X',
  },
  {
    market: 'BTC-OGN',
    korean_name: '오리진프로토콜',
    english_name: 'Origin Protocol',
  },
  {
    market: 'KRW-CHZ',
    korean_name: '칠리즈',
    english_name: 'Chiliz',
  },
  {
    market: 'BTC-XTZ',
    korean_name: '테조스',
    english_name: 'Tezos',
  },
  {
    market: 'BTC-HIVE',
    korean_name: '하이브',
    english_name: 'Hive',
  },
  {
    market: 'BTC-HBD',
    korean_name: '하이브달러',
    english_name: 'Hive Dollar',
  },
  {
    market: 'BTC-OBSR',
    korean_name: '옵저버',
    english_name: 'Observer',
  },
  {
    market: 'BTC-DKA',
    korean_name: '디카르고',
    english_name: 'dKargo',
  },
  {
    market: 'KRW-STMX',
    korean_name: '스톰엑스',
    english_name: 'StormX',
  },
  {
    market: 'BTC-STMX',
    korean_name: '스톰엑스',
    english_name: 'StormX',
  },
  {
    market: 'BTC-AHT',
    korean_name: '아하토큰',
    english_name: 'AhaToken',
  },
  {
    market: 'KRW-DKA',
    korean_name: '디카르고',
    english_name: 'dKargo',
  },
  {
    market: 'BTC-LINK',
    korean_name: '체인링크',
    english_name: 'Chainlink',
  },
  {
    market: 'KRW-HIVE',
    korean_name: '하이브',
    english_name: 'Hive',
  },
  {
    market: 'KRW-KAVA',
    korean_name: '카바',
    english_name: 'Kava',
  },
  {
    market: 'BTC-KAVA',
    korean_name: '카바',
    english_name: 'Kava',
  },
  {
    market: 'KRW-AHT',
    korean_name: '아하토큰',
    english_name: 'AhaToken',
  },
  {
    market: 'KRW-LINK',
    korean_name: '체인링크',
    english_name: 'Chainlink',
  },
  {
    market: 'KRW-XTZ',
    korean_name: '테조스',
    english_name: 'Tezos',
  },
  {
    market: 'KRW-BORA',
    korean_name: '보라',
    english_name: 'BORA',
  },
  {
    market: 'BTC-JST',
    korean_name: '저스트',
    english_name: 'JUST',
  },
  {
    market: 'BTC-CHR',
    korean_name: '크로미아',
    english_name: 'Chromia',
  },
  {
    market: 'BTC-DAD',
    korean_name: '다드',
    english_name: 'DAD',
  },
  {
    market: 'BTC-TON',
    korean_name: '토카막네트워크',
    english_name: 'Tokamak Network',
  },
  {
    market: 'KRW-JST',
    korean_name: '저스트',
    english_name: 'JUST',
  },
  {
    market: 'BTC-CTSI',
    korean_name: '카르테시',
    english_name: 'Cartesi',
  },
  {
    market: 'BTC-DOT',
    korean_name: '폴카닷',
    english_name: 'Polkadot',
  },
  {
    market: 'KRW-CRO',
    korean_name: '크로노스',
    english_name: 'Cronos',
  },
  {
    market: 'BTC-COMP',
    korean_name: '컴파운드',
    english_name: 'Compound',
  },
  {
    market: 'BTC-SXP',
    korean_name: '솔라',
    english_name: 'SXP',
  },
  {
    market: 'BTC-HUNT',
    korean_name: '헌트',
    english_name: 'HUNT',
  },
  {
    market: 'KRW-TON',
    korean_name: '토카막네트워크',
    english_name: 'Tokamak Network',
  },
  {
    market: 'BTC-ONIT',
    korean_name: '온버프',
    english_name: 'ONBUFF',
  },
  {
    market: 'BTC-CRV',
    korean_name: '커브',
    english_name: 'Curve',
  },
  {
    market: 'BTC-ALGO',
    korean_name: '알고랜드',
    english_name: 'Algorand',
  },
  {
    market: 'BTC-RSR',
    korean_name: '리저브라이트',
    english_name: 'Reserve Rights',
  },
  {
    market: 'KRW-SXP',
    korean_name: '솔라',
    english_name: 'SXP',
  },
  {
    market: 'BTC-OXT',
    korean_name: '오키드',
    english_name: 'Orchid',
  },
  {
    market: 'KRW-HUNT',
    korean_name: '헌트',
    english_name: 'HUNT',
  },
  {
    market: 'BTC-SAND',
    korean_name: '샌드박스',
    english_name: 'The Sandbox',
  },
  {
    market: 'BTC-SUN',
    korean_name: '썬',
    english_name: 'SUN',
  },
  {
    market: 'KRW-DOT',
    korean_name: '폴카닷',
    english_name: 'Polkadot',
  },
  {
    market: 'BTC-QTCON',
    korean_name: '퀴즈톡',
    english_name: 'Quiztok',
  },
  {
    market: 'BTC-MVL',
    korean_name: '엠블',
    english_name: 'MVL',
  },
  {
    market: 'KRW-MVL',
    korean_name: '엠블',
    english_name: 'MVL',
  },
  {
    market: 'BTC-REI',
    korean_name: '레이',
    english_name: 'REI',
  },
  {
    market: 'BTC-AQT',
    korean_name: '알파쿼크',
    english_name: 'Alpha Quark Token',
  },
  {
    market: 'BTC-AXS',
    korean_name: '엑시인피니티',
    english_name: 'Axie Infinity',
  },
  {
    market: 'BTC-STRAX',
    korean_name: '스트라티스',
    english_name: 'Stratis',
  },
  {
    market: 'KRW-STRAX',
    korean_name: '스트라티스',
    english_name: 'Stratis',
  },
  {
    market: 'KRW-AQT',
    korean_name: '알파쿼크',
    english_name: 'Alpha Quark Token',
  },
  {
    market: 'BTC-GLM',
    korean_name: '골렘',
    english_name: 'Golem',
  },
  {
    market: 'KRW-GLM',
    korean_name: '골렘',
    english_name: 'Golem',
  },
  {
    market: 'BTC-FCT2',
    korean_name: '피르마체인',
    english_name: 'FirmaChain',
  },
  {
    market: 'KRW-META',
    korean_name: '메타디움',
    english_name: 'Metadium',
  },
  {
    market: 'KRW-FCT2',
    korean_name: '피르마체인',
    english_name: 'FirmaChain',
  },
  {
    market: 'BTC-FIL',
    korean_name: '파일코인',
    english_name: 'Filecoin',
  },
  {
    market: 'BTC-UNI',
    korean_name: '유니스왑',
    english_name: 'Uniswap',
  },
  {
    market: 'BTC-INJ',
    korean_name: '인젝티브',
    english_name: 'Injective',
  },
  {
    market: 'BTC-PROM',
    korean_name: '프롬',
    english_name: 'Prom',
  },
  {
    market: 'BTC-VAL',
    korean_name: '밸리디티',
    english_name: 'Validity',
  },
  {
    market: 'BTC-PSG',
    korean_name: '파리생제르맹',
    english_name: 'Paris Saint-Germain Fan Token',
  },
  {
    market: 'BTC-JUV',
    korean_name: '유벤투스',
    english_name: 'Juventus Fan Token',
  },
  {
    market: 'BTC-CBK',
    korean_name: '코박토큰',
    english_name: 'Cobak Token',
  },
  {
    market: 'BTC-FOR',
    korean_name: '포튜브',
    english_name: 'ForTube',
  },
  {
    market: 'KRW-CBK',
    korean_name: '코박토큰',
    english_name: 'Cobak Token',
  },
  {
    market: 'BTC-BFC',
    korean_name: '바이프로스트',
    english_name: 'Bifrost',
  },
  {
    market: 'BTC-HPO',
    korean_name: '히포크랏',
    english_name: 'Hippocrat',
  },
  {
    market: 'BTC-CELO',
    korean_name: '셀로',
    english_name: 'Celo',
  },
  {
    market: 'KRW-SAND',
    korean_name: '샌드박스',
    english_name: 'The Sandbox',
  },
  {
    market: 'KRW-HPO',
    korean_name: '히포크랏',
    english_name: 'Hippocrat',
  },
  {
    market: 'BTC-IQ',
    korean_name: '아이큐',
    english_name: 'IQ.wiki',
  },
  {
    market: 'BTC-STX',
    korean_name: '스택스',
    english_name: 'Stacks',
  },
  {
    market: 'KRW-DOGE',
    korean_name: '도지코인',
    english_name: 'Dogecoin',
  },
  {
    market: 'BTC-NEAR',
    korean_name: '니어프로토콜',
    english_name: 'NEAR Protocol',
  },
  {
    market: 'BTC-AUCTION',
    korean_name: '바운스토큰',
    english_name: 'Bounce',
  },
  {
    market: 'BTC-FLOW',
    korean_name: '플로우',
    english_name: 'Flow',
  },
  {
    market: 'BTC-STRIKE',
    korean_name: '스트라이크',
    english_name: 'Strike',
  },
  {
    market: 'KRW-STRIKE',
    korean_name: '스트라이크',
    english_name: 'Strike',
  },
  {
    market: 'BTC-PUNDIX',
    korean_name: '펀디엑스',
    english_name: 'Pundi X',
  },
  {
    market: 'KRW-PUNDIX',
    korean_name: '펀디엑스',
    english_name: 'Pundi X',
  },
  {
    market: 'KRW-FLOW',
    korean_name: '플로우',
    english_name: 'Flow',
  },
  {
    market: 'KRW-AXS',
    korean_name: '엑시인피니티',
    english_name: 'Axie Infinity',
  },
  {
    market: 'KRW-STX',
    korean_name: '스택스',
    english_name: 'Stacks',
  },
  {
    market: 'BTC-GRT',
    korean_name: '더그래프',
    english_name: 'The Graph',
  },
  {
    market: 'BTC-SNX',
    korean_name: '신세틱스',
    english_name: 'Synthetix',
  },
  {
    market: 'BTC-USDP',
    korean_name: '팍스달러',
    english_name: 'Pax Dollar',
  },
  {
    market: 'KRW-XEC',
    korean_name: '이캐시',
    english_name: 'eCash',
  },
  {
    market: 'KRW-SOL',
    korean_name: '솔라나',
    english_name: 'Solana',
  },
  {
    market: 'BTC-SOL',
    korean_name: '솔라나',
    english_name: 'Solana',
  },
  {
    market: 'KRW-MATIC',
    korean_name: '폴리곤',
    english_name: 'Polygon',
  },
  {
    market: 'BTC-MATIC',
    korean_name: '폴리곤',
    english_name: 'Polygon',
  },
  {
    market: 'KRW-AAVE',
    korean_name: '에이브',
    english_name: 'Aave',
  },
  {
    market: 'KRW-1INCH',
    korean_name: '1인치네트워크',
    english_name: '1inch Network',
  },
  {
    market: 'BTC-AAVE',
    korean_name: '에이브',
    english_name: 'Aave',
  },
  {
    market: 'BTC-1INCH',
    korean_name: '1인치네트워크',
    english_name: '1inch Network',
  },
  {
    market: 'BTC-MASK',
    korean_name: '마스크네트워크',
    english_name: 'Mask Network',
  },
  {
    market: 'KRW-ALGO',
    korean_name: '알고랜드',
    english_name: 'Algorand',
  },
  {
    market: 'BTC-AUDIO',
    korean_name: '오디우스',
    english_name: 'Audius',
  },
  {
    market: 'KRW-NEAR',
    korean_name: '니어프로토콜',
    english_name: 'NEAR Protocol',
  },
  {
    market: 'BTC-YGG',
    korean_name: '일드길드게임즈',
    english_name: 'Yield Guild Games',
  },
  {
    market: 'BTC-GTC',
    korean_name: '깃코인',
    english_name: 'Gitcoin',
  },
  {
    market: 'BTC-OCEAN',
    korean_name: '오션프로토콜',
    english_name: 'Ocean Protocol',
  },
  {
    market: 'BTC-CTC',
    korean_name: '크레딧코인',
    english_name: 'Creditcoin',
  },
  {
    market: 'BTC-LPT',
    korean_name: '라이브피어',
    english_name: 'Livepeer',
  },
  {
    market: 'KRW-AVAX',
    korean_name: '아발란체',
    english_name: 'Avalanche',
  },
  {
    market: 'BTC-AVAX',
    korean_name: '아발란체',
    english_name: 'Avalanche',
  },
  {
    market: 'BTC-IMX',
    korean_name: '이뮤터블엑스',
    english_name: 'Immutable X',
  },
  {
    market: 'BTC-RNDR',
    korean_name: '렌더토큰',
    english_name: 'Render Token',
  },
  {
    market: 'BTC-RLY',
    korean_name: '랠리',
    english_name: 'Rally',
  },
  {
    market: 'KRW-T',
    korean_name: '쓰레스홀드',
    english_name: 'Threshold',
  },
  {
    market: 'BTC-T',
    korean_name: '쓰레스홀드',
    english_name: 'Threshold',
  },
  {
    market: 'KRW-CELO',
    korean_name: '셀로',
    english_name: 'Celo',
  },
  {
    market: 'BTC-RAD',
    korean_name: '래드웍스',
    english_name: 'Radworks',
  },
  {
    market: 'BTC-AGLD',
    korean_name: '어드벤처골드',
    english_name: 'Adventure Gold',
  },
  {
    market: 'BTC-API3',
    korean_name: '에이피아이쓰리',
    english_name: 'API3',
  },
  {
    market: 'BTC-ARPA',
    korean_name: '알파',
    english_name: 'ARPA',
  },
  {
    market: 'BTC-ENS',
    korean_name: '이더리움네임서비스',
    english_name: 'Ethereum Name Service',
  },
  {
    market: 'KRW-GMT',
    korean_name: '스테픈',
    english_name: 'Stepn',
  },
  {
    market: 'BTC-GMT',
    korean_name: '스테픈',
    english_name: 'Stepn',
  },
  {
    market: 'BTC-APE',
    korean_name: '에이프코인',
    english_name: 'ApeCoin',
  },
  {
    market: 'BTC-RAY',
    korean_name: '레이디움',
    english_name: 'Raydium',
  },
  {
    market: 'KRW-APT',
    korean_name: '앱토스',
    english_name: 'Aptos',
  },
  {
    market: 'BTC-APT',
    korean_name: '앱토스',
    english_name: 'Aptos',
  },
  {
    market: 'BTC-ACM',
    korean_name: 'AC밀란',
    english_name: 'AC Milan Fan Token',
  },
  {
    market: 'BTC-AFC',
    korean_name: '아스날',
    english_name: 'Arsenal Fan Token',
  },
  {
    market: 'BTC-ATM',
    korean_name: '아틀레티코마드리드',
    english_name: 'Atletico De Madrid Fan Token',
  },
  {
    market: 'BTC-BAR',
    korean_name: 'FC바르셀로나',
    english_name: 'FC Barcelona Fan Token',
  },
  {
    market: 'BTC-CITY',
    korean_name: '맨체스터시티',
    english_name: 'Manchester City Fan Token',
  },
  {
    market: 'BTC-INTER',
    korean_name: '인터밀란',
    english_name: 'Inter Milan Fan Token',
  },
  {
    market: 'BTC-NAP',
    korean_name: '나폴리',
    english_name: 'Napoli Fan Token',
  },
  {
    market: 'KRW-SHIB',
    korean_name: '시바이누',
    english_name: 'Shiba Inu',
  },
  {
    market: 'BTC-GAL',
    korean_name: '갤럭시',
    english_name: 'Galxe',
  },
  {
    market: 'BTC-ASTR',
    korean_name: '아스타',
    english_name: 'Astar',
  },
  {
    market: 'BTC-BLUR',
    korean_name: '블러',
    english_name: 'Blur',
  },
  {
    market: 'KRW-MASK',
    korean_name: '마스크네트워크',
    english_name: 'Mask Network',
  },
  {
    market: 'BTC-ACS',
    korean_name: '액세스프로토콜',
    english_name: 'Access Protocol',
  },
  {
    market: 'BTC-MAGIC',
    korean_name: '매직',
    english_name: 'MAGIC',
  },
  {
    market: 'KRW-ARB',
    korean_name: '아비트럼',
    english_name: 'Arbitrum',
  },
  {
    market: 'BTC-ARB',
    korean_name: '아비트럼',
    english_name: 'Arbitrum',
  },
  {
    market: 'KRW-EGLD',
    korean_name: '멀티버스엑스',
    english_name: 'MultiversX',
  },
  {
    market: 'BTC-EGLD',
    korean_name: '멀티버스엑스',
    english_name: 'MultiversX',
  },
  {
    market: 'KRW-SUI',
    korean_name: '수이',
    english_name: 'Sui',
  },
  {
    market: 'BTC-SUI',
    korean_name: '수이',
    english_name: 'Sui',
  },
  {
    market: 'KRW-GRT',
    korean_name: '더그래프',
    english_name: 'The Graph',
  },
  {
    market: 'KRW-BLUR',
    korean_name: '블러',
    english_name: 'Blur',
  },
  {
    market: 'BTC-MINA',
    korean_name: '미나',
    english_name: 'Mina',
  },
  {
    market: 'KRW-IMX',
    korean_name: '이뮤터블엑스',
    english_name: 'Immutable X',
  },
  {
    market: 'BTC-STG',
    korean_name: '스타게이트파이낸스',
    english_name: 'Stargate Finance',
  },
  {
    market: 'BTC-SEI',
    korean_name: '세이',
    english_name: 'Sei',
  },
  {
    market: 'KRW-SEI',
    korean_name: '세이',
    english_name: 'Sei',
  },
  {
    market: 'BTC-CYBER',
    korean_name: '사이버커넥트',
    english_name: 'CyberConnect',
  },
  {
    market: 'BTC-GLMR',
    korean_name: '문빔',
    english_name: 'Moonbeam',
  },
  {
    market: 'KRW-MINA',
    korean_name: '미나',
    english_name: 'Mina',
  },
  {
    market: 'BTC-ID',
    korean_name: '스페이스아이디',
    english_name: 'SPACE ID',
  },
  {
    market: 'BTC-AXL',
    korean_name: '엑셀라',
    english_name: 'Axelar',
  },
  {
    market: 'KRW-CTC',
    korean_name: '크레딧코인',
    english_name: 'Creditcoin',
  },
  {
    market: 'KRW-ASTR',
    korean_name: '아스타',
    english_name: 'Astar',
  },
  {
    market: 'BTC-SPURS',
    korean_name: '토트넘홋스퍼',
    english_name: 'Tottenham Hotspur',
  },
  {
    market: 'KRW-ID',
    korean_name: '스페이스아이디',
    english_name: 'SPACE ID',
  },
  {
    market: 'KRW-PYTH',
    korean_name: '피스네트워크',
    english_name: 'Pyth Network',
  },
  {
    market: 'BTC-PYTH',
    korean_name: '피스네트워크',
    english_name: 'Pyth Network',
  },
  {
    market: 'BTC-ALT',
    korean_name: '알트레이어',
    english_name: 'Altlayer',
  },
  {
    market: 'BTC-POKT',
    korean_name: '포켓네트워크',
    english_name: 'Pocket Network',
  },
  {
    market: 'USDT-POKT',
    korean_name: '포켓네트워크',
    english_name: 'Pocket Network',
  },
  {
    market: 'KRW-MNT',
    korean_name: '맨틀',
    english_name: 'Mantle',
  },
  {
    market: 'BTC-MNT',
    korean_name: '맨틀',
    english_name: 'Mantle',
  },
  {
    market: 'USDT-MNT',
    korean_name: '맨틀',
    english_name: 'Mantle',
  },
];
