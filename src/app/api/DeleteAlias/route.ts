export async function DELETE(req) {

  const requestUrl = req.url;
  const requestUrlParm = requestUrl.substr(requestUrl.indexOf('?') + 1)
  const aliasIds = requestUrlParm.split(',');
  console.log(aliasIds);

  const url = `${process.env.NEXT_PUBLIC_LINE_SERVER}/alias/`

  Promise.all(aliasIds.map((richMenuAliasId) => {
    fetch(url + richMenuAliasId, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_LINE_ACCESSTOKEN}`,
      },
      cache: 'no-store',
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('エラーです')
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return 'Promiseに成功しました。'
    })
    .catch((error) => {
      console.error('Error', error);
      return 'Promiseに失敗しました。';
    })
  }))
}

