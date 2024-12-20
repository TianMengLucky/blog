import type { AstroIntegration } from "astro";
import netlify from '@astrojs/netlify';
import vercel from '@astrojs/vercel/serverless'
import cloudflare from '@astrojs/cloudflare';
import deno from '@deno/astro-adapter';

type platromType = 'Github' | 'Netlify' | 'Vercel' | 'Cloudflare' | 'Deno' | 'Local';
const platorm = process.env.PLATFORM as platromType || 'Local';
const LocalSite = 'https://localhost:4321/';
const repo_name = process.env.REPO_NAME;
const _SSR = process.env.SSR !== undefined;
const _Site = process.env.SITE || LocalSite;
const _Base = repo_name ? `/${repo_name}` : '/';
const _Adapter = getAdapter();
const _Ouput = _SSR ? 'server' : 'static';

function getAdapter(): AstroIntegration | undefined
{
    if (!_SSR) 
        return undefined;

    switch (platorm) {
        case 'Netlify':
            return netlify();
        case 'Vercel':
            return vercel();
        case 'Cloudflare':
            return cloudflare();
        case 'Deno':
            return deno();
        default:
            return undefined;
    }
}

export default {
    site : _Site,
    base : _Base,
    output : _Ouput,
    adapter : _Adapter
}