// import Link from 'next/link';
import React from 'react';
import { Feed } from '../components/organisms/Feed';
import { Sidebar } from '../components/molecules/Sidebar';
import { Widgets } from '../components/organisms/Widgets';
import { Layout } from '../components/templates/Layout';

const IndexPage: React.FC = () => {
  return (
    <Layout title="Home / Tweepies">
      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </Layout>
  );
};

export default IndexPage;
