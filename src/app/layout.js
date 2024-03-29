import "./globals.css";
import NavBar from "../Components/NavBar";
import { Fragment } from "react";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Fragment>
          <NavBar />
          {children}
        </Fragment>
      </body>
    </html>
  );
}
