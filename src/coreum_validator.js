var bech32 = require("./crypto/bech32");

const validHrp = {
    main: ["core"],
    testnet: ["testcore", "devcore"],
};

function isValidAddress(address, currency, opts) {
    const { networkType } = opts || {};
    const decoded = bech32.decode(address, bech32.encodings.BECH32);

    let validByNetworkType = validHrp[networkType];
    if (!validByNetworkType) {
        validByNetworkType = validHrp.main;
    }

    if (decoded && validByNetworkType.includes(decoded.hrp.toLowerCase())) {
        return true;
    }

    return false;
}

module.exports = {
    isValidAddress: function (address, currency, networkType) {
        return isValidAddress(address, currency, networkType);
    },
};
