import React from 'react';

const Everything = ({ artworks }) => {
  return (
    <>
      <div className="section-header">
        <span className="section-number">03</span>
        <h2 className="section-title">Everything in Between</h2>
        <div className="section-divider" />
      </div>

      <div className="artwork-grid grid-featured" style={{ marginBottom: '2px' }}>
        <div className="artwork-card">
          <div className="artwork-card-img landscape">
            <img src="/images/artwork/everything1.jpg" alt="Puppy Love" />
          </div>
          <div className="artwork-card-caption">
            <div className="artwork-card-name">Puppy Love</div>
            <div className="artwork-card-medium">oil pastels</div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <div className="artwork-card">
            <div className="artwork-card-img square">
              <img src="/images/artwork/everything2.jpg" alt="Zoro is Lost Again" />
            </div>
            <div className="artwork-card-caption">
              <div className="artwork-card-name">Zoro is Lost Again</div>
              <div className="artwork-card-medium">pencil colour</div>
            </div>
          </div>
          <div className="artwork-card">
            <div className="artwork-card-img square">
              <img src="/images/artwork/everything3.jpg" alt="Merry" />
            </div>
            <div className="artwork-card-caption">
              <div className="artwork-card-name">Merry</div>
              <div className="artwork-card-medium">acrylic</div>
            </div>
          </div>
        </div>
      </div>

      <div className="artwork-grid grid-4">
        {[
          { img: '/images/artwork/everything4.jpg', title: 'eye eye eye and eye', medium: 'mixed media' },
          { img: '/images/artwork/everything5.jpg', title: 'jjk on crack', medium: 'mixed media' },
          { img: '/images/artwork/everything6.jpg', title: 'JJK ON CRACK', medium: 'water color' },
          { img: '/images/artwork/everything7.jpg', title: 'Starry Eyes', medium: 'water color' },
          { img: '/images/artwork/everything8.jpg', title: 'Light Within', medium: 'oil on canvas' }
        ].map((item, i) => (
          <div className="artwork-card" key={i}>
            <div className="artwork-card-img portrait">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="artwork-card-caption">
              <div className="artwork-card-name">{item.title}</div>
              <div className="artwork-card-medium">{item.medium}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Everything;
