import React, { useState } from "react";
import Head from "next/head";

interface TabInfoProps {
  tabName: string;
}

const TabInfo: React.FC<TabInfoProps> = ({ tabName }) => {
  const tabLabel = "Kevin Wu | " + tabName;
  return (
    <Head>
      <title>{tabLabel}</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="images/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="images/favicon-16x16.png"
      />
    </Head>
  );
};

export default TabInfo;
