import Strapi from 'strapi-sdk-javascript/build/main'
const apiUrl = process.env.API_URL || 'http://localhost:1337'
const strapi = new Strapi(apiUrl);

export default async function getArticle(slug) {
    return strapi.request('get', '/articles', {transformResponse: [function(data) {
        const dataMock = data;
        let article = null;
        JSON.parse(dataMock).forEach((linkItem, i) => {
            if (linkItem.link_name === slug) {
                article = linkItem;
                if (!!JSON.parse(dataMock)[i - 1]) {
                    article.prev = JSON.parse(dataMock)[i - 1].link_name;
                } else if (!!JSON.parse(dataMock)[i + 1]) {
                    article.next = JSON.parse(dataMock)[i + 1].link_name;
                }
            }
        })

        return article;
        }]
    });
}