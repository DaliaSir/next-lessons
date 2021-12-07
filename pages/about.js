import Head from "next/head";
import Layout from "../components/layout/Layout";
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <Head title="About" />

      <div className="container">
        <h1>About page</h1>
        <Image src="/electricboard-bg.png" alt="" width={1000} height={400} />
      </div>
    </Layout>
  );
}
