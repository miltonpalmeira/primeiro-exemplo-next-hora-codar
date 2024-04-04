import Link from "next/link";

export default function Products() {
    return (
      <div>
        <h1>Produtos</h1>
        <Link href="/products" style={{ fontSize: '30px', color: 'blue', textDecoration: 'underline' }}>Voltar</Link>
      </div>
    );
  }
  