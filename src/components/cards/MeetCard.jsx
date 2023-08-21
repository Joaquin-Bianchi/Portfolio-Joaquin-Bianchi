import Script from "next/script";

export default function MeetCard() {
  return (
    <>
      <Script
        async
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
      ></Script>
      <div
        class="calendly-inline-widget"
        data-url="https://calendly.com/joaquinbianchi/30min"
        style={{ width: "320px", height: "700px" }}
      ></div>
    </>
  );
}

// <!-- Principio del widget de globo de Calendly -->
// <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
// <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
// <script type="text/javascript">window.onload = function() { Calendly.initBadgeWidget({ url: 'https://calendly.com/joaquinbianchi/30min?hide_event_type_details=1&hide_gdpr_banner=1', text: 'Programe una reunión conmigo', color: '#ffa70e', textColor: '#ffffff', branding: true }); }</script>
// <!-- Final del widget de globo de Calendly --></link>
