"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var NotFound = /** @class */ (function (_super) {
    __extends(NotFound, _super);
    function NotFound() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotFound;
}(Error));
exports.NotFound = NotFound;
var Duplicated = /** @class */ (function (_super) {
    __extends(Duplicated, _super);
    function Duplicated() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Duplicated;
}(Error));
exports.Duplicated = Duplicated;
var NetworkError = /** @class */ (function (_super) {
    __extends(NetworkError, _super);
    function NetworkError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NetworkError;
}(Error));
exports.NetworkError = NetworkError;
var OutOfSpace = /** @class */ (function (_super) {
    __extends(OutOfSpace, _super);
    function OutOfSpace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OutOfSpace;
}(Error));
exports.OutOfSpace = OutOfSpace;
var AuthErrorType;
(function (AuthErrorType) {
    AuthErrorType[AuthErrorType["ORG_AUTH_ERROR"] = 0] = "ORG_AUTH_ERROR";
    AuthErrorType[AuthErrorType["DEPARTMENT_AUTH_ERROR"] = 1] = "DEPARTMENT_AUTH_ERROR";
    AuthErrorType[AuthErrorType["USER_AUTH_ERROR"] = 2] = "USER_AUTH_ERROR";
})(AuthErrorType = exports.AuthErrorType || (exports.AuthErrorType = {}));
var AuthErrorReason;
(function (AuthErrorReason) {
    AuthErrorReason[AuthErrorReason["NOT_FOUND"] = 0] = "NOT_FOUND";
    // e.g. signature doesn't match
    AuthErrorReason[AuthErrorReason["INVALID"] = 1] = "INVALID";
})(AuthErrorReason = exports.AuthErrorReason || (exports.AuthErrorReason = {}));
var AuthError = /** @class */ (function (_super) {
    __extends(AuthError, _super);
    function AuthError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AuthError;
}(Error));
exports.AuthError = AuthError;
//# sourceMappingURL=shared.js.map