import Strapi from 'strapi-sdk-javascript/build/main'
const apiUrl = process.env.API_URL || 'http://localhost:1337'
const strapi = new Strapi(apiUrl);
const articles = strapi.request('get', 'articles', {transformResponse: [function(data) {
    const dataMock = JSON.parse(data).reverse();
    const articlesData = [];

    dataMock.forEach((article, i) => {
        const articleMock = {};
        articleMock.animationIndex = i + 1;
        articleMock.id = article.id;
        articleMock.title = article.title;
        articleMock.date = article.date;
        articleMock.short_description = article.short_description;
        articleMock.link_name = article.link_name;
        articleMock.main_image = article.main_image;
        if (i === 0) {
            articleMock.first = true;
            articleMock.article = article.article;
        } else {
            articleMock.first = false;
        }

        articlesData.push(articleMock);

    });
    
    

    return articlesData;
    }]
});

export default articles;