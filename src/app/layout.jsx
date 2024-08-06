import "@/app/globals.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div id="app">
                    <Header />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
