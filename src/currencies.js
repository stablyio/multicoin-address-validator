var XRPValidator = require("./ripple_validator");
var ETHValidator = require("./ethereum_validator");
var BTCValidator = require("./bitcoin_validator");
var ADAValidator = require("./ada_validator");
var XMRValidator = require("./monero_validator");
var NANOValidator = require("./nano_validator");
var SCValidator = require("./siacoin_validator");
var TRXValidator = require("./tron_validator");
var NEMValidator = require("./nem_validator");
var LSKValidator = require("./lisk_validator");
var BCHValidator = require("./bch_validator");
var XLMValidator = require("./stellar_validator");
var EOSValidator = require("./eos_validator");
var XTZValidator = require("./tezos_validator");
var USDTValidator = require("./usdt_validator");
var AlgoValidator = require("./algo_validator");
var DotValidator = require("./dot_validator");
var BIP173Validator = require("./bip173_validator");
var Base58Validator = require("./base58_validator");
// Chia
var ChiaValidator = require("./chia_validator");
// Harmony
var HarmonyValidator = require("./harmony_validator");
// from trezor
var AEValidator = require("./ae_validator");
var ARDRValidator = require("./ardr_validator");
var ATOMValidator = require("./atom_validator");
var BinanceValidator = require("./binance_validator");
var HBARValidator = require("./hbar_validator");
var ICXValidator = require("./icx_validator");
var IOSTValidator = require("./iost_validator");
// var IOTAValidator = require('./iota_validator');
var NXTValidator = require("./nxt_validator");
var STEEMValidator = require("./steem_validator");
var SYSValidator = require("./sys_validator");
var ZILValidator = require("./zil_validator");
var PolymeshValidator = require("./polymesh_validator");
var CoreumValidator = require("./coreum_validator");

// defines P2PKH, P2SH and bech32 address types for standard (prod) and testnet networks
var CURRENCIES = [
    {
        name: "Bitcoin",
        symbol: "btc",
        segwitHrp: { prod: "bc", testnet: "tb", regtest: "bcrt" },
        addressTypes: {
            prod: ["00", "05"],
            testnet: ["6f", "c4", "3c", "26"],
            regtest: ["6f", "c4", "3c", "26"],
        },
        bech32Hrp: { prod: ["bc"], testnet: ["tb"] },
        validator: BTCValidator,
    },
    {
        name: "BitcoinCash",
        symbol: "bch",
        regexp: "^[qQpP]{1}[0-9a-zA-Z]{41}$",
        addressTypes: { prod: ["00", "05"], testnet: ["6f", "c4"] },
        validator: BCHValidator,
    },
    {
        name: "Bitcoin Diamond",
        symbol: "bcd",
        validator: BTCValidator,
        addressTypes: { prod: ["00"] },
    },
    {
        name: "Bitcoin SV",
        symbol: "bsv",
        regexp: "^[qQ]{1}[0-9a-zA-Z]{41}$",
        addressTypes: { prod: ["00", "05"], testnet: ["6f", "c4"] },
        validator: BCHValidator,
    },
    {
        name: "Fujicoin",
        symbol: "fjc",
        segwitHrp: { prod: "fc", testnet: "tf" },
        addressTypes: { prod: ["24", "10"], testnet: ["4a", "c4"] },
        validator: BTCValidator,
    },
    {
        name: "LiteCoin",
        symbol: "ltc",
        segwitHrp: { prod: "ltc", testnet: "tltc" },
        addressTypes: {
            prod: ["30", "05", "32"],
            testnet: ["6f", "c4", "3a"],
        },
        bech32Hrp: { prod: ["ltc"], testnet: ["tltc"] },
        validator: BTCValidator,
    },
    {
        name: "PeerCoin",
        symbol: "ppc",
        addressTypes: { prod: ["37", "75"], testnet: ["6f", "c4"] },
        validator: BTCValidator,
    },
    {
        name: "DogeCoin",
        symbol: "doge",
        addressTypes: { prod: ["1e", "16"], testnet: ["71", "c4"] },
        validator: BTCValidator,
    },
    {
        name: "BeaverCoin",
        symbol: "bvc",
        addressTypes: { prod: ["19", "05"], testnet: ["6f", "c4"] },
        validator: BTCValidator,
    },
    {
        name: "FreiCoin",
        symbol: "frc",
        addressTypes: { prod: ["00", "05"], testnet: ["6f", "c4"] },
        validator: BTCValidator,
    },
    {
        name: "ProtoShares",
        symbol: "pts",
        addressTypes: { prod: ["38", "05"], testnet: ["6f", "c4"] },
        validator: BTCValidator,
    },
    {
        name: "MegaCoin",
        symbol: "mec",
        addressTypes: { prod: ["32", "05"], testnet: ["6f", "c4"] },
        validator: BTCValidator,
    },
    {
        name: "PrimeCoin",
        symbol: "xpm",
        addressTypes: { prod: ["17", "53"], testnet: ["6f", "c4"] },
        validator: BTCValidator,
    },
    {
        name: "AuroraCoin",
        symbol: "aur",
        addressTypes: { prod: ["17", "05"], testnet: ["6f", "c4"] },
        validator: BTCValidator,
    },
    {
        name: "NameCoin",
        symbol: "nmc",
        addressTypes: { prod: ["34"], testnet: [] },
        validator: BTCValidator,
    },
    {
        name: "NXT",
        symbol: "nxt",
        validator: NXTValidator,
    },
    {
        name: "BioCoin",
        symbol: "bio",
        addressTypes: { prod: ["19", "14"], testnet: ["6f", "c4"] },
        validator: BTCValidator,
    },
    {
        name: "GarliCoin",
        symbol: "grlc",
        addressTypes: { prod: ["26", "05"], testnet: ["6f", "c4"] },
        validator: BTCValidator,
    },
    {
        name: "VertCoin",
        symbol: "vtc",
        addressTypes: {
            prod: ["0x", "47", "71", "05"],
            testnet: ["6f", "c4"],
        },
        bech32Hrp: { prod: ["vtc"], testnet: ["tvtc"] },
        validator: BTCValidator,
    },
    {
        name: "BitcoinGold",
        symbol: "btg",
        segwitHrp: { prod: "btg", testnet: "tbtg" },
        addressTypes: { prod: ["26", "17"], testnet: ["6f", "c4"] },
        validator: BTCValidator,
    },
    {
        name: "Komodo",
        symbol: "kmd",
        addressTypes: { prod: ["3c", "55"], testnet: ["0", "5"] },
        validator: BTCValidator,
    },
    {
        name: "BitcoinZ",
        symbol: "btcz",
        expectedLength: 26,
        addressTypes: { prod: ["1cb8", "1cbd"], testnet: ["1d25", "1cba"] },
        validator: BTCValidator,
    },
    {
        name: "BitcoinPrivate",
        symbol: "btcp",
        expectedLength: 26,
        addressTypes: { prod: ["1325", "13af"], testnet: ["1957", "19e0"] },
        validator: BTCValidator,
    },
    {
        name: "Hush",
        symbol: "hush",
        expectedLength: 26,
        addressTypes: { prod: ["1cb8", "1cbd"], testnet: ["1d25", "1cba"] },
        validator: BTCValidator,
    },
    {
        name: "SnowGem",
        symbol: "sng",
        expectedLength: 26,
        addressTypes: { prod: ["1c28", "1c2d"], testnet: ["1d25", "1cba"] },
        validator: BTCValidator,
    },
    {
        name: "ZCash",
        symbol: "zec",
        expectedLength: 26,
        addressTypes: { prod: ["1cb8", "1cbd"], testnet: ["1d25", "1cba"] },
        validator: BTCValidator,
    },
    {
        name: "ZClassic",
        symbol: "zcl",
        expectedLength: 26,
        addressTypes: { prod: ["1cb8", "1cbd"], testnet: ["1d25", "1cba"] },
        validator: BTCValidator,
    },
    {
        name: "ZenCash",
        symbol: "zen",
        expectedLength: 26,
        addressTypes: { prod: ["2089", "2096"], testnet: ["2092", "2098"] },
        validator: BTCValidator,
    },
    {
        name: "VoteCoin",
        symbol: "vot",
        expectedLength: 26,
        addressTypes: { prod: ["1cb8", "1cbd"], testnet: ["1d25", "1cba"] },
        validator: BTCValidator,
    },
    {
        name: "Decred",
        symbol: "dcr",
        addressTypes: { prod: ["073f", "071a"], testnet: ["0f21", "0efc"] },
        hashFunction: "blake256",
        expectedLength: 26,
        validator: BTCValidator,
    },
    {
        name: "GameCredits",
        symbol: "game",
        segwitHrp: { prod: "game", prod: "tgame" },
        addressTypes: { prod: ["26", "05"], testnet: [] },
        validator: ETHValidator,
    },
    {
        name: "PIVX",
        symbol: "pivx",
        addressTypes: { prod: ["1e", "0d"], testnet: [] },
        validator: BTCValidator,
    },
    {
        name: "SolarCoin",
        symbol: "slr",
        addressTypes: { prod: ["12", "05"], testnet: [] },
        validator: BTCValidator,
    },
    {
        name: "MonaCoin",
        symbol: "mona",
        segwitHrp: { prod: "mona", prod: "tmona" },
        addressTypes: { prod: ["32", "37"], testnet: ["6f", "75"] },
        validator: BTCValidator,
    },
    {
        name: "DigiByte",
        symbol: "dgb",
        segwitHrp: { prod: "dgb" },
        addressTypes: { prod: ["1e", "3f"], testnet: [] },
        bech32Hrp: { prod: ["dgb", "S"], testnet: [] },
        validator: BTCValidator,
    },
    {
        name: "Tether",
        symbol: "usdt",
        addressTypes: { prod: ["00", "05"], testnet: ["6f", "c4"] },
        validator: USDTValidator,
    },
    {
        name: "Ripple",
        symbol: "xrp",
        validator: XRPValidator,
    },
    {
        name: "XRPL",
        symbol: "xrpl",
        validator: XRPValidator,
    },
    {
        name: "Dash",
        symbol: "dash",
        addressTypes: { prod: ["4c", "10"], testnet: ["8c", "13"] },
        validator: BTCValidator,
    },
    {
        name: "Neo",
        symbol: "neo",
        addressTypes: { prod: ["17"], testnet: [] },
        validator: BTCValidator,
    },
    {
        name: "NeoGas",
        symbol: "gas",
        addressTypes: { prod: ["17"], testnet: [] },
        validator: BTCValidator,
    },
    {
        name: "Qtum",
        symbol: "qtum",
        segwitHrp: { prod: "qc", prod: "tq" },
        addressTypes: { prod: ["3a", "32"], testnet: ["78", "6e"] },
        validator: BTCValidator,
    },
    {
        name: "Waves",
        symbol: "waves",
        addressTypes: { prod: ["0157"], testnet: ["0154"] },
        expectedLength: 26,
        hashFunction: "blake256keccak256",
        regex: /^[a-zA-Z0-9]{35}$/,
        validator: BTCValidator,
    },
    {
        name: "Ontology",
        symbol: "ont",
        validator: BTCValidator,
        addressTypes: { prod: ["17", "41"] },
    },
    {
        name: "Ravencoin",
        symbol: "rvn",
        validator: BTCValidator,
        addressTypes: { prod: ["3c"] },
    },
    {
        name: "Groestlcoin",
        symbol: "grs",
        addressTypes: { prod: ["24", "05"], testnet: ["6f", "c4"] },
        segwitHrp: { prod: "grs", testnet: "tgrs" },
        hashFunction: "groestl512x2",
        validator: BTCValidator,
    },
    {
        name: "Ethereum",
        symbol: "eth",
        validator: ETHValidator,
    },
    {
        name: "EthereumPow",
        symbol: "ethw",
        validator: ETHValidator,
    },
    {
        name: "EtherZero",
        symbol: "etz",
        validator: ETHValidator,
    },
    {
        name: "EthereumClassic",
        symbol: "etc",
        validator: ETHValidator,
    },
    {
        name: "Callisto",
        symbol: "clo",
        validator: ETHValidator,
    },
    {
        name: "Bankex",
        symbol: "bkx",
        validator: ETHValidator,
    },
    {
        name: "Cardano",
        symbol: "ada",
        bech32Hrp: { prod: ["addr"], testnet: ["addr"] },
        validator: ADAValidator,
    },
    {
        name: "Monero",
        symbol: "xmr",
        addressTypes: {
            prod: ["18", "42"],
            testnet: ["53", "63"],
            stagenet: ["24"],
        },
        iAddressTypes: { prod: ["19"], testnet: ["54"], stagenet: ["25"] },
        validator: XMRValidator,
    },
    {
        name: "Aragon",
        symbol: "ant",
        validator: ETHValidator,
    },
    {
        name: "Basic Attention Token",
        symbol: "bat",
        validator: ETHValidator,
    },
    {
        name: "Bancor",
        symbol: "bnt",
        validator: ETHValidator,
    },
    {
        name: "Civic",
        symbol: "cvc",
        validator: ETHValidator,
    },
    {
        name: "Own", // Rebranded from Chainium
        symbol: "chx",
        validator: ETHValidator,
    },
    {
        name: "District0x",
        symbol: "dnt",
        validator: ETHValidator,
    },
    {
        name: "Gnosis",
        symbol: "gno",
        validator: ETHValidator,
    },
    {
        name: "Golem (GNT)",
        symbol: "gnt",
        validator: ETHValidator,
    },
    {
        name: "Golem",
        symbol: "glm",
        validator: ETHValidator,
    },
    {
        name: "Matchpool",
        symbol: "gup",
        validator: ETHValidator,
    },
    {
        name: "Melon",
        symbol: "mln",
        validator: ETHValidator,
    },
    {
        name: "Numeraire",
        symbol: "nmr",
        validator: ETHValidator,
    },
    {
        name: "OmiseGO",
        symbol: "omg",
        validator: ETHValidator,
    },
    {
        name: "TenX",
        symbol: "pay",
        validator: ETHValidator,
    },
    {
        name: "Ripio Credit Network",
        symbol: "rcn",
        validator: ETHValidator,
    },
    {
        name: "Augur",
        symbol: "rep",
        validator: ETHValidator,
    },
    {
        name: "iExec RLC",
        symbol: "rlc",
        validator: ETHValidator,
    },
    {
        name: "Salt",
        symbol: "salt",
        validator: ETHValidator,
    },
    {
        name: "Status",
        symbol: "snt",
        validator: ETHValidator,
    },
    {
        name: "Storj",
        symbol: "storj",
        validator: ETHValidator,
    },
    {
        name: "Swarm City",
        symbol: "swt",
        validator: ETHValidator,
    },
    {
        name: "TrueUSD",
        symbol: "tusd",
        validator: ETHValidator,
    },
    {
        name: "Wings",
        symbol: "wings",
        validator: ETHValidator,
    },
    {
        name: "0x",
        symbol: "zrx",
        validator: ETHValidator,
    },
    {
        name: "Expanse",
        symbol: "exp",
        validator: ETHValidator,
    },
    {
        name: "Viberate",
        symbol: "vib",
        validator: ETHValidator,
    },
    {
        name: "Odyssey",
        symbol: "ocn",
        validator: ETHValidator,
    },
    {
        name: "Polymath",
        symbol: "poly",
        validator: ETHValidator,
    },
    {
        name: "Storm",
        symbol: "storm",
        validator: ETHValidator,
    },
    {
        name: "FirstBlood",
        symbol: "1st",
        validator: ETHValidator,
    },
    {
        name: "Arcblock",
        symbol: "abt",
        validator: ETHValidator,
    },
    {
        name: "Abyss Token",
        symbol: "abyss",
        validator: ETHValidator,
    },
    {
        name: "adToken",
        symbol: "adt",
        validator: ETHValidator,
    },
    {
        name: "AdEx",
        symbol: "adx",
        validator: ETHValidator,
    },
    {
        name: "SingularityNET",
        symbol: "agi",
        validator: ETHValidator,
    },
    {
        name: "Ambrosus",
        symbol: "amb",
        validator: ETHValidator,
    },
    {
        name: "Ankr",
        symbol: "ankr",
        validator: ETHValidator,
    },
    {
        name: "AppCoins",
        symbol: "appc",
        validator: ETHValidator,
    },
    {
        name: "Cosmos",
        symbol: "atom",
        validator: ATOMValidator,
    },
    {
        name: "Aeron",
        symbol: "arn",
        validator: ETHValidator,
    },
    {
        name: "Aeternity",
        symbol: "ae",
        validator: AEValidator,
    },
    {
        name: "ATLANT",
        symbol: "atl",
        validator: ETHValidator,
    },
    {
        name: "aXpire",
        symbol: "axpr",
        validator: ETHValidator,
    },
    {
        name: "Band Protocol",
        symbol: "band",
        validator: ETHValidator,
    },
    {
        name: "Blockmason Credit Protocol",
        symbol: "bcpt",
        validator: ETHValidator,
    },
    {
        name: "BitDegree",
        symbol: "bdg",
        validator: ETHValidator,
    },
    {
        name: "BetterBetting",
        symbol: "betr",
        validator: ETHValidator,
    },
    {
        name: "Bluzelle",
        symbol: "blz",
        validator: ETHValidator,
    },
    {
        name: "Bread",
        symbol: "brd",
        validator: ETHValidator,
    },
    {
        name: "Blocktrade Token",
        symbol: "btt",
        validator: ETHValidator,
    },
    {
        name: "Binance USD",
        symbol: "busd",
        validator: ETHValidator,
    },
    {
        name: "CryptoBossCoin",
        symbol: "cbc",
        validator: ETHValidator,
    },
    {
        name: "Blox",
        symbol: "cdt",
        validator: ETHValidator,
    },
    {
        name: "Celer Network",
        symbol: "celr",
        validator: ETHValidator,
    },
    {
        name: "Chiliz",
        symbol: "chz",
        validator: ETHValidator,
    },
    {
        name: "Coinlancer",
        symbol: "cl",
        validator: ETHValidator,
    },
    {
        name: "Cindicator",
        symbol: "cnd",
        validator: ETHValidator,
    },
    {
        name: "Nano",
        symbol: "nano",
        validator: NANOValidator,
    },
    {
        name: "RaiBlocks",
        symbol: "xrb",
        validator: NANOValidator,
    },
    {
        name: "Siacoin",
        symbol: "sc",
        validator: SCValidator,
    },
    {
        name: "HyperSpace",
        symbol: "xsc",
        validator: SCValidator,
    },
    {
        name: "loki",
        symbol: "loki",
        addressTypes: { prod: ["114", "115", "116"], testnet: [] },
        iAddressTypes: { prod: ["115"], testnet: [] },
        validator: XMRValidator,
    },
    {
        name: "LBRY Credits",
        symbol: "lbc",
        addressTypes: { prod: ["55"], testnet: [] },
        validator: BTCValidator,
    },
    {
        name: "Tron",
        symbol: "trx",
        addressTypes: { prod: [0x41], testnet: [0xa0] },
        validator: TRXValidator,
    },
    {
        name: "Nem",
        symbol: "xem",
        validator: NEMValidator,
    },
    {
        name: "Lisk",
        symbol: "lsk",
        validator: LSKValidator,
    },
    {
        name: "Stellar",
        symbol: "xlm",
        validator: XLMValidator,
    },
    {
        name: "BTU Protocol",
        symbol: "btu",
        validator: ETHValidator,
    },
    {
        name: "Crypto.com Coin",
        symbol: "cro",
        bech32Hrp: { prod: ["cro"], testnet: ["tcro"] },
        validator: BIP173Validator,
    },
    {
        name: "Multi-collateral DAI",
        symbol: "dai",
        validator: ETHValidator,
    },
    {
        name: "Enjin Coin",
        symbol: "enj",
        validator: ETHValidator,
    },
    {
        name: "HedgeTrade",
        symbol: "hedg",
        validator: ETHValidator,
    },
    {
        name: "Cred",
        symbol: "lba",
        validator: ETHValidator,
    },
    {
        name: "Chainlink",
        symbol: "link",
        validator: ETHValidator,
    },
    {
        name: "Loom Network",
        symbol: "loom",
        validator: ETHValidator,
    },
    {
        name: "Maker",
        symbol: "mkr",
        validator: ETHValidator,
    },
    {
        name: "Metal",
        symbol: "mtl",
        validator: ETHValidator,
    },
    {
        name: "Ocean Protocol",
        symbol: "ocean",
        validator: ETHValidator,
    },
    {
        name: "Quant",
        symbol: "qnt",
        validator: ETHValidator,
    },
    {
        name: "Synthetix Network",
        symbol: "snx",
        validator: ETHValidator,
    },
    {
        name: "SOLVE",
        symbol: "solve",
        validator: ETHValidator,
    },
    {
        name: "Spendcoin",
        symbol: "spnd",
        validator: ETHValidator,
    },
    {
        name: "TEMCO",
        symbol: "temco",
        validator: ETHValidator,
    },
    {
        name: "EOS",
        symbol: "eos",
        validator: EOSValidator,
    },
    {
        name: "Tezos",
        symbol: "xtz",
        validator: XTZValidator,
    },
    {
        name: "Cocos-BCX",
        symbol: "cocos",
        validator: ETHValidator,
    },
    {
        name: "COS",
        symbol: "cos",
        validator: ETHValidator,
    },
    {
        name: "Cosmo Coin",
        symbol: "cosm",
        validator: ETHValidator,
    },
    {
        name: "Covesting",
        symbol: "cov",
        validator: ETHValidator,
    },
    {
        name: "Crypterium",
        symbol: "crpt",
        validator: ETHValidator,
    },
    {
        name: "Daneel",
        symbol: "dan",
        validator: ETHValidator,
    },
    {
        name: "Streamr DATAcoin",
        symbol: "data",
        validator: ETHValidator,
    },
    {
        name: "Dentacoin",
        symbol: "dcn",
        validator: ETHValidator,
    },
    {
        name: "Dent",
        symbol: "dent",
        validator: ETHValidator,
    },
    {
        name: "DigixDAO",
        symbol: "dgd",
        validator: ETHValidator,
    },
    {
        name: "Digitex Futures",
        symbol: "dgtx",
        validator: ETHValidator,
    },
    {
        name: "Agrello",
        symbol: "dlt",
        validator: ETHValidator,
    },
    {
        name: "Dock",
        symbol: "dock",
        validator: ETHValidator,
    },
    {
        name: "DomRaider",
        symbol: "drt",
        validator: ETHValidator,
    },
    {
        name: "Dusk Network",
        symbol: "dusk",
        validator: ETHValidator,
    },
    {
        name: "Edgeless",
        symbol: "edg",
        validator: ETHValidator,
    },
    {
        name: "Eidoo",
        symbol: "edo",
        validator: ETHValidator,
    },
    {
        name: "Electrify.Asia",
        symbol: "elec",
        validator: ETHValidator,
    },
    {
        name: "aelf",
        symbol: "elf",
        validator: ETHValidator,
    },
    {
        name: "Enigma",
        symbol: "eng",
        validator: ETHValidator,
    },
    {
        name: "STASIS EURO",
        symbol: "eurs",
        validator: ETHValidator,
    },
    {
        name: "Everex",
        symbol: "evx",
        validator: ETHValidator,
    },
    {
        name: "VeChain",
        symbol: "vet",
        validator: ETHValidator,
    },
    {
        name: "StormX",
        symbol: "stmx",
        validator: ETHValidator,
    },
    {
        name: "AugurV2",
        symbol: "repv2",
        validator: ETHValidator,
    },
    {
        name: "FirmaChain",
        symbol: "fct",
        validator: ETHValidator,
    },
    {
        name: "BlockTrade",
        symbol: "btt",
        validator: ETHValidator,
    },
    {
        name: "Quantum Resistant Ledger",
        symbol: "qrl",
        validator: ETHValidator,
    },
    {
        name: "Serve",
        symbol: "serv",
        validator: ETHValidator,
    },
    {
        name: "Tap",
        symbol: "xtp",
        validator: ETHValidator,
    },
    {
        name: "Compound",
        symbol: "comp",
        validator: ETHValidator,
    },
    {
        name: "Paxos",
        symbol: "pax",
        validator: ETHValidator,
    },
    {
        name: "USD Coin",
        symbol: "usdc",
        validator: ETHValidator,
    },
    {
        name: "CUSD",
        symbol: "cusd",
        validator: ETHValidator,
    },
    {
        name: "Algorand",
        symbol: "algo",
        validator: AlgoValidator,
    },
    {
        name: "Polkadot",
        symbol: "dot",
        validator: DotValidator,
    },
    {
        name: "Uniswap Coin",
        symbol: "uni",
        validator: ETHValidator,
    },
    {
        name: "Aave Coin",
        symbol: "aave",
        validator: ETHValidator,
    },
    {
        name: "Matic",
        symbol: "matic",
        validator: ETHValidator,
    },
    {
        name: "Decentraland",
        symbol: "mana",
        validator: ETHValidator,
    },
    {
        name: "Solana",
        symbol: "sol",
        validator: Base58Validator,
        maxLength: 44,
        minLength: 43,
    },
    {
        name: "Binance",
        symbol: "bnb",
        validator: BinanceValidator,
    },
    {
        name: "BinanceChain",
        symbol: "bnb",
        validator: BinanceValidator,
    },
    {
        name: "Binance Smart Chain",
        symbol: "bsc",
        validator: ETHValidator,
    },
    {
        name: "Fortuna",
        symbol: "fota",
        validator: ETHValidator,
    },
    {
        name: "Fantom",
        symbol: "ftm",
        validator: ETHValidator,
    },
    {
        name: "Etherparty",
        symbol: "fuel",
        validator: ETHValidator,
    },
    {
        name: "Gifto",
        symbol: "gto",
        validator: ETHValidator,
    },
    {
        name: "Gemini Dollar",
        symbol: "gusd",
        validator: ETHValidator,
    },
    {
        name: "Genesis Vision",
        symbol: "gvt",
        validator: ETHValidator,
    },
    {
        name: "Humaniq",
        symbol: "hmq",
        validator: ETHValidator,
    },
    {
        name: "Holo",
        symbol: "hot",
        validator: ETHValidator,
    },
    {
        name: "HOQU",
        symbol: "hqx",
        validator: ETHValidator,
    },
    {
        name: "Huobi Token",
        symbol: "ht",
        validator: ETHValidator,
    },
    {
        name: "Avalanche",
        symbol: "avax",
        validator: ETHValidator,
    },
    {
        name: "Ardor",
        symbol: "ardr",
        validator: ARDRValidator,
    },
    {
        name: "Hedera Hashgraph",
        symbol: "hbar",
        validator: HBARValidator,
    },
    {
        name: "ICON",
        symbol: "icx",
        validator: ICXValidator,
    },
    {
        name: "Internet of Services",
        symbol: "IOST",
        validator: IOSTValidator,
    },
    // disable iota validation for now
    // {
    //     name: 'Iota',
    //     symbol: 'iota',
    //     validator: IOTAValidator,
    // },
    {
        name: "IHT Real Estate Protocol",
        symbol: "iht",
        validator: ETHValidator,
    },
    {
        name: "Insolar",
        symbol: "ins",
        validator: ETHValidator,
    },
    {
        name: "IoTeX",
        symbol: "iotx",
        validator: ETHValidator,
    },
    {
        name: "BitKan",
        symbol: "kan",
        validator: ETHValidator,
    },
    {
        name: "Kcash",
        symbol: "kcash",
        validator: ETHValidator,
    },
    {
        name: "KEY",
        symbol: "key",
        validator: ETHValidator,
    },
    {
        name: "KickToken",
        symbol: "kick",
        validator: ETHValidator,
    },
    {
        name: "Kyber Network",
        symbol: "knc",
        validator: ETHValidator,
    },
    {
        name: "Lambda",
        symbol: "lamb",
        validator: ETHValidator,
    },
    {
        name: "Aave",
        symbol: "lend",
        validator: ETHValidator,
    },
    {
        name: "LinkEye",
        symbol: "let",
        validator: ETHValidator,
    },
    {
        name: "LIFE",
        symbol: "life",
        validator: ETHValidator,
    },
    {
        name: "LockTrip",
        symbol: "loc",
        validator: ETHValidator,
    },
    {
        name: "Loopring",
        symbol: "lrc",
        validator: ETHValidator,
    },
    {
        name: "Lunyr",
        symbol: "lun",
        validator: ETHValidator,
    },
    {
        name: "MCO",
        symbol: "mco",
        validator: ETHValidator,
    },
    {
        name: "Moeda Loyalty Points",
        symbol: "mda",
        validator: ETHValidator,
    },
    {
        name: "Measurable Data Token",
        symbol: "mdt",
        validator: ETHValidator,
    },
    {
        name: "Mainframe",
        symbol: "mft",
        validator: ETHValidator,
    },
    {
        name: "Mithril",
        symbol: "mith",
        validator: ETHValidator,
    },
    {
        name: "Molecular Future",
        symbol: "mof",
        validator: ETHValidator,
    },
    {
        name: "Monetha",
        symbol: "mth",
        validator: ETHValidator,
    },
    {
        name: "Mysterium",
        symbol: "myst",
        validator: ETHValidator,
    },
    {
        name: "Nucleus Vision",
        symbol: "ncash",
        validator: ETHValidator,
    },
    {
        name: "Nexo",
        symbol: "nexo",
        validator: ETHValidator,
    },
    {
        name: "NAGA",
        symbol: "ngc",
        validator: ETHValidator,
    },
    {
        name: "Noah Coin",
        symbol: "noah",
        validator: ETHValidator,
    },
    {
        name: "Pundi X",
        symbol: "npxs",
        validator: ETHValidator,
    },
    {
        name: "NetKoin",
        symbol: "ntk",
        validator: ETHValidator,
    },
    {
        name: "OAX",
        symbol: "oax",
        validator: ETHValidator,
    },
    // {
    //     name: 'Menlo One',
    //     symbol: 'one', // clashes with Harmony one
    //     validator: ETHValidator,
    // },
    {
        name: "SoMee.Social",
        symbol: "ong",
        validator: ETHValidator,
    },
    {
        name: "ORS Group",
        symbol: "ors",
        validator: ETHValidator,
    },
    {
        name: "OST",
        symbol: "ost",
        validator: ETHValidator,
    },
    {
        name: "Patron",
        symbol: "pat",
        validator: ETHValidator,
    },
    {
        name: "Peculium",
        symbol: "pcl",
        validator: ETHValidator,
    },
    {
        name: "Perlin",
        symbol: "perl",
        validator: ETHValidator,
    },
    {
        name: "Pillar",
        symbol: "plr",
        validator: ETHValidator,
    },
    {
        name: "PumaPay",
        symbol: "pma",
        validator: ETHValidator,
    },
    {
        name: "Po.et",
        symbol: "poe",
        validator: ETHValidator,
    },
    {
        name: "Power Ledger",
        symbol: "powr",
        validator: ETHValidator,
    },
    {
        name: "Populous",
        symbol: "ppt",
        validator: ETHValidator,
    },
    {
        name: "Presearch",
        symbol: "pre",
        validator: ETHValidator,
    },
    {
        name: "Patientory",
        symbol: "ptoy",
        validator: ETHValidator,
    },
    {
        name: "QuarkChain",
        symbol: "qkc",
        validator: ETHValidator,
    },
    {
        name: "Quantstamp",
        symbol: "qsp",
        validator: ETHValidator,
    },
    {
        name: "Revain",
        symbol: "r",
        validator: ETHValidator,
    },
    {
        name: "Raiden Network Token",
        symbol: "rdn",
        validator: ETHValidator,
    },
    {
        name: "Ren",
        symbol: "ren",
        validator: ETHValidator,
    },
    {
        name: "Request",
        symbol: "req",
        validator: ETHValidator,
    },
    {
        name: "Refereum",
        symbol: "rfr",
        validator: ETHValidator,
    },
    {
        name: "SiaCashCoin",
        symbol: "scc",
        validator: ETHValidator,
    },
    {
        name: "Sentinel",
        symbol: "sent",
        validator: ETHValidator,
    },
    {
        name: "SkinCoin",
        symbol: "skin",
        validator: ETHValidator,
    },
    {
        name: "SunContract",
        symbol: "snc",
        validator: ETHValidator,
    },
    {
        name: "SingularDTV",
        symbol: "sngls",
        validator: ETHValidator,
    },
    {
        name: "SONM",
        symbol: "snm",
        validator: ETHValidator,
    },
    {
        name: "All Sports",
        symbol: "soc",
        validator: ETHValidator,
    },
    {
        name: "SIRIN LABS Token",
        symbol: "srn",
        validator: ETHValidator,
    },
    {
        name: "Stox",
        symbol: "stx",
        validator: ETHValidator,
    },
    {
        name: "Substratum",
        symbol: "sub",
        validator: ETHValidator,
    },
    {
        name: "SwftCoin",
        symbol: "swftc",
        validator: ETHValidator,
    },
    {
        name: "Lamden",
        symbol: "tau",
        validator: ETHValidator,
    },
    {
        name: "Telcoin",
        symbol: "tel",
        validator: ETHValidator,
    },
    {
        name: "Chronobank",
        symbol: "time",
        validator: ETHValidator,
    },
    {
        name: "Monolith",
        symbol: "tkn",
        validator: ETHValidator,
    },
    {
        name: "Time New Bank",
        symbol: "tnb",
        validator: ETHValidator,
    },
    {
        name: "Tierion",
        symbol: "tnt",
        validator: ETHValidator,
    },
    {
        name: "Tripio",
        symbol: "trio",
        validator: ETHValidator,
    },
    {
        name: "WeTrust",
        symbol: "trst",
        validator: ETHValidator,
    },
    {
        name: "USDT ERC-20",
        symbol: "usdt20",
        validator: ETHValidator,
    },
    {
        name: "Utrust",
        symbol: "utk",
        validator: ETHValidator,
    },
    {
        name: "BLOCKv",
        symbol: "vee",
        validator: ETHValidator,
    },
    {
        name: "VIBE",
        symbol: "vibe",
        validator: ETHValidator,
    },
    {
        name: "Tael",
        symbol: "wabi",
        validator: ETHValidator,
    },
    {
        name: "WePower",
        symbol: "wpr",
        validator: ETHValidator,
    },
    {
        name: "Waltonchain",
        symbol: "wtc",
        validator: ETHValidator,
    },
    {
        name: "BlitzPredict",
        symbol: "xbp",
        validator: ETHValidator,
    },
    {
        name: "CryptoFranc",
        symbol: "xchf",
        validator: ETHValidator,
    },
    {
        name: "Exchange Union",
        symbol: "xuc",
        validator: ETHValidator,
    },
    {
        name: "YOU COIN",
        symbol: "you",
        validator: ETHValidator,
    },
    {
        name: "Zap",
        symbol: "zap",
        validator: ETHValidator,
    },
    {
        name: "loki",
        symbol: "loki",
        addressTypes: { prod: ["114", "115", "116"], testnet: [] },
        iAddressTypes: { prod: ["115"], testnet: [] },
        validator: XMRValidator,
    },
    {
        name: "STEEM",
        symbol: "steem",
        validator: STEEMValidator,
    },
    {
        name: "Syscoin",
        symbol: "sys",
        addressTypes: { prod: ["3f"] },
        validator: SYSValidator,
    },
    {
        name: "Scopuly",
        symbol: "sky",
        validator: XLMValidator,
    },
    // {
    //    name: 'PitisCoin',
    //    symbol: 'pts', # FIXME: symbol collides with ProtoShares
    //    validator: BTCValidator,
    // },
    {
        name: "Luniverse",
        symbol: "luniverse",
        validator: ETHValidator,
    },
    {
        name: "EOS",
        symbol: "eos",
        validator: EOSValidator,
    },
    {
        name: "Verge",
        symbol: "xvg",
        addressTypes: { prod: ["1e"], testnet: ["6F"] },
        validator: BTCValidator,
    },
    {
        name: "Zilliqa",
        symbol: "zil",
        validator: ZILValidator,
    },
    {
        name: "Chia",
        symbol: "xch",
        validator: ChiaValidator,
    },
    {
        name: "Harmony",
        symbol: "one",
        validator: HarmonyValidator,
    },
    {
        name: "DigitalBits",
        symbol: "xdb",
        validator: XLMValidator,
    },
    {
        name: "Polymesh",
        symbol: "polyx",
        validator: PolymeshValidator,
    },
    {
        name: "Arbitrum",
        symbol: "arb",
        validator: ETHValidator,
    },
    {
        name: "Horizen",
        symbol: "zen",
        validator: ETHValidator,
    },
    {
        name: "Coreum",
        symbol: "core",
        validator: CoreumValidator,
    },
    {
        name: "Tomochain",
        symbol: "tomochain",
        validator: ETHValidator,
    },
];

module.exports = {
    getByNameOrSymbol: function (currencyNameOrSymbol) {
        var nameOrSymbol = currencyNameOrSymbol.toLowerCase();
        return CURRENCIES.find(function (currency) {
            return (
                currency.name.toLowerCase() === nameOrSymbol ||
                currency.symbol.toLowerCase() === nameOrSymbol
            );
        });
    },
    getAll: function () {
        return CURRENCIES;
    },
};

////spit out details for readme.md
// CURRENCIES
//     .sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1)
//     .forEach(c => console.log(`* ${c.name}/${c.symbol} \`'${c.name}'\` or \`'${c.symbol}'\` `));

////spit out keywords for package.json
// CURRENCIES
//     .sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1)
//     .forEach(c => console.log(`"${c.name}","${c.symbol}",`));
//
