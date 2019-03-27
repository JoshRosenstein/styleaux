import {WhiteSpaceProperty,OverflowProperty,TextOverflowProperty} from "@roseys/csstype";

export interface Ellipsis {
    whiteSpace: WhiteSpaceProperty;
    overflow: OverflowProperty;
    textOverflow: TextOverflowProperty;
}

export function ellipsis(): Ellipsis {
    return {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    };
}
