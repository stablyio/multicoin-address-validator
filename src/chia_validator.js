var bech32 = require('./crypto/bech32');

const isValidAddress = function(address) {
    // hack to validate testnet address
    if (address && address.substring(0, 4) === 'txch') {
        // remove leading 't' - now can validate
        address = address.substring(1, address.length);
    }

    const decoded = bech32.decode(address, bech32.encodings.BECH32M);

    if (decoded && decoded.hrp.toLowerCase() === 'xch') {
      return true
    }

    return false
}

module.exports = {
    isValidAddress
};
