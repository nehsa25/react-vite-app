import {
  Form,
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import './styles/global.css';
import React, { ReactNode, useState } from 'react';

export default function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  interface CollapsibleDivProps {
    isOpen: boolean;
    children?: ReactNode;
    content: ReactNode;
  }

  function CollapsibleDiv({ isOpen, content }: CollapsibleDivProps) {
    return (
      <div className="collapsible h-full">
        <button onClick={(event) => {
          handleButtonClick();
          event.stopPropagation();
        }} className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-full shadow-md">
          {isOpen ? 'Collapse' : 'Expand'}
        </button>
        <div className="expand-div border border-gray-200" style={{ maxHeight: isOpen ? '100%' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease-in-out' }}>
          {
            isOpen && content
          }
        </div>
      </div>
    );
  }

  return (
    <html lang="en" className="m-8">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1"
        />
        <Meta />
        <Links />
      </head>
      <body
        className="bg-gray-100">
        <header className="bg-blue-500   
 text-white py-4 px-6">
          <h1 className="text-2xl font-bold">nehsa.net</h1>
        </header>

        <main>
          <div className="flex flex-col gap-4 p-0 m-0">
            <div id="mainbody" className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-bold">About this application..</h2>
              <p className="text-gray-700">
                This is a test application that demonstrates the use of Remix, Vite, and Tailwind CSS and helps you better understand the React framework.
              </p>
              <CollapsibleDiv isOpen={isExpanded} content={
                <div className="w-full">
                  This application is using the following technologies:
                  <table className="w-full table-auto border-collapse border-2 border-gray-300 rounded-lg">
                    <thead>
                      <tr className="bg-yellow-200">
                        <th className="px-4 py-2 bg-gray-100">Technology</th>
                        <th className="px-4 py-2 bg-gray-100">Technology Type</th>
                        <th className="px-4 py-2 bg-gray-100">Version</th>
                        <th className="px-4 py-2 bg-gray-100">Role</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-yellow-100">
                        <td>React</td>
                        <td>Library</td>
                        <td>18.2.0</td>
                        <td>UI</td></tr>
                      <tr className="hover:bg-yellow-100">
                        <td>Remix</td>
                        <td>Framework</td>
                        <td>2.11.2</td>
                        <td>Routing</td></tr>
                      <tr className="hover:bg-yellow-100">
                        <td>Vite</td>
                        <td>Build Tool</td>
                        <td>5.1.4</td>
                        <td>Build</td></tr>
                      <tr className="hover:bg-yellow-100">
                        <td>Tailwind CSS</td>
                        <td>Framework</td>
                        <td>3.4.10</td>
                        <td>Styling</td>
                        </tr>
                      </tbody>
                  </table>
                </div>
              }></CollapsibleDiv>
            </div>
            {/* ... */}
          </div>
        </main>

        <footer className="bg-gray-800 text-white py-4 text-center">
          &copy; nehsa.net {new Date().getFullYear()} All rights reserved. Be Kind.
        </footer>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}