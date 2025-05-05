import React from 'react'
import "./Gallery.css"

const Gallery = () => {
  return (
    <>
        {/* <!-- Gallery Section --> */}
        <section className="gallery" id="gallery">
            <div className="gallery-item">
                <img src="/assets/Gallery/Gallery-1.jpg" alt="Project 1"/>
                <h3>Project Name 1</h3>
                <p>Brief description of the project.</p>
            </div>
            <div className="gallery-item">
                <img src="/assets/Gallery/Gallery-2.jpeg" alt="Project 2"/>
                <h3>Project Name 2</h3>
                <p>Brief description of the project.</p>
            </div>
            <div className="gallery-item">
                <img src="/assets/Gallery/Gallery-3.jpeg" alt="Project 3"/>
                <h3>Project Name 3</h3>
                <p>Brief description of the project.</p>
            </div>
            <div className="gallery-item">
                <img src="/assets/Gallery/Gallery-4.jpg" alt="Project 4"/>
                <h3>Project Name 4</h3>
                <p>Brief description of the project.</p>
            </div>
            <div className="gallery-item">
                <img src="/assets/Gallery/Gallery-1.jpg" alt="Project 1"/>
                <h3>Project Name 5</h3>
                <p>Brief description of the project.</p>
            </div>
            <div className="gallery-item">
                <img src="/assets/Gallery/Gallery-2.jpeg" alt="Project 2"/>
                <h3>Project Name 6</h3>
                <p>Brief description of the project.</p>
            </div>
            <div className="gallery-item">
                <img src="/assets/Gallery/Gallery-3.jpeg" alt="Project 3"/>
                <h3>Project Name 7</h3>
                <p>Brief description of the project.</p>
            </div>
            <div className="gallery-item">
                <img src="/assets/Gallery/Gallery-4.jpg" alt="Project 4"/>
                <h3>Project Name 8</h3>
                <p>Brief description of the project.</p>
            </div>
        </section>
    </>
  )
}

export default Gallery;
