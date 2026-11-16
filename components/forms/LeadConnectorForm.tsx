import Script from "next/script";

const FORM_ID = "IKScdsR5ru6e0iD1s082";
const FORM_NAME = "🔵 Website form for dental sleep link ";
const IFRAME_ID = `inline-${FORM_ID}`;

export default function LeadConnectorForm() {
  return (
    <>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
        style={{ width: "100%", height: "100%", border: "none", borderRadius: 8 }}
        id={IFRAME_ID}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={FORM_NAME}
        data-height="598"
        data-layout-iframe-id={IFRAME_ID}
        data-form-id={FORM_ID}
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title={FORM_NAME}
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </>
  );
}
