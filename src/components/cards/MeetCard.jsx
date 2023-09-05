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
        data-url="https://calendly.com/joaquinbianchi/30min?hide_gdpr_banner=1"
        style={{ width: "320px", height: "800px" }}
      ></div>
    </>
  );
}
