export default function VideoSection() {
  return (
    <section className="welcome__video">
      <div className="container">
        <h2 className="section-title welcome__video-title">WELCOME TO D&M LEASING</h2>
        <p className="welcome__video-text">Find out how easy it is to lease from D&M</p>
        <iframe
          className="welcome__video-video"
          width="1000"
          height="500"
          src="https://www.youtube.com/embed/ahdCJUqb254?si=9vJpd74RJETIGmy2&controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </section>
  );
}
