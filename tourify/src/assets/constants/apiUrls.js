const _apiUrl = 'http://172.25.51.144';
const _authUrl = `${_apiUrl}/auth`;


const _registerUrl = `${_authUrl}/register`;
const _loginUrl = `${_authUrl}/login`;
const _projectUrl = `${_apiUrl}/projects`;
const _pagesUrl = `${_apiUrl}/pages/`;
const _containerUrl = `${_apiUrl}/container/`
const _resourcesUrl = `${_apiUrl}/resources/`

const _validateUrl = `${_apiUrl}/user/valid`;

const _profilePicUrl = `${_apiUrl}/user/profilePic`

export const apiUrl = () => _apiUrl;
export const authUrl = () => _authUrl;
export const registerUrl = () => _registerUrl;
export const loginUrl = () => _loginUrl;
export const projectUrl = () => _projectUrl;
export const pagesUrl = projectId => _pagesUrl + projectId;
export const postPageUrl = () => _pagesUrl;
export const containerUrl = pageId => _containerUrl + pageId;
export const resourcesUrl = containerId => _resourcesUrl + containerId;
export const validateUrl = () => _validateUrl;
export const profilePicUrl = () => _profilePicUrl;