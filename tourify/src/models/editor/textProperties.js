import { getContainerProperties, getFontProperties, getLayoutProperties } from "./properties";

export const getTextProperties = () => _textProperties;

const _textProperties = {
    ...getContainerProperties(),
    ...getFontProperties(),
    ...getLayoutProperties(),
}