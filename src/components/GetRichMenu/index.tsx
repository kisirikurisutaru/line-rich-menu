'use client'

import { useContext } from "react";
import { IdsContext } from "@/context/IdsContext";

export const GetRichMenu = () => {
  const [ menuIds, setMenuIds ] = useContext(IdsContext);


  const getRichMenu = async () => {
    const response = await fetch('/api/GetRichMenu/');

    if (!response.ok) {
      console.error('API request failed:', response);
      return;
    }

    const result = await response.json();

    const richMenus = result.data.richmenus;

    const richMenuIds = richMenus.map((item) => item.richMenuId)

    console.log(richMenuIds);

    setMenuIds(richMenuIds)
  }

  return (
    <>
      <button onClick={getRichMenu}>リッチメニューを一覧で取得ボタン</button>
    </>
  );
};