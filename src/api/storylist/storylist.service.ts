// Conector de Sanity
import { client } from '../_helpers/sanity-connector';

// Interfaces
import { StorylistDTO } from '@models/storylist.model';

// Funciones
import { mapStorylist } from '../_utils/functions';

// Queries
import { storylistPreviewQuery, storylistQuery } from '../_queries/storylist.query';
import { StoryListBySlugArgs } from '../interfaces/queryArgs';
import { StorylistPreviewQueryResult, StorylistQueryResult } from '../sanity/types';

async function fetchPreviewBySlug(slug: string): Promise<StorylistDTO> {
	const result: StorylistPreviewQueryResult = await client.fetch(storylistPreviewQuery, { slug });

	if (!result) {
		throw new Error('Storylist not found');
	}

	return mapStorylist(result);
}
async function fetchBySlug(args: StoryListBySlugArgs): Promise<StorylistDTO> {
	const result: StorylistQueryResult = await client.fetch(storylistQuery, { slug: args.slug });

	if (!result) {
		throw new Error('Storylist not found');
	}

	return mapStorylist(result);
}

export { fetchPreviewBySlug, fetchBySlug };
