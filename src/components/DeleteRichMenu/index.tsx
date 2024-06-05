'use client'

import { useContext } from "react";
import { IdsContext } from "@/context/IdsContext";

export const DeleteRichMenu = () => {
  const [ menuIds, setMenuIds ] = useContext(IdsContext);

  const DeleteRichMenu = async () => {
    const ids = menuIds.join(',')

    const response = await fetch(`/api/DeleteRichMenu?${ids}`, {
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
      <button onClick={DeleteRichMenu}>リッチメニュー削除ボタン</button>
    </>
  );
};