export default function TermsAndPrivacy() {
  return (
    <div className="pt-32 pb-20 min-h-screen max-w-7xl mx-auto px-6">
      <h1 className="text-4xl font-bold tracking-tight text-[#001f3f] mb-12">Terms of Use & Privacy Policy</h1>
      
      <div className="space-y-16">
        <section id="terms">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Terms of Use</h2>
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
            <p>Welcome to JTL LINK BUILDERS. By accessing our website, you agree to these Terms of Use.</p>
            <p>1. <strong>Use of Site:</strong> The content on this website is for informational purposes related to our architectural and construction services.</p>
            <p>2. <strong>Intellectual Property:</strong> All designs, images, and text are property of JTL LINK BUILDERS. Unauthorized use is prohibited.</p>
            <p>3. <strong>Modifications:</strong> We reserve the right to modify these terms at any time.</p>
          </div>
        </section>

        <section id="privacy">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Privacy Policy</h2>
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
            <p>Your privacy is important to us. This policy outlines how we handle your personal information.</p>
            <p>1. <strong>Information Collection:</strong> We collect information when you contact us via email or our social media channels.</p>
            <p>2. <strong>Use of Information:</strong> We use your information to respond to inquiries and provide requested services.</p>
            <p>3. <strong>Data Protection:</strong> We take reasonable steps to protect your personal information from unauthorized access.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
