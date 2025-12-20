import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const codeArticles = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/' }),
    schema: z.object({
        title: z.string(),
        slug: z.string(),
        metadescription: z.string(),
        featuredImage: z.string().optional(),
        publishDate: z.string().refine(
            (value) => !isNaN(Date.parse(value)),
            { message: "Invalid date-time format" }
        ),
        updateDate: z.string().refine(
            (value) => !isNaN(Date.parse(value)),
            { message: "Invalid date-time format" }
        ),
        author: z.array(z.string()),
        level: z.number(),
        tags: z.array(z.string())
    }),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = { codeArticles };