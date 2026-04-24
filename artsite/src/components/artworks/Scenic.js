import React from 'react';

const Scenic = ({ artworks }) => {
  return (
    <>
      <div className="section-header">
        <span className="section-number">04</span>
        <h2 className="section-title">Scenic Paintings</h2>
        <div className="section-divider" />
      </div>

      <div className="artwork-grid grid-featured" style={{ marginBottom: '2px' }}>
        <div className="artwork-card">
          <div className="artwork-card-img landscape">
            <img src="/images/artwork/scenic1.jpg" alt="Space Girl" />
          </div>
          <div className="artwork-card-caption">
            <div className="artwork-card-name">Space Girl</div>
            <div className="artwork-card-medium">acrylic on canvas</div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <div className="artwork-card">
            <div className="artwork-card-img square">
              <img src="/images/artwork/scenic2.jpg" alt="Bloom" />
            </div>
            <div className="artwork-card-caption">
              <div className="artwork-card-name">Bloom</div>
              <div className="artwork-card-medium">oil on canvas</div>
            </div>
          </div>
          <div className="artwork-card">
            <div className="artwork-card-img square">
              <img src="/images/artwork/scenic3.jpg" alt="Shout Out" />
            </div>
            <div className="artwork-card-caption">
              <div className="artwork-card-name">Shout Out</div>
              <div className="artwork-card-medium">acrylic</div>
            </div>
          </div>
        </div>
      </div>

      <div className="artwork-grid grid-4">
        {[
          { img: '/images/artwork/scenic4.jpg', title: 'Fiery Sparks', medium: 'acrylic' },
          { img: '/images/artwork/scenic5.jpg', title: 'Deepen', medium: 'acrylic' },
          { img: '/images/artwork/scenic6.jpg', title: 'Talking to the Sun', medium: 'acrylic' },
          { img: '/images/artwork/scenic7.jpg', title: 'Middle of Nowhere', medium: 'acrylic' },
          { img: '/images/artwork/scenic8.jpg', title: 'Remember It All', medium: 'acrylic' }
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

export default Scenic;
