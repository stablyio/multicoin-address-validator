var cryptoUtils = require("./crypto/utils");

module.exports = {
    isValidAddress: function (address) {
        if (!/^0x[0-9a-fA-F]{64}$/.test(address)) {
            // Check if it has the basic requirements of an address
            return false;
        }

        if (
            /^0x[0-9a-f]{64}$/.test(address) ||
            /^0x?[0-9A-F]{64}$/.test(address)
        ) {
            // If it's all small caps or all all caps, return true
            return true;
        }

        // Otherwise check each case
        return this.verifyChecksum(address);
    },
    verifyChecksum: function (address) {
        // Check each case
        address = address.replace("0x", "");

        var addressHash = cryptoUtils.keccak256(address.toLowerCase());

        for (var i = 0; i < 64; i++) {
            // The nth letter should be uppercase if the nth digit of casemap is 1
            if (
                (parseInt(addressHash[i], 16) > 7 &&
                    address[i].toUpperCase() !== address[i]) ||
                (parseInt(addressHash[i], 16) <= 7 &&
                    address[i].toLowerCase() !== address[i])
            ) {
                return false;
            }
        }

        return true;
    },
};
