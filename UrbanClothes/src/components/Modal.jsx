// src/components/Modal/NewsletterModal.jsx
import { useEffect, useState } from 'react';

import '../assets/css/Modal.css';
import '../assets/css/Global.css';



const NewsletterModal = () => {
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (closed) document.body.classList.remove('modal-open');
    else document.body.classList.add('modal-open');
  }, [closed]);

  if (closed) return null;

  return (
    <div className="modal" data-modal>
      <div className="modal-close-overlay" onClick={() => setClosed(true)} />
      <div className="modal-content">
        <button className="modal-close-btn" onClick={() => setClosed(true)}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
        <div className="newsletter-img">
          <img src="../../public/assets/img/newsletter.png" alt="newsletter" width="400" height="400" />
        </div>
        <div className="newsletter">
          <form>
            <h3 className="newsletter-title">Subscribe Newsletter.</h3>
            <p className="newsletter-desc">
              Subscribe to <b>Urban Clothes</b> for the latest products and discounts.
            </p>
            <input type="email" placeholder="Email Address" required />
            <button type="submit" className="btn-newsletter">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterModal;
