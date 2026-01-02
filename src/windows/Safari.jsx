import WindowControls from "#components/WindowControls";
import { blogPosts } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  ExternalLink,
  PanelLeft,
  Plus,
  Search,
  Share,
  ShieldHalf,
} from "lucide-react";

const Safari = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />
        <PanelLeft className="ml-10 icon" />

        <div className="flex gap-1 items-center ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>

        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />
          <div className="search">
            <Search className="icon" />
            <input
              type="text"
              placeholder="Search or enter blog name"
              className="flex-1"
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>

      <div className="blog">
        <h2>My Articles / Blogs</h2>

        {/* Safari-like cards */}
        <div className="blog-grid">
          {blogPosts.map(({ id, image, title, date, link }) => (
            <article key={id} className="blog-card">
              <div className="blog-banner">
                <img src={image} alt={title} loading="lazy" />
              </div>

              <div className="blog-meta">
                <h3 className="blog-title">{title}</h3>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open blog"
                  aria-label={`Open ${title}`}
                >
                  <ExternalLink className="size-5 text-gray-800 cursor-pointer" />
                </a>
              </div>

              <p className="blog-date">{date}</p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

const SafariWrapped = WindowWrapper(Safari, "safari");

export default SafariWrapped;
