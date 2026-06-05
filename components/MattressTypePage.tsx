import Image from 'next/image';

type MattressTypePageProps = {
  title: string;
  subtitle: string;
  image: string;
  benefits: string[];
};

export default function MattressTypePage({ title, subtitle, image, benefits }: MattressTypePageProps) {
  return (
    <>
      <header className="page-header">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </header>
      <section className="hero" style={{ marginBottom: '1rem' }}>
        <Image
          src={image}
          alt={title}
          width={700}
          height={420}
          style={{ width: '100%', height: 'auto', borderRadius: 14 }}
        />
        <div className="card" style={{ padding: '1.2rem' }}>
          <h2>Why choose this type?</h2>
          <ul>
            {benefits.map((benefit) => (
              <li key={benefit} style={{ marginBottom: '0.6rem', lineHeight: 1.4 }}>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
