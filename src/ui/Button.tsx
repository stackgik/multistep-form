interface ButtonProp {
  children: React.ReactNode;
  onClick?: () => void;
  link?: boolean;
}

const Button = ({ children, onClick, link }: ButtonProp) => {
  if (link) {
    return (
      <button
        className="text-gray-400 text-md font-medium hover:text-blue-900 transition-all duration-300 ease-in-out"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      className="px-6 py-3 rounded-md bg-blue-950 text-white text-md font-medium hover:bg-blue-200 transition-all duration-300 ease-in-out"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
