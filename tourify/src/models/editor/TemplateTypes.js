import { getTextProperties } from "./TextProperties"
import { getTitleProperties } from "./TitleProperties"

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
    //TODO Change properties
    switch (type) {
        case templateTypes.TITLE: return getTitleProperties()
        case templateTypes.TEXT: return getTextProperties();
        case templateTypes.IMAGE: return getTextProperties();
        case templateTypes.VIDEO: return getTextProperties();
        case templateTypes.LINK: return getTextProperties();
        case templateTypes.CONTAINER: return getTextProperties();
        default: return undefined;
    }
}