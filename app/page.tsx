import { heroSrc } from "@/lib/quilts";
import { Gallery } from "@/components/Gallery";
import { RevealObserver } from "@/components/Reveal";

export default function Home() {
  const heroHeroSrc = heroSrc("Q-11");

  return (
    <>
      <div className="fabric-noise" />

      <nav className="nav">
        <a className="nav-mark" href="#top">
          Priscilla&nbsp;Roberts
        </a>
        <div className="nav-links">
          <a href="#collection">Collection</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="section hero" id="top">
        <div className="hero-copy reveal in">
          <div className="hero-eyebrow">
            <span className="eyebrow">Boston, Massachusetts · Since the 1980s</span>
          </div>
          <h1 className="hero-name">
            Priscilla
            <br />
            <span className="amp">Roberts</span>
          </h1>
          <p className="hero-tagline">
            Every stitch,
            <br />
            a story.
          </p>
          <div className="hero-meta">
            <span>Textile Art</span>
            <span>25 Works</span>
            <span>Private Collection</span>
          </div>
          <a href="#collection" className="cta">
            View the Collection
            <span className="cta-arrow" />
          </a>
        </div>

        <div className="hero-image-wrap reveal in">
          <div className="hero-index">01</div>
          <div className="hero-image">
            {heroHeroSrc && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={heroHeroSrc} alt="Damond's Quilt" />
            )}
            <div className="hero-image-label">Q-11 · Damond&rsquo;s Quilt · Lead Work</div>
          </div>
        </div>
      </section>

      <section className="section" id="collection">
        <div className="container-wide">
          <div className="gallery-intro reveal">
            <div>
              <div className="section-number">I. The Collection</div>
              <h2>
                Twenty-five
                <br />
                quilts,{" "}
                <em>
                  and the people
                  <br />
                  they were made for.
                </em>
              </h2>
            </div>
            <p className="lead">
              Each piece in this collection was made as a gift — never for sale. The names
              beneath each work are the people who now keep them. Hover a quilt to read its
              story; open one to see the label that was stitched to its back.
            </p>
          </div>
          <Gallery />
        </div>
      </section>

      <section className="section about" id="about">
        <div className="container-wide">
          <div className="about-grid">
            <div className="about-portrait reveal">
              <div className="q-placeholder">
                <div className="q-placeholder-label">
                  PORTRAIT
                  <br />
                  PRISCILLA ROBERTS
                </div>
              </div>
            </div>
            <div className="about-body reveal">
              <div className="section-number">II. About</div>
              <div className="eyebrow">The Artist</div>
              <h2>
                She does not sell
                <br />
                her quilts. <em>She gives them.</em>
              </h2>
              <p>
                Priscilla Roberts has spent decades turning fabric into memory. Working from
                her home in Boston, she designs and hand-quilts each piece from scratch —
                choosing every color, every pattern, every stitch with intention. No two
                quilts are alike, because no two people are alike.
              </p>
              <p>
                Her quilts are made as gifts. Each one is designed around the person who will
                receive it — their colors, their story, their spirit. Some are made to
                celebrate. Some are made to comfort. Some are made to remember. What they all
                share is the same quiet truth sewn into every label: that love, expressed
                through craft, outlasts everything.
              </p>
              <p>
                Priscilla does not sell her quilts. She gives them. This portfolio exists so
                that the people who carry her work in their homes can see it the way it
                deserves to be seen — as the art it is.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <div className="stat-num">
                    25<em>+</em>
                  </div>
                  <div className="stat-label">Quilts made</div>
                </div>
                <div className="stat">
                  <div className="stat-num">Decades</div>
                  <div className="stat-label">Of craft</div>
                </div>
                <div className="stat">
                  <div className="stat-num">
                    <em>Boston</em>
                  </div>
                  <div className="stat-label">Massachusetts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div>Built by Neon Rabbit Digital Services</div>
      </footer>

      <RevealObserver />
    </>
  );
}
