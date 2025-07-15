import nextra from 'nextra'

const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false
  },
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [],
  }
})

export default withNextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.ts',
  output: 'export',
  basePath: '/memorycompressor.github.io',
  images: { unoptimized: true },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
})
