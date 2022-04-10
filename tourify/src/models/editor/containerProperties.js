import { getContainerProperties, getLayoutProperties } from "./properties";

export const getContainerProps = () => _containerProperties;

const _containerProperties = {
    ...getContainerProperties(),
    ...getLayoutProperties(),
}

