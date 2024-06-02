'use client'

export const Layout = () => {

  const getRichMenu = async () => {
    const response = await fetch('/api/GetRichMenu/');
    if (!response.ok) {
      console.error('API request failed:', response);
      return;
    }
    const result = await response.json();
    return console.log(result);
  }

  return (
    <>
      <button onClick={getRichMenu}>ボタン</button>

    </>
  );
};