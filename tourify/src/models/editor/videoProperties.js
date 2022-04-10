import { getLayoutProperties } from "./properties";

export const getVideoProperties = () => _videoProperties;

const _videoProperties = {
    ...getLayoutProperties(),
    width: '100%', 
}

