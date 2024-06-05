'use client'

import { useContext } from "react";
import { IdsContext } from "@/context/IdsContext";

export const DeleteAlias = () => {
  const [ , , aliasIds, setAliasIds ] = useContext(IdsContext);

  const DeleteAlias = async () => {
    const ids = aliasIds.join(',')

    const response = await fetch(`/api/DeleteAlias?${ids}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      console.error('API request failed:', response);
      return;
    }
    const result = await response.json();
    return console.log(result);
  }

  return (
    <>
      <button onClick={DeleteAlias}>エイリアス削除ボタン</button>
    </>
  );
};