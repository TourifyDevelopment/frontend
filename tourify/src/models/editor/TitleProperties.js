import { getContainerProperties, getFontProperties, getLayoutProperties } from "./properties";

export const getTitleProperties = () => _titleProperties;

const _titleProperties = {
    ...getContainerProperties(),
    ...getFontProperties(),
    ...getLayoutProperties(),
    fontSize: "2rem",
    fontWeight: "bold",
    textDecorationLine: "underline",
}

