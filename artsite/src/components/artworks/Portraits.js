import React from 'react';

const Portraits = ({ artworks }) => {
  return (
    <>
      <div className="section-header">
        <span className="section-number">01</span>
        <h2 className="section-title">Portraits</h2>
        <div className="section-divider" />
      </div>

      <div className="artwork-grid grid-featured" style={{ marginBottom: '2px' }}>
        <div className="artwork-card">
          <div className="artwork-card-img landscape">
            <img src="/images/artwork/portrait1.jpg" alt="Lily" />
          </div>
          <div className="artwork-card-caption">
            <div className="artwork-card-name">Lily</div>
            <div className="artwork-card-medium">oil colour</div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <div className="artwork-card">
            <div className="artwork-card-img square">
              <img src="/images/artwork/portrait2.jpg" alt="Love in 1800s" />
            </div>
            <div className="artwork-card-caption">
              <div className="artwork-card-name">Love in 1800s</div>
              <div className="artwork-card-medium">oil colour</div>
            </div>
          </div>
          <div className="artwork-card">
            <div className="artwork-card-img square">
              <img src="/images/artwork/portrait3.jpg" alt="Twinkling Eyes" />
            </div>
            <div className="artwork-card-caption">
              <div className="artwork-card-name">Twinkling Eyes</div>
              <div className="artwork-card-medium">oil pastels</div>
            </div>
          </div>
        </div>
      </div>

      <div className="artwork-grid grid-4">
        {[
          { img: '/images/artwork/portrait4.jpg', title: 'Splash of Black and White', medium: 'oil colour' },
          { img: '/images/artwork/portdigi1.jpg', title: 'Digital Art Bang Chan', medium: 'digital art' },
          { img: '/images/artwork/portdigi2.jpg', title: 'Digital Art Sunghoon', medium: 'digital art' },
          { img: '/images/artwork/portdigi3.jpg', title: 'Digital Art Joker', medium: 'digital art' },
          { img: '/images/artwork/portdigi4.jpg', title: 'Digital Art Woman', medium: 'digital art' },
          { img: '/images/artwork/portrait5.jpg', title: 'Raw Rural Beauty', medium: 'oil colour' },
          { img: '/images/artwork/portrait6.jpg', title: 'Proportions', medium: 'water colour' },
          { img: '/images/artwork/portrait7.jpg', title: 'Fortress', medium: 'oil colour' },
          { img: '/images/artwork/portrait8.jpg', title: 'On My Knees', medium: 'oil colour' },
          { img: '/images/artwork/everything9.jpg', title: 'Eye of Everything', medium: 'oil colour' }
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

export default Portraits;
