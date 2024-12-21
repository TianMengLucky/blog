import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const mdSchema = z.object({
    title: z.string(),
    published: z.date(),
    updated: z.date().optional(),
    draft: z.boolean().optional().default(false),
    description: z.string().optional().default(''),
    image: z.string().optional().default(''),
    tags: z.array(z.string()).optional().default([]),
    category: z.string().optional().default(''),
    lang: z.string().optional().default(''),

    /* For internal use */
    prevTitle: z.string().default(''),
    prevSlug: z.string().default(''),
    nextTitle: z.string().default(''),
    nextSlug: z.string().default(''),
    });

const postsCollection = defineCollection({
  loader: glob({ pattern: 'posts/*.md', base: 'src/content/' }),
  schema: mdSchema,
})

const specsCollection = defineCollection({
loader: glob({ pattern: 'spec/*.md', base: 'src/content/' }),
})

const linksCollection = defineCollection({
  loader: glob({ pattern: 'links/*.json', base: 'src/content/'}),
  schema: z.object({
    name: z.string(),
    link: z.string().url(),
    description: z.string().optional(),
    icon: z.string().optional(),
    conent: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
})


export const collections = {
  posts : postsCollection,
  links : linksCollection,
  specs : specsCollection,
}