"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var futils_1 = require("@roseys/futils");
var utils_1 = require("../utils");
var typed_is_1 = require("typed-is");
exports.createSwitchProp = function (responsiveProp, responsiveBoolProp, transformStyle, mappedFunctions, globalTransformConfig, globalTransform, globalResponsive, globalResponsiveBool) {
    if (globalTransformConfig === void 0) { globalTransformConfig = {}; }
    if (globalTransform === void 0) { globalTransform = false; }
    if (globalResponsive === void 0) { globalResponsive = false; }
    if (globalResponsiveBool === void 0) { globalResponsiveBool = false; }
    return function switchProp(value, _a) {
        var valueOnly = _a.valueOnly, cssProp = _a.cssProp, localResponsive = _a.responsive, localResponsiveBool = _a.responsiveBool, transformConfig = _a.transformConfig, localTransformOpt = __rest(_a, ["valueOnly", "cssProp", "responsive", "responsiveBool", "transformConfig"]);
        return function switch_(props) {
            var _a;
            var defaultValue = value.default, _b = value.options, opt = _b === void 0 ? {} : _b, matchers = __rest(value, ["default", "options"]);
            var parserTransform = opt.transform, parserResponsive = opt.responsive, parserResponsiveBool = opt.responsiveBool, parserTransformOpt = __rest(opt, ["transform", "responsive", "responsiveBool"]);
            var transformOptions = __assign({}, globalTransformConfig, transformConfig, parserTransformOpt);
            var transform = utils_1.firstNonNil([
                parserTransform,
                transformConfig,
                globalTransform,
            ]);
            var responsive = utils_1.firstNonNil([
                parserResponsive,
                localResponsive,
                globalResponsive,
            ]);
            var responsiveBool = utils_1.firstNonNil([
                parserResponsiveBool,
                localResponsiveBool,
                globalResponsiveBool,
            ]);
            var transformer = function (v) { return v; };
            var hasBeenTransformed = false;
            if (transform !== false &&
                transformStyle &&
                (transform ||
                    typed_is_1.isDefined(localTransformOpt) ||
                    typed_is_1.isDefined(parserTransformOpt))) {
                transformer = function (v) {
                    return utils_1.pipeIfDefined(utils_1.whenFunctionCallWith(__assign({ value: v, cssProp: cssProp, valueOnly: true }, transformOptions), props), utils_1.whenFunctionCallWith(props))(transformStyle);
                };
            }
            var intersectedMatchers = futils_1.keys(futils_1.pick(futils_1.keys(matchers), futils_1.filter(typed_is_1.isTruthy, props)));
            var matchedPropName;
            var computedValue;
            if (futils_1.isEmpty(intersectedMatchers) && typed_is_1.isNil(defaultValue)) {
                return valueOnly ? computedValue : cssProp ? {} : computedValue;
            }
            if (futils_1.isEmpty(intersectedMatchers) && !typed_is_1.isNil(defaultValue)) {
                computedValue = transformer(utils_1.whenFunctionCallWith(props)(defaultValue));
                hasBeenTransformed = true;
            }
            if (!futils_1.isEmpty(intersectedMatchers)) {
                computedValue = futils_1.flow(intersectedMatchers, utils_1.iterateUntilResult(function (_, propName) {
                    matchedPropName = propName;
                    return utils_1.pipeIfDefined(futils_1.when(typed_is_1.isString, function (x) { return futils_1.pathOr(x, x, mappedFunctions); }), utils_1.whenFunctionCallWith(props[propName], props), utils_1.whenFunctionCallWith(props))(futils_1.path(propName, matchers));
                }), utils_1.falseToNull, futils_1.defaultTo(utils_1.whenFunctionCallWith(props)(defaultValue)));
            }
            if (typed_is_1.isNil(computedValue)) {
                return computedValue;
            }
            if (utils_1.isResponsiveType(computedValue) ||
                (matchedPropName && utils_1.isResponsiveType(futils_1.path(matchedPropName, props)))) {
                if (responsiveBool && responsiveBoolProp) {
                    return responsiveBoolProp(__assign({ value: computedValue, cssProp: cssProp, prop: matchedPropName, transform: transform }, transformOptions))(props);
                }
                if (responsive && responsiveProp) {
                    return responsiveProp(__assign({ value: computedValue, cssProp: cssProp, prop: matchedPropName, transform: transform }, transformOptions))(props);
                }
            }
            computedValue = hasBeenTransformed
                ? computedValue
                : transformer(computedValue);
            return valueOnly
                ? computedValue
                : cssProp
                    ? (_a = {}, _a[cssProp] = computedValue, _a) : computedValue;
        };
    };
};
exports.default = exports.createSwitchProp;
//# sourceMappingURL=switchProp.js.map