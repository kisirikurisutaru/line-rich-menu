export async function DELETE(req) {

  const requestUrl = req.url;
  const requestUrlParm = requestUrl.substr(requestUrl.indexOf('?') + 1)
  const richMenuIds = requestUrlParm.split(',');
  console.log(richMenuIds);

  const url = `${process.env.NEXT_PUBLIC_LINE_SERVER}/`

  Promise.all(richMenuIds.map((richMenuId) => {
    fetch(url + richMenuId, {
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

// Error: No response is returned from route handler 'C:\Users\Public\Documents\mywork\005_line_rich_menu\linerichmenu\src\app\api\DeleteRichMenu\route.ts'. Ensure you return a `Response` or a `NextResponse` in all branches of your handler.
// at C:\Users\Public\Documents\mywork\005_line_rich_menu\linerichmenu\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:53611
// at async e_.execute (C:\Users\Public\Documents\mywork\005_line_rich_menu\linerichmenu\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:44747)
// at async e_.handle (C:\Users\Public\Documents\mywork\005_line_rich_menu\linerichmenu\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:54700)
// at async doRender (C:\Users\Public\Documents\mywork\005_line_rich_menu\linerichmenu\node_modules\next\dist\server\base-server.js:1377:42)
// at async cacheEntry.responseCache.get.routeKind (C:\Users\Public\Documents\mywork\005_line_rich_menu\linerichmenu\node_modules\next\dist\server\base-server.js:1599:28)

// http://localhost:3000/api/DeleteRichMenu?richmenu-95f7b98f54a30ccfb1dd9911d1dc5fc7,richmenu-615971758dd25b145f8ce231d42fdb2b,richmenu-9817a0990086546b68a9c7901a0640cb,richmenu-6d60bd0fe39d830c3f91059fe2707fb4,richmenu-520f1f0602eec037783a371779914182,richmenu-df85dc370a93c638b26bf28dc4121252,richmenu-523d7fb52b189bc40bf7b489d3c0bb84,richmenu-39c653d76959c5402b310a2da732ff60,richmenu-f8a9e7189629e486a5f448ac65adc309,richmenu-ba19c7dcff67e47ff0587e4f85770426,richmenu-2ac0fae429292b866cf0262cbd130cda,richmenu-8b677af87bdc5e6a68ec88687e8f93cf,richmenu-9f3db97c7c4a62a8e528de5a53914adc,richmenu-756b99915c5e7750d7c529f678441a20,richmenu-0d18a020b9b5daeb48ff53249b0d79c5,richmenu-fb36282230ad63d227533aa2d21c54ef,richmenu-6cd6502a8a6c90686ade9d842986d1de