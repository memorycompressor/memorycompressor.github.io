import React from 'react'

const config = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span style={{ 
        fontSize: '20px', 
        fontWeight: 'bold',
        background: 'linear-gradient(45deg, #3B82F6, #8B5CF6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        PCC
      </span>
      <span style={{ fontSize: '16px', color: '#6B7280' }}>
        Pretraining Context Compressor
      </span>
    </div>
  ),
  project: {
    link: 'https://github.com/memorycompressor/memorycompressor.github.io/',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/memorycompressor/memorycompressor.github.io',
  footer: {
    text: 'Apache 2.0 License | © 2025 MemoryCompressor',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="PCC: Pretraining Context Compressor" />
      <meta property="og:description" content="Large Language Models with Embedding-Based Memory" />
      <title>PCC: Pretraining Context Compressor</title>
    </>
  ),
  banner: {
    key: 'pcc-release',
    text: (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        🎉 PCC research paper is now available! 
        <a href="https://opensource.microsoft.com/" style={{ marginLeft: '8px', textDecoration: 'underline' }}>
          Read the paper →
        </a>
      </div>
    )
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <div style={{ background: '#E5E7EB', height: '1px', margin: '8px 0' }} />
      }
      return <>{title}</>
    }
  },
  toc: {
    backToTop: true
  }
}

export default config
