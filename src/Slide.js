import { useState, useRef, useEffect } from 'react';
import styles from './Slide.module.css';

const Slide = ({ slides }) => {
  const [active, setActive] = useState(0);
  const [position, setPosition] = useState(0);
  const contentRef = useRef();

  useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(active * width));
  }, [active]);

  function slideNext() {
    if (active < slides.length - 1) setActive(active + 1);
  }

  function slidePrev() {
    if (active > 0) setActive(active - 1);
  }

  return (
    <section className={styles.container}>
      <div
        className={styles.content}
        style={{ transform: `translateX(${position}px)` }}
      >
        {slides.map((slide) => (
          <div ref={contentRef} className={styles.item} key={slide.id}>
            <img src={slide.url} alt="Marvel Hero" />
          </div>
        ))}
      </div>
      <nav>
        <button className={styles.btnPrev} onClick={slidePrev}>
          <span
            className="iconify"
            data-icon="dashicons:arrow-left-alt2"
            data-inline="false"
          ></span>
        </button>
        <button className={styles.btnNext} onClick={slideNext}>
          <span
            className="iconify"
            data-icon="dashicons:arrow-right-alt2"
            data-inline="false"
          ></span>
        </button>
      </nav>
    </section>
  );
};

export default Slide;
