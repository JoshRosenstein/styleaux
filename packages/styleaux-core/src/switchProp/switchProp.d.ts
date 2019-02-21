import { IDictionary } from '../types';
export declare const createSwitchProp: <RP extends Function, RBP extends Function, TS extends Function, MF extends {
    [key: string]: Function;
}>(responsiveProp?: Function, responsiveBoolProp?: Function, transformStyle?: Function, mappedFunctions?: MF, globalTransformConfig?: {
    [key: string]: any;
}, globalTransform?: boolean, globalResponsive?: boolean, globalResponsiveBool?: boolean) => (value: any, { valueOnly, cssProp, responsive: localResponsive, responsiveBool: localResponsiveBool, transformConfig, ...localTransformOpt }: {
    valueOnly?: boolean;
    cssProp: string;
    transformConfig?: {
        [key: string]: any;
        transform?: boolean;
    };
    responsive?: boolean;
    responsiveBool?: boolean;
}) => (props: IDictionary<any>) => any;
export default createSwitchProp;
