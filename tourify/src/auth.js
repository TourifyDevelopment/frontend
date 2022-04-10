import axios from 'axios';
import { validateUrl, profilePicUrl, projectUrl, pagesUrl, containerUrl, resourcesUrl, postPageUrl, postContainerUrl, postResourceUrl } from './assets/constants/apiUrls';

// Helpful functions to check if the user is logged in, has a profile picture or to create resources, pages, projects...

const authChecker = {
    async check() {
        const token = localStorage.getItem('token');
        console.log(token)
        if (token === null) return false;
        let res = await axios.get(validateUrl(), {
            headers: { 'Authorization': `Bearer ${token}` }
        }).catch(err => {
            // TODO: Check if no internet connection could be established or user not authenticated (401)
            return false;
        });
        console.log(res.status)
        if (res.status === 200) {
            console.log(res.data);
            return res.data;
        }
        return false;
    }
}

const getProfilePic = async () => {
    const token = localStorage.getItem('token');
    console.log(token)
    if (token === null) return false;
    let res = await axios.get(profilePicUrl(), {
        headers: { 'Authorization': `Bearer ${token}` }
    }).catch(err => {
        console.log('No INTERNET! OR PROBLEM')
    });
    console.log(res.status)
    if (res.status === 200) {
        console.log(res.data);
        return res.data;
    }
    return false;
}

const createNewProject = async data => {
    const token = localStorage.getItem('token');
    if (token === null) return false;

    let res = await axios.post(projectUrl(), data,
        {
            headers: { 'Authorization': `Bearer ${token}` }
        })

    if (res.status === 200) {
        return true;
    }
    return false
}

const createNewPage = async data => {
    const token = localStorage.getItem('token');
    if (token === null) return false;

    let res = await axios.post(postPageUrl(), data,
        {
            headers: { 'Authorization': `Bearer ${token}` }
        })

    if (res.status === 201) {
        return true;
    }
    return false
}

const createNewContainer = async data => {
    const token = localStorage.getItem('token');
    if (token === null) return false;

    let res = await axios.post(postContainerUrl(), data,
        {
            headers: { 'Authorization': `Bearer ${token}` }
        })

    if (res.status === 201) {
        return true;
    }
    return false
}

const createNewResource = async data => {
    const token = localStorage.getItem('token');
    if (token === null) return false;

    let res = await axios.post(postResourceUrl(), data,
        {
            headers: { 'Authorization': `Bearer ${token}` }
        })

    if (res.status === 201) {
        return true;
    }
    return false
}

const getPagesOfProject = async projectId => {
    let res = await axios.get(pagesUrl(projectId))

    if (res.status === 200) {
        return res;
    }
    return false
}

const getContainersOfPage = async pageId => {
    let res = await axios.get(containerUrl(pageId))

    if (res.status === 200) {
        return res;
    }
    return false
}

const getResourcesOfContainer = async containerId => {
    let res = await axios.get(resourcesUrl(containerId))

    if (res.status === 200) {
        return res;
    }
    return false
}

export { authChecker, getProfilePic, createNewProject, getPagesOfProject, getContainersOfPage, getResourcesOfContainer, createNewPage, createNewContainer, createNewResource };