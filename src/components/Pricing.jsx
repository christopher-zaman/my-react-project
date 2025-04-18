import React from 'react';

function Pricing() {
    return(
        <>
        {/* Pricing Section */}
<section id="pricing" className="pricing section">
  {/* Section Title */}
  <div className="container section-title" data-aos="fade-up">
    <h2>Pricing</h2>
    <div><span>Check Our</span> <span className="description-title">Pricing</span></div>
  </div>{/* End Section Title */}
  <div className="container">
    <div className="row gy-4">
      <div className="col-lg-4" data-aos="zoom-in" data-aos-delay={100}>
        <div className="pricing-item">
          <h3>Free Plan</h3>
          <p className="description">Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater</p>
          <h4><sup>$</sup>0<span> / month</span></h4>
          <a href="#" className="cta-btn">Start a free trial</a>
          <p className="text-center small">No credit card required</p>
          <ul>
            <li><i className="bi bi-check" /> <span>Quam adipiscing vitae proin</span></li>
            <li><i className="bi bi-check" /> <span>Nec feugiat nisl pretium</span></li>
            <li><i className="bi bi-check" /> <span>Nulla at volutpat diam uteera</span></li>
            <li className="na"><i className="bi bi-x" /> <span>Pharetra massa massa ultricies</span></li>
            <li className="na"><i className="bi bi-x" /> <span>Massa ultricies mi quis hendrerit</span></li>
            <li className="na"><i className="bi bi-x" /> <span>Voluptate id voluptas qui sed aperiam rerum</span></li>
            <li className="na"><i className="bi bi-x" /> <span>Iure nihil dolores recusandae odit voluptatibus</span></li>
          </ul>
        </div>
      </div>{/* End Pricing Item */}
      <div className="col-lg-4" data-aos="zoom-in" data-aos-delay={200}>
        <div className="pricing-item featured">
          <p className="popular">Popular</p>
          <h3>Business Plan</h3>
          <p className="description">Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater</p>
          <h4><sup>$</sup>29<span> / month</span></h4>
          <a href="#" className="cta-btn">Start a free trial</a>
          <p className="text-center small">No credit card required</p>
          <ul>
            <li><i className="bi bi-check" /> <span>Quam adipiscing vitae proin</span></li>
            <li><i className="bi bi-check" /> <span>Nec feugiat nisl pretium</span></li>
            <li><i className="bi bi-check" /> <span>Nulla at volutpat diam uteera</span></li>
            <li><i className="bi bi-check" /> <span>Pharetra massa massa ultricies</span></li>
            <li><i className="bi bi-check" /> <span>Massa ultricies mi quis hendrerit</span></li>
            <li><i className="bi bi-check" /> <span>Voluptate id voluptas qui sed aperiam rerum</span></li>
            <li className="na"><i className="bi bi-x" /> <span>Iure nihil dolores recusandae odit voluptatibus</span></li>
          </ul>
        </div>
      </div>{/* End Pricing Item */}
      <div className="col-lg-4" data-aos="zoom-in" data-aos-delay={300}>
        <div className="pricing-item">
          <h3>Developer Plan</h3>
          <p className="description">Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater</p>
          <h4><sup>$</sup>49<span> / month</span></h4>
          <a href="#" className="cta-btn">Start a free trial</a>
          <p className="text-center small">No credit card required</p>
          <ul>
            <li><i className="bi bi-check" /> <span>Quam adipiscing vitae proin</span></li>
            <li><i className="bi bi-check" /> <span>Nec feugiat nisl pretium</span></li>
            <li><i className="bi bi-check" /> <span>Nulla at volutpat diam uteera</span></li>
            <li><i className="bi bi-check" /> <span>Pharetra massa massa ultricies</span></li>
            <li><i className="bi bi-check" /> <span>Massa ultricies mi quis hendrerit</span></li>
            <li><i className="bi bi-check" /> <span>Voluptate id voluptas qui sed aperiam rerum</span></li>
            <li><i className="bi bi-check" /> <span>Iure nihil dolores recusandae odit voluptatibus</span></li>
          </ul>
        </div>
      </div>{/* End Pricing Item */}
    </div>
  </div>
</section>{/* /Pricing Section */}

        </>
    );
}

export default Pricing;