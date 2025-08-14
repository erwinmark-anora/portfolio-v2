const Footer: React.FunctionComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-7xl mx-auto py-4">
      <p>&copy; {currentYear} Erwin Mark Anora E-Portfolio version 2.0</p>
    </footer>
  );
};

export default Footer;
