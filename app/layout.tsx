import 'nextra-theme-docs/style.css'

export const metadata = {
  title: 'PCC: Pretraining Context Compressor',
  description: 'Pretraining Context Compressor for Large Language Models with Embedding-Based Memory',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  )
}
