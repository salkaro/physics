import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

// Fundamental Physics documentation
export const fundamentalDocs = defineDocs({
  dir: 'content/fundamental',
  docs: {
    schema: frontmatterSchema,
  },
  meta: {
    schema: metaSchema,
  },
});

// Advanced Physics documentation
export const advancedDocs = defineDocs({
  dir: 'content/advanced',
  docs: {
    schema: frontmatterSchema,
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
    mdxOptions: {
        remarkPlugins: [remarkMath],
        rehypePlugins: (v) => [rehypeKatex, ...v],
    },
});
