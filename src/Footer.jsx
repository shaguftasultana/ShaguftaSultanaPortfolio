import React from "react";

const Footer = () => {
  return (
    <footer className=" text-gray-400 py-6">
      <div className="container mx-auto text-center">
        <hr className="border-gray-400 mb-4" />

        <div className="flex justify-center lg:space-x-8 md:space-x-6 space-x-4">
          <a
            href="https://github.com/shaguftasultana/"
            target="_blank"
            aria-label="Github"
            className="text-white hover:text-gray-400 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="m-auto w-6"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 0a8 8 0 0 0-2.534 15.589c.4.074.548-.174.548-.386v-1.35c-2.226.484-2.695-1.07-2.695-1.07-.365-.927-.89-1.173-.89-1.173-.728-.498.055-.488.055-.488.805.055 1.229.826 1.229.826.715 1.245 1.876.884 2.33.676.073-.52.281-.885.509-1.09-1.782-.205-3.642-.888-3.642-3.948 0-.872.31-1.583.824-2.142-.083-.205-.359-1.017.078-2.118 0 0 .67-.215 2.2.82.637-.178 1.318-.268 2-.271.682.003 1.363.093 2 .27 1.53-1.034 2.198-.819 2.198-.819.438 1.101.162 1.913.08 2.118.514.559.823 1.27.823 2.142 0 3.064-1.864 3.74-3.652 3.943.287.246.542.732.542 1.475v2.189c0 .213.144.461.553.382A8.001 8.001 0 0 0 8 0z"
              />
            </svg>
          </a>
          <a href="#" className="text-white">
            <a
              href="https://www.upwork.com/freelancers/~0104d552f52d8db247"
              target="_blank"
              aria-label="Upwork"
              className="text-white hover:text-gray-400 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6"
                viewBox="0 0 24 24"
              >
                <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
              </svg>
            </a>
          </a>
          <a href="#" className="text-white">
            {" "}
            <a
              href="https://www.linkedin.com/in/shagufta-sultana-a09ba0265/"
              target="_blank"
              aria-label="LinkedIn"
              className="text-white hover:text-gray-400 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                />
              </svg>
            </a>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
