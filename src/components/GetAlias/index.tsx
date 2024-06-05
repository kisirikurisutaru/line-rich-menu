'use client'

import { useContext } from "react";
import { IdsContext } from "@/context/IdsContext";

export const GetAlias = () => {
  const [ , , aliasIds, setAliasIds ] = useContext(IdsContext);

  const getAlias = async () => {
    const response = await fetch('/api/GetAlias/');

    if (!response.ok) {
      console.error('API request failed:', response);
      return;
    }

    const result = await response.json();

    const richMenuAliases = result.data.aliases;

    const richMenuAliasIds = richMenuAliases.map((item) => item.richMenuAliasId)

    setAliasIds(richMenuAliasIds);
  }
  return (
    <>
      <button onClick={getAlias}>エイリアスを一覧で取得</button>
    </>
  );
};
