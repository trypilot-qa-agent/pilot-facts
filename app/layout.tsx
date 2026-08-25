export const metadata = {
  title: 'Pilot Facts - Learn to Fly',
  description: 'Interactive pilot education platform with quizzes, lessons, and progress tracking.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0066cc" />
        <link rel="stylesheet" href="/styles/responsive.css" />
      </head>
      <body>
        <div className="app-container">{children}</div>
      </body>
    </html>
  );
}
