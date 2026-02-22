import { footerStyles } from "@/lib/styles"

export function Footer() {
  return (
    <footer className={footerStyles()}>
      <div className="footer-container container mx-auto max-w-6xl">
        <div className="footer-content text-center text-sm text-muted-foreground">
          <p className="copyright">&copy; {new Date().getFullYear()} Vinay Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
