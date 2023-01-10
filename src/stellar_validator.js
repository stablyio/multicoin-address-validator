var baseX = require("base-x");
var crc = require("crc");
var cryptoUtils = require("./crypto/utils");

var ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";

var base32 = baseX(ALPHABET);
var regexp = new RegExp("^[" + ALPHABET + "]{56,69}$");
var ed25519PublicKeyVersionByte = 6 << 3; // G
const med25519PublicKeyVersionByte = 12 << 3; // M

function swap16(number) {
    var lower = number & 0xff;
    var upper = (number >> 8) & 0xff;
    return (lower << 8) | upper;
}

module.exports = {
    isValidAddress: function (address) {
        if (regexp.test(address)) {
            // return this.verifyChecksum(address);
            return true;
        }

        return false;
    },

    verifyChecksum: function (address) {
        // based on https://github.com/stellar/js-stellar-base/blob/master/src/strkey.js#L126
        var bytes = base32.decode(address);
        if (
            bytes[0] !== ed25519PublicKeyVersionByte &&
            bytes[0] !== med25519PublicKeyVersionByte
        ) {
            return false;
        }

        var computedChecksum = cryptoUtils.numberToHex(
            swap16(crc.crc16xmodem(bytes.slice(0, -2))),
            4
        );
        var checksum = cryptoUtils.toHex(bytes.slice(-2));

        return computedChecksum === checksum;
    },
};
