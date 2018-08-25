import * as tf from '@tensorflow/tfjs-core';
import { Point } from '../classes/Point';
export function isTensor(tensor, dim) {
    return tensor instanceof tf.Tensor && tensor.shape.length === dim;
}
export function isTensor1D(tensor) {
    return isTensor(tensor, 1);
}
export function isTensor2D(tensor) {
    return isTensor(tensor, 2);
}
export function isTensor3D(tensor) {
    return isTensor(tensor, 3);
}
export function isTensor4D(tensor) {
    return isTensor(tensor, 4);
}
export function isFloat(num) {
    return num % 1 !== 0;
}
export function isEven(num) {
    return num % 2 === 0;
}
export function round(num, prec) {
    if (prec === void 0) { prec = 2; }
    var f = Math.pow(10, prec);
    return Math.floor(num * f) / f;
}
export function isDimensions(obj) {
    return obj && obj.width && obj.height;
}
export function computeReshapedDimensions(_a, inputSize) {
    var width = _a.width, height = _a.height;
    var scale = inputSize / Math.max(height, width);
    return {
        height: Math.round(height * scale),
        width: Math.round(width * scale)
    };
}
export function getCenterPoint(pts) {
    return pts.reduce(function (sum, pt) { return sum.add(pt); }, new Point(0, 0))
        .div(new Point(pts.length, pts.length));
}
//# sourceMappingURL=index.js.map