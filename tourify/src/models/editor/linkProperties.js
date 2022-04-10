import { getContainerProperties, getFontProperties, getLayoutProperties } from "./properties";

export const getLinkProperties = () => _linkProperties;

const _linkProperties = {
    ...getContainerProperties(),
    ...getFontProperties(),
    ...getLayoutProperties(),
    textDecorationLine: "underline",
    color: 'blue'
}

