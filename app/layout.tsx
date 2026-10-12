import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OMOYEL - サロン見学予約',
  description: 'あなたの理想のサロンを見つけましょう',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const canLoadGoogleMaps = Boolean(
    googleMapsApiKey && !googleMapsApiKey.includes('YOUR_GOOGLE_MAPS_API_KEY')
  );

  return (
    <html lang="ja">
      <body className={inter.className}>
        {canLoadGoogleMaps && (
          <>
            {/* API認証失敗をGoogle Mapsの読み込み前に記録し、マップ画面へ通知する */}
            <Script id="google-maps-auth-handler" strategy="beforeInteractive">
              {`window.gm_authFailure = function () {
                window.__googleMapsAuthFailed = true;
                window.dispatchEvent(new Event("google-maps-auth-failure"));
              };`}
            </Script>
            <Script
              src={`https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&language=ja&libraries=geometry`}
              strategy="beforeInteractive"
            />
          </>
        )}
        {children}
      </body>
    </html>
  );
}
