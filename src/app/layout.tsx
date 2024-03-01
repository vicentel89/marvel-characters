export const metadata = {
  title: 'Marvel Characters',
  description: 'An app to view Marvel characters',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
