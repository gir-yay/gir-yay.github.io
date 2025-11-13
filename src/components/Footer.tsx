import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="section-container">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-secondary fill-secondary" />
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ghizlane RAHMOUNI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
