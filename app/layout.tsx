
import React from 'react';

export const metadata = {
  title: 'OnePicAI',
  description: 'AI Image Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
