import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col px-4 py-2 min-h-screen bg-white">
        <main className="grow ">{children}</main>

        <footer className="border-t py-3 text-center text-xs">
          Practicing NextJS
        </footer>
      </body>
    </html>
  );
}
