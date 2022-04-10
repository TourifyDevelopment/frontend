import { getTextProperties } from "./textProperties"
import { getTitleProperties } from "./titleProperties"
import { getLinkProperties } from "./linkProperties"
import { getImageProperties } from "./imageProperties"
import { getVideoProperties } from "./videoProperties"
import { getContainerProps } from "./containerProperties"

export const templateTypes = {
    TITLE: 'Title',
    TEXT: 'Text',
    IMAGE: 'Image',
    VIDEO: 'Video',
    LINK: 'Link',
    CONTAINER: 'Container',
}

export const templateTypeList = [
    templateTypes.TITLE,
    templateTypes.TEXT,
    templateTypes.IMAGE,
    templateTypes.VIDEO,
    templateTypes.LINK,
    templateTypes.CONTAINER,
]

export const getPropertiesByType = (type) => {
    switch (type) {
        case templateTypes.TITLE: return getTitleProperties()
        case templateTypes.TEXT: return getTextProperties();
        case templateTypes.IMAGE: return getImageProperties();
        case templateTypes.VIDEO: return getVideoProperties();
        case templateTypes.LINK: return getLinkProperties();
        case templateTypes.CONTAINER: return getContainerProps();
        default: return undefined;
    }
}