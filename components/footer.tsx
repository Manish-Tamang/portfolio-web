export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full max-w-[920px] mx-auto px-4 py-8 mt-16 font-bricolage">
      <div className="border-t border-border pt-8">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <p>© {currentYear} Aman Sah. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="mailto:amansah112.as9@gmail.com" className="hover:text-foreground transition-colors">
              Email
            </a>
            <a href="https://www.linkedin.com/in/aman-kumar-sah-20204128b/" className="hover:text-foreground transition-colors">
              Linkedin
            </a>
            <a href="https://github.com/amansah77" className="hover:text-foreground transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
