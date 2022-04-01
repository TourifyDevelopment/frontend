export const getFontProperties = () => _fontProperties;
export const getLayoutProperties = () => _layoutProperties;
export const getContainerProperties = () => _containerProperties;
export const getPropertiesStructure = () => _propertiesStructure;

const _fontProperties = {
    fontSize: "16px",
    color: "black",
    fontWeight: "normal",
    textDecorationLine: "none",
}

const _layoutProperties = {
    display: "flex",
    paddingLeft: '8px',
    paddingRight: '8px',
    paddingTop: '8px',
    paddingBottom: '8px',
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

const _propertiesStructure = {
    layout: {
        'paddingLeft': 'input',
        'paddingRight': 'input',
        'paddingBottom': 'input',
        'paddingTop': 'input',
        'marginLeft' : 'input',
        'marginRight' : 'input',
        'marginBottom' : 'input',
        'marginTop' : 'input',
    },
    container: {
        'backgroundColor' : 'color',
        'outlineRightWidth' : 'input',
    },
    font: {
        'fontSize' : 'input',
        'color' : 'color',
        'fontWeight' : 'radio',
        'FontStyle' : 'radio',
        'textDecorationLine' : 'radio',
    }
}
