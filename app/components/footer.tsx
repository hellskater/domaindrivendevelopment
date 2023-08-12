import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="py-5 flex justify-center border-t-2 border-gray-800 border-opacity-50">
      <a
        href="https://github.com/hellskater/domaindrivendevelopment"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub className="text-3xl" />
      </a>
    </footer>
  );
};

export default Footer;
