// import Link from 'next/link';
import React from 'react';
import { Feed } from '../components/organisms/Feed';
import { Sidebar } from '../components/molecules/Sidebar';
import { Widgets } from '../components/organisms/Widgets';
import { Layout } from '../components/templates/Layout';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  PreviewData,
} from 'next';
import { FollowResult, TrendingResult } from '@/types';
import { ParsedUrlQuery } from 'querystring';

type Props = {
  trendingResults: TrendingResult[];
  followResults: FollowResult[];
};

const IndexPage: React.FC<Props> = ({ trendingResults, followResults }) => {
  return (
    <Layout title="Home / Tweepies">
      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        <Feed />
        <Widgets
          followResult={followResults}
          trendingResult={trendingResults}
        />
      </main>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  const trendingResults = await fetch('https://jsonkeeper.com/b/NKEV').then(
    (res) => res.json()
  );

  const followResults = await fetch('https://jsonkeeper.com/b/WWMJ').then(
    (res) => res.json()
  );

  console.log(context);

  return {
    props: {
      trendingResults,
      followResults,
    },
  };
};

export default IndexPage;
