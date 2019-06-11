import restaurants from '../api/article';

export async function get(req, res, next) {
	const restaurantsData = await restaurants;
	if (restaurantsData !== null) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		res.end(JSON.stringify(restaurantsData));
	} else {
		next();
	}
	
}