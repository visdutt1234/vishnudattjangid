const resumeUrl = "https://vj-media.s3.eu-north-1.amazonaws.com/vishnu-datt-jangid.pdf";

export default function ResumePage() {
  return (
    <section className="resume-route">
      <div className="wrap">
        <div className="sec-head reveal in">
          <span className="sec-no">00</span>
          <span className="sec-title">Resume</span>
          <span className="sec-tag">[ live preview ]</span>
        </div>
        <div className="resume-panel reveal in">
          <div className="resume-bar">
            <span className="resume-file">preview source: vishnu-datt-jangid.pdf</span>
            <div className="resume-actions">
              <a className="resume-btn" href={resumeUrl} target="_blank" rel="noopener noreferrer">
                Open PDF
              </a>
              <a className="resume-btn" href={resumeUrl} download>
                Download
              </a>
            </div>
          </div>
          <div className="resume-frame">
            <iframe src={`${resumeUrl}#view=FitH`} title="Vishnu Datt Jangid Resume" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
