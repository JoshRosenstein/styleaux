import {PickCSSProps} from '@styleaux/types'

export interface Ellipsis extends PickCSSProps<'whiteSpace' | 'overflow' | 'textOverflow'> {}



export function ellipsis(): Ellipsis {
    return {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    };
}
