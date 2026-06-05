import MattressTypePage from '@/components/MattressTypePage';

export default function MemoryFoamPage() {
  return (
    <MattressTypePage
      title="Memory Foam Mattresses"
      subtitle="Contouring support that hugs your body and relieves pressure points."
      image="https://images.unsplash.com/photo-1616594039964-3be9db4e2ce6?auto=format&fit=crop&w=1200&q=80"
      benefits={[
        'Excellent motion isolation for couples.',
        'Great pressure relief around hips and shoulders.',
        'Ideal for side sleepers needing cradled support.'
      ]}
    />
  );
}
