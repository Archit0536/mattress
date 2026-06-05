import MattressTypePage from '@/components/MattressTypePage';

export default function InnerspringPage() {
  return (
    <MattressTypePage
      title="Innerspring Mattresses"
      subtitle="Traditional spring support with a fresh modern feel."
      image="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80"
      benefits={[
        'Reliable support with a firmer overall feel.',
        'Durable coil base for long-lasting comfort.',
        'Excellent for sleepers who prefer classic bounce.'
      ]}
    />
  );
}
