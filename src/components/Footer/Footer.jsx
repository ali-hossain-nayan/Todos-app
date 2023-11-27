import React from "react";
export default function Footer() {
 let name = 'Nayan'
  return (
    <footer className="bg-gray border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-700 text-center w-full">
            ©Learnathon 2.0 Powered by  {name}
          </span>
        </div>
      </div>
    </footer>
  );
}
