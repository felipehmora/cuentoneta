import express from 'express';
import * as authorService from './author.service';

const router = express.Router();

// Routes
router.get('/:slug', getBySlug);

export default router;

function getBySlug(req: express.Request, res: express.Response, next: express.NextFunction) {
	const { slug } = req.params;

	authorService
		.getBySlug(slug as string)
		.then((result) => res.json(result))
		.catch((err) => next(err));
}
