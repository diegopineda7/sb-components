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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundColor = exports.CustomFontColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var CustomLabel_1 = __importDefault(require("../../components/CustomLabel"));
exports.default = {
    title: 'UI/CustomLabel',
    conmponent: CustomLabel_1.default,
    argTypes: {
        color: { control: 'select', options: ['primary', 'secondary', 'tertiary'] }
    }
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(CustomLabel_1.default, __assign({}, args), void 0); };
exports.Basic = Template.bind({});
exports.Basic.args = {
    label: "Basic",
    allCaps: false
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    label: "AllCaps",
    allCaps: true
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    label: "Secondary",
    size: 'normal',
    color: 'secondary'
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    label: "Tertiary",
    size: 'normal',
    color: 'tertiary'
};
exports.CustomFontColor = Template.bind({});
exports.CustomFontColor.args = {
    label: "CustomFontColor",
    size: 'h1',
    fontColor: '#5517AC'
};
exports.BackgroundColor = Template.bind({});
exports.BackgroundColor.args = {
    label: "BackgroundColor",
    size: 'h1',
    fontColor: 'white',
    backgroundColor: 'black'
};
