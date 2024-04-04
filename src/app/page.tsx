import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/products" style={{ fontSize: '30px', color: 'blue', textDecoration: 'underline' }}>Produtos</Link>

      <h1>Hello World!</h1>
    </div>
  );
}
