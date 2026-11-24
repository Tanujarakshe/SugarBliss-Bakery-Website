import React, { useState } from 'react';
import { CakeSlice, Menu, X, ArrowUpRight, Instagram, Facebook, Heart, Clock3, MapPin, Phone } from 'lucide-react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [notice, setNotice] = useState('');

  const submit = (event) => {
    event.preventDefault();
    if (!form.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || !form.message.trim()) {
      setNotice('Please enter your name, a valid email and your message.');
      return;
    }
    setNotice(`Thanks, ${form.name}! Your message is ready. We will be in touch soon.`);
    setForm({ name: '', email: '', message: '' });
  };

  const closeMenu = () => setMenuOpen(false);
  return <>
    <header className="header">
      <a className="brand" href="#home" onClick={closeMenu}><span className="brand-icon"><CakeSlice size={23}/></span> Sugar<span>Bliss</span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav open' : 'nav'}>
        {['Home', 'Our treats', 'Our story', 'Contact'].map((item, i) =>
          <a key={item} href={['#home','#treats','#story','#contact'][i]} onClick={closeMenu}>{item}</a>)}
        <a className="nav-cta" href="#contact" onClick={closeMenu}>Order a treat <ArrowUpRight size={16}/></a>
      </nav>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-copy">
          <span className="eyebrow"><span/> BAKED WITH LOVE, EVERY DAY</span>
          <h1>A little slice<br/>of <em>happiness.</em></h1>
          <p>From buttery pastries to dreamy cakes, every bite is made to make your day a little sweeter.</p>
          <div className="hero-actions"><a className="button primary" href="#treats">Explore our treats <ArrowUpRight size={17}/></a><a className="text-link" href="#story">Discover our story</a></div>
          <div className="hero-note"><span className="avatar-stack"><i>♥</i><i>✿</i><i>☺</i></span><span><b>Made fresh daily</b><small>Little joys, baked from scratch</small></span></div>
        </div>
        <div className="hero-art">
          <div className="hero-image"><img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=90" alt="Beautiful layered celebration cake"/></div>
          <div className="round-stamp">MADE WITH<br/>♡ & BUTTER</div>
          <div className="floating-tag">Freshly baked<br/><b>just for you ✨</b></div>
          <span className="sparkle s1">✳</span><span className="sparkle s2">✦</span>
        </div>
      </section>

      <section className="marquee"><span>GOOD MOOD FOOD</span><b>✳</b><span>FRESH FROM THE OVEN</span><b>✳</b><span>MADE WITH LOVE</span><b>✳</b><span>GOOD MOOD FOOD</span></section>

      <section className="section treats" id="treats">
        <div className="section-heading"><div><span className="eyebrow">A TASTE OF JOY</span><h2>Our little <em>treats</em></h2></div><p>Handcrafted favourites for your everyday celebrations and everything in between.</p></div>
        <div className="product-grid">
          <article className="product-card"><div className="product-image"><img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85" alt="Strawberry layered cake"/><span>BESTSELLER</span><button aria-label="Add cake to favourites"><Heart size={18}/></button></div><div className="product-info"><div><h3>Strawberry Dream Cake</h3><p>Soft sponge · Fresh cream</p></div><b>₹650</b></div></article>
          <article className="product-card"><div className="product-image"><img src="https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=900&q=85" alt="Chocolate cupcakes"/><span>FAN FAVOURITE</span><button aria-label="Add cupcake to favourites"><Heart size={18}/></button></div><div className="product-info"><div><h3>Chocolate Fudge Cupcake</h3><p>Rich cocoa · Fudge centre</p></div><b>₹120</b></div></article>
          <article className="product-card"><div className="product-image"><img src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=85" alt="Fresh butter croissants"/><span>FRESH DAILY</span><button aria-label="Add pastry to favourites"><Heart size={18}/></button></div><div className="product-info"><div><h3>Golden Butter Croissant</h3><p>Flaky layers · Real butter</p></div><b>₹90</b></div></article>
        </div>
      </section>

      <section className="story" id="story">
        <div className="story-image"><img src="https://images.unsplash.com/photo-1559622214-f8a9850965bb?auto=format&fit=crop&w=1100&q=85" alt="Baker preparing fresh pastries"/></div>
        <div className="story-copy"><span className="eyebrow">A PINCH OF PASSION</span><h2>Sweet moments,<br/><em>made from scratch.</em></h2><p>At SugarBliss, we believe the best memories are made around something delicious. We bring together quality ingredients, a little creativity and lots of love to bake treats worth sharing.</p><a className="button dark" href="#contact">Say hello <ArrowUpRight size={17}/></a></div>
      </section>

      <section className="promise"><div><span>✳</span><b>Fresh ingredients</b><small>Only the good stuff</small></div><div><span>♡</span><b>Baked with love</b><small>A little joy in every bite</small></div><div><span>✧</span><b>Made for moments</b><small>Big days and little wins</small></div></section>

      <section className="contact section" id="contact">
        <div className="contact-copy"><span className="eyebrow">LET'S MAKE IT SWEET</span><h2>Have a sweet<br/><em>idea?</em></h2><p>Planning a celebration or craving something lovely? Tell us what you have in mind.</p><div className="contact-detail"><MapPin size={18}/> Pune, Maharashtra</div><div className="contact-detail"><Clock3 size={18}/> Tue – Sun · 9 AM – 8 PM</div><div className="contact-detail"><Phone size={18}/> +91 98765 43210 <small>(sample contact)</small></div></div>
        <form className="contact-form" onSubmit={submit} noValidate>
          <label>Your name<input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="e.g. Tanuja" /></label>
          <label>Email address<input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com"/></label>
          <label>Your message<textarea rows="4" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="I'd love to order a birthday cake..."/></label>
          <button className="button primary submit" type="submit">Send your message <ArrowUpRight size={17}/></button>
          {notice && <p className="form-notice" role="status">{notice}</p>}
        </form>
      </section>
    </main>

    <footer><a className="brand" href="#home"><span className="brand-icon"><CakeSlice size={22}/></span> Sugar<span>Bliss</span></a><p>A little sweetness goes a long way. ♡</p><div className="socials"><a href="#contact" aria-label="Instagram"><Instagram/></a><a href="#contact" aria-label="Facebook"><Facebook/></a></div><small>© {new Date().getFullYear()} SugarBliss Bakery. Demo website created for a portfolio project.</small></footer>
  </>;
}

export default App;