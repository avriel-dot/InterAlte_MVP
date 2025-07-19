
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('../components/Chart'), { ssr: false });

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome to InterAIte MVP</h1>
      <Chart />
    </div>
  );
}
