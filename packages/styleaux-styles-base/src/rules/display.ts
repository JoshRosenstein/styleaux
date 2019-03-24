import {  rule } from "@styleaux/core";
import { boolValue } from "../values/boolValue";
import {DisplayProperty} from '@roseys/csstype'


/**
 * display
 *
 * see [[DisplayProperty]]
 */

export const display=rule<DisplayProperty | boolean>("display", boolValue("initial", "none"))
