import React from 'react';

const Sketches = ({ artworks }) => {
  return (
    <>
      <div className="section-header">
        <span className="section-number">02</span>
        <h2 className="section-title">Sketches</h2>
        <div className="section-divider" />
      </div>

      <div className="artwork-grid grid-featured" style={{ marginBottom: '2px' }}>
        <div className="artwork-card">
          <div className="artwork-card-img landscape">
            <img src="/images/artwork/sketch1.jpg" alt="Doddle During Lectures" />
          </div>
          <div className="artwork-card-caption">
            <div className="artwork-card-name">Doddle During Lectures</div>
            <div className="artwork-card-medium">ballpoint pen</div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <div className="artwork-card">
            <div className="artwork-card-img square">
              <img src="/images/artwork/sketch2.jpg" alt="Can't Cut My Wings" />
            </div>
            <div className="artwork-card-caption">
              <div className="artwork-card-name">Can't Cut My Wings</div>
              <div className="artwork-card-medium">ballpoint pen</div>
            </div>
          </div>
          <div className="artwork-card">
            <div className="artwork-card-img square">
              <img src="/images/artwork/sketch3.jpg" alt="Live Up" />
            </div>
            <div className="artwork-card-caption">
              <div className="artwork-card-name">Live Up</div>
              <div className="artwork-card-medium">ballpoint pen</div>
            </div>
          </div>
        </div>
      </div>

      <div className="artwork-grid grid-4">
        {[
          { img: '/images/artwork/sketch4.jpg', title: 'Tears of Love' },
          { img: '/images/artwork/sketch5.jpg', title: 'Marilyn' },
          { img: '/images/artwork/sketch6.jpg', title: 'Soft' },
          { img: '/images/artwork/sketch7.jpg', title: 'Yearn' },
          { img: '/images/artwork/sketch8.jpg', title: 'Gaze' },
          { img: '/images/artwork/sketch9.jpg', title: 'Fun' },
          { img: '/images/artwork/sketch10.jpg', title: 'Luffy' },
          { img: '/images/artwork/sketch11.jpg', title: 'Aesthetic' },
          { img: '/images/artwork/sketch12.jpg', title: 'Light and Dark' },
          { img: '/images/artwork/sketch13.jpg', title: 'Thoughts' },
          { img: '/images/artwork/sketch14.jpg', title: 'Connect' },
          { img: '/images/artwork/sketch15.jpg', title: 'With You' },
          { img: '/images/artwork/sketch16.jpg', title: 'Perspective' },
          { img: '/images/artwork/sketch17.jpg', title: 'Mush' },
          { img: '/images/artwork/sketch18.jpg', title: 'Pretty' },
          { img: '/images/artwork/sketch19.jpg', title: 'Naruto Sasuke Kakashi' },
          { img: '/images/artwork/sketch20.jpg', title: 'Bold' }
        ].map((item, i) => (
          <div className="artwork-card" key={i}>
            <div className="artwork-card-img portrait">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="artwork-card-caption">
              <div className="artwork-card-name">{item.title}</div>
              <div className="artwork-card-medium">pencil on paper</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sketches;
