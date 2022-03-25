import { faBlackboard } from "@fortawesome/free-solid-svg-icons";

export const getFontProperties = () => _fontProperties;
export const getLayoutProperties = () => _layoutProperties;
export const getContainerProperties = () => _containerProperties;

const _fontProperties = {
    fontSize : "1rem",
    color: "black",
    fontWeight : "normal",
    textDecorationLine: "none",
}

const _layoutProperties = {
    display: "flex",
    padding: "0.5rem 0.5rem",
    justifyContent: "start",
}

const _containerProperties = {
    backgroundColor: "white",
    outlineRightWidth: 0,
    outlineLeftWidth: 0,
    outlineTopWidth: 0,
    outlineBottomWidth: 0,
    outlineColor: "#D1D5DB",
}