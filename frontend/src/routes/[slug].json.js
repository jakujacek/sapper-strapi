import getArticle from '../api/article';

export async function get(req, res, next) {
	
	const { slug } = req.params;
	const article = await getArticle(slug);
	
	if (article[0] !== null) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		res.end(JSON.stringify(article[0]));
	} else {
		next();
	}
	
}