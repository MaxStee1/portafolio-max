export default function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between text-sm text-text-muted">
        <span>© 2026 Max Malebrán Cortés</span>
        <a
          href="https://github.com/MaxStee1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-text-primary transition-colors"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}