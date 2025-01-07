import { metadata } from './seo/metadata'; // Import metadata from seo folder
import Head from 'next/head';
import { Button } from "@/components/ui/button"; // Import your Button component
import Image from "next/image"; // Import Image for usage if needed
import { UserButton } from '@clerk/nextjs';


export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
      </Head>
      <div>
        <h1>Programming Communities</h1>
        <Button>Subcribe</Button>
        <UserButton />
        {/* Add any images or additional content here */}
     
      </div>
    </>
  );
}
