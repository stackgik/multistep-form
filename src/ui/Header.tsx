interface HeaderProps {
  title: string;
  subtitle: string;
  center?: boolean;
}

const Header = ({ title, subtitle, center }: HeaderProps) => {
  return (
    <header className="flex flex-col gap-3">
      <h2 className={`text-3xl font-bold ${center ? 'text-center' : ''}`}>
        {title}
      </h2>
      <p className={`text-sm text-gray-400 ${center ? 'text-center' : ''}`}>
        {subtitle}
      </p>
    </header>
  );
};

export default Header;
