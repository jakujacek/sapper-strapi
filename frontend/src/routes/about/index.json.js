import articles from '../../api/articles';

export async function get(req, res, next) {
	const articlesData = await articles;
	if (articlesData !== null) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		res.end(articlesData);
	} else {
		next();
	}
	
}