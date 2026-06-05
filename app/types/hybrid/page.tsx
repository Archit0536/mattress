import MattressTypePage from '@/components/MattressTypePage';

export default function HybridPage() {
  return (
    <MattressTypePage
      title="Hybrid Mattresses"
      subtitle="The best of both worlds: foam comfort with spring responsiveness."
      image="https://images.unsplash.com/photo-1578898887932-dce23a595ad4?auto=format&fit=crop&w=1200&q=80"
      benefits={[
        'Balanced feel with contouring and bounce.',
        'Better airflow for cooler sleep.',
        'Strong edge support for easier movement.'
      ]}
    />
  );
}
