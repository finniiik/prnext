import { describe, expect, it } from 'vitest';
import { getPost, posts } from './posts';
describe('Blog posts', () => { it('includes the requested slugs', () => { expect(posts.map(post => post.slug)).toEqual(['nextjs-vvedenie', 'react-osnovy']); }); it('does not resolve an unknown slug', () => { expect(getPost('unknown')).toBeUndefined(); }); });
