import { getContainerProperties, getFontProperties, getLayoutProperties } from "./Properties";

export const getTextProperties = () => _textProperties;

const _textProperties = {
    ...getContainerProperties(),
    ...getFontProperties(),
    ...getLayoutProperties(),
}