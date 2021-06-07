/**
 * @fileoverview Export symbols needed by generated code in CommonJS style.
 *
 * This effectively is our canonical list of what we publicly export from
 * the google-protobuf.js file that we build at distribution time.
 */

goog.provide('jspb.Export');

goog.require('goog.object');
goog.require('jspb.BinaryDecoder');
goog.require('jspb.BinaryEncoder');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.ExtensionFieldBinaryInfo');
goog.require('jspb.ExtensionFieldInfo');
goog.require('jspb.Message');
goog.require('jspb.Map');
goog.require('jspb.arith.Int64');
goog.require('jspb.arith.UInt64');

exports.Map = jspb.Map;
exports.Message = jspb.Message;
exports.BinaryDecoder = jspb.BinaryDecoder;
exports.BinaryEncoder = jspb.BinaryEncoder;
exports.BinaryReader = jspb.BinaryReader;
exports.BinaryWriter = jspb.BinaryWriter;
exports.ExtensionFieldInfo = jspb.ExtensionFieldInfo;
exports.ExtensionFieldBinaryInfo = jspb.ExtensionFieldBinaryInfo;
exports.arith = {}
exports.arith.Int64 = jspb.arith.Int64
exports.arith.UInt64 = jspb.arith.UInt64

// These are used by generated code but should not be used directly by clients.
exports.exportSymbol = goog.exportSymbol;
exports.inherits = goog.inherits;
exports.object = {extend: goog.object.extend};
exports.typeOf = goog.typeOf;
