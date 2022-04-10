import { getLayoutProperties } from "./properties";

export const getImageProperties = () => _imageProperties;

const _imageProperties = {
    ...getLayoutProperties(),
    width: '100%', 
}

