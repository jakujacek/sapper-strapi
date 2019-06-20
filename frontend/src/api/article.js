import Strapi from 'strapi-sdk-javascript/build/main'
const apiUrl = process.env.API_URL || 'http://localhost:1337'
const strapi = new Strapi(apiUrl);

export default async function getArticle(slug) {
    return strapi.request('get', '/articles', {params: {
        link_name: slug}
    });
}