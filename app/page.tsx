import Image from 'next/image';

const featuredMattresses = [
  {
    title: 'CloudSoft Memory Foam',
    description: 'Pressure-relieving comfort for side sleepers and back support.',
    image:
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Balance Hybrid Pro',
    description: 'Responsive pocket coils with adaptive foam layers.',
    image:
      'https://images.unsplash.com/photo-1631048500391-5f6f9e91395f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Classic Innerspring',
    description: 'Traditional bounce and durable edge support for all-night comfort.',
    image:
      'https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1200&q=80'
  }
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div>
          <h1>Sleep Better with Springdoo Mattresses</h1>
          <p>
            Discover premium mattresses engineered for deep sleep, cooler nights, and a healthier
            spine. Browse our mattress types using the tabs above and find your perfect fit.
          </p>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
          alt="A bright modern bedroom featuring a comfortable mattress"
          width={720}
          height={460}
          style={{ width: '100%', height: 'auto', borderRadius: 14 }}
          priority
        />
      </section>

      <section>
        <h2>Featured Mattresses</h2>
        <div className="card-grid">
          {featuredMattresses.map((mattress) => (
            <article className="card" key={mattress.title}>
              <Image src={mattress.image} alt={mattress.title} width={500} height={320} />
              <div className="card-content">
                <h3>{mattress.title}</h3>
                <p>{mattress.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
