const Footer: React.FunctionComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-7xl mx-auto py-4">
      <p>&copy; {currentYear} My Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
