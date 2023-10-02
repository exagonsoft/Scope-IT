import "@styles/globals.css";
import { Provider } from "@components/Provider";
import MainContainner from "@containers/maincontainner";

export const metadata = {
  title: "Scope IT",
  description:
    "SCOPE-IT helps you to plan your projects accurately and manage your team efficiently.",
  favicon: "@public/favicon.ico",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body className=" overflow-hidden">
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app !p-0">
          <Provider>
            <MainContainner>{children}</MainContainner>
          </Provider>
        </main>
      </body>
    </html>
  );
};

export default layout;
