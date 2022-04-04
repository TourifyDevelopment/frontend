const _apiUrl = 'http://10.10.30.19';
const _authUrl = `${_apiUrl}/auth`;


const _registerUrl = `${_authUrl}/register`;
const _loginUrl = `${_authUrl}/login`;
const _projectUrl = `${_apiUrl}/projects`;
const _pagesUrl = `${_apiUrl}/pages/`;

const _validateUrl = `${_apiUrl}/user/valid`;

const _profilePicUrl = `${_apiUrl}/user/profilePic`

export const apiUrl = () => _apiUrl;
export const authUrl = () => _authUrl;
export const registerUrl = () => _registerUrl;
export const loginUrl = () => _loginUrl;
export const projectUrl = () => _projectUrl;
export const pagesUrl = projectId => _pagesUrl + projectId;
export const validateUrl = () => _validateUrl;
export const profilePicUrl = () => _profilePicUrl;

