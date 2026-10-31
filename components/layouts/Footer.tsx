import { footer } from '@/content/portfolio';

const Footer: React.FunctionComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-7xl mx-auto py-4">
      <p className="text-center">&copy; {currentYear} {footer.copyrightName}</p>
    </footer>
  );
};

export default Footer;
