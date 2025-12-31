import WindowControls from "#components/WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";
import { Download, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  const [numPages, setNumPages] = useState(0);
  const [page, setPage] = useState(1);

  return (
    <>
      {/* Header */}
      <div id="window-header" className="flex items-center gap-3">
        <WindowControls target="resume" />
        <h2 className="flex-1">Resume.pdf</h2>

        <a
          href="files/resume.pdf"
          download
          title="Download Resume"
          className="icon"
        >
          <Download size={16} />
        </a>
      </div>

      {/* PDF */}
      <div className="p-3 flex relative justify-center">
        <Document
          file="files/resume.pdf"
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          loading={<p className="text-sm text-gray-400">Loading PDF…</p>}
        >
          <Page pageNumber={page} renderTextLayer renderAnnotationLayer />
        </Document>
        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 pb-3 absolute top-8 z-99">
          <button
            className="icon"
            disabled={page <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            <ChevronLeft />
          </button>

          <span className="text-sm text-gray-400">
            Page {page} of {numPages}
          </span>

          <button
            className="icon"
            disabled={page >= numPages}
            onClick={() => setPage((p) => Math.min(numPages, p + 1))}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
