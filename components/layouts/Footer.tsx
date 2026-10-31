import { footer } from '@/content/portfolio';

// The only footer on the site. The year updates on its own.
const Footer: React.FunctionComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto w-full max-w-content px-gutter">
      <p className="border-t border-border py-8 text-center text-small text-muted-foreground">
        &copy; {currentYear} {footer.copyrightName}
      </p>
    </footer>
  );
};

export default Footer;
