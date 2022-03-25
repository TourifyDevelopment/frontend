import { faBlackboard } from "@fortawesome/free-solid-svg-icons";

export const getFrontProperties = () => _frontProperties;
export const getLayoutProperties = () => _layoutProperties;
export const getContainerProperties = () => _containerProperties;

const _frontProperties = {
    fontSize : "1rem",
    color: "black",
    fontWeight : "normal",
    
}

const _layoutProperties = {
    display: "flex",
    padding: "0.5rem 0.5rem",
    backgroundColor: "white",
    justifyContent: "start",
}

const _containerProperties = {
    backgroundColor: "white",
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderColor: "black",
}