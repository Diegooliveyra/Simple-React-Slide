import { useState } from 'react';
import styles from './Slide.module.css';

const Slide = ({ slides }) => {
  const [active, setActive] = useState(0);

  function slideNext() {}

  function slidePrev() {}

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {slides.map((slide) => (
          <div className={styles.item} key={slide.id}>
            {slide.content}
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
