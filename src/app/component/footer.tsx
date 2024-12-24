

const Footer = () => {
  return (
    <div>
      <footer className="bg-purple-500 from-blue-500 via-purple-500 to-pink-500 text-white body-font max-w-full">
        <div className="bg-purple-500 from-blue-500 via-purple-500 to-pink-500 text-black">
          <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <span className="ml-3 text-xl">  © Data fetching demo</span>
            </a>
            <p className="text-sm text-black-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
              Developed by Asifa M.Qasim ❤️
              <a
                href="https://twitter.com/knyttneve"
                className="text-gray-600 ml-1"
                rel="noopener noreferrer"
                target="_blank"
              ></a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
