import {useState} from 'react';

export interface ContentNavigationDataType {
  icon: string;
  text: string;
}

export interface SongListType {
  cover: string;
  songName: string;
  singer: string;
}

const useAction = () => {
  const [contentNavigationData, setContentNavigationData] = useState<
    ContentNavigationDataType[]
  >([
    {
      icon: '\ue6c8',
      text: '推荐电台',
    },
    {
      icon: '\ue6c8',
      text: '推荐电台',
    },
    {
      icon: '\ue6c8',
      text: '推荐电台',
    },
    {
      icon: '\ue6c8',
      text: '推荐电台',
    },
  ]);

  const [songList, setSongList] = useState<SongListType[][]>([
    [
      {
        cover:
          'https://img.alicdn.com/imgextra/i1/O1CN01EI93PS1xWbnJ87dXX_!!6000000006451-2-tps-150-150.png',
        songName: '杰哥',
        singer: '1',
      },
      {
        cover:
          'https://img.alicdn.com/imgextra/i1/O1CN01EI93PS1xWbnJ87dXX_!!6000000006451-2-tps-150-150.png',
        songName: '杰哥',
        singer: '2',
      },
      {
        cover:
          'https://img.alicdn.com/imgextra/i1/O1CN01EI93PS1xWbnJ87dXX_!!6000000006451-2-tps-150-150.png',
        songName: '杰哥',
        singer: '3',
      },
    ],
    [
      {
        cover:
          'https://img.alicdn.com/imgextra/i1/O1CN01EI93PS1xWbnJ87dXX_!!6000000006451-2-tps-150-150.png',
        songName: '杰哥',
        singer: '4',
      },
      {
        cover:
          'https://img.alicdn.com/imgextra/i1/O1CN01EI93PS1xWbnJ87dXX_!!6000000006451-2-tps-150-150.png',
        songName: '杰哥',
        singer: '5',
      },
      {
        cover:
          'https://img.alicdn.com/imgextra/i1/O1CN01EI93PS1xWbnJ87dXX_!!6000000006451-2-tps-150-150.png',
        songName: '杰哥',
        singer: '6',
      },
    ],
    [
      {
        cover:
          'https://img.alicdn.com/imgextra/i1/O1CN01EI93PS1xWbnJ87dXX_!!6000000006451-2-tps-150-150.png',
        songName: '杰哥',
        singer: '7',
      },
      {
        cover:
          'https://img.alicdn.com/imgextra/i1/O1CN01EI93PS1xWbnJ87dXX_!!6000000006451-2-tps-150-150.png',
        songName: '杰哥',
        singer: '8',
      },
      {
        cover:
          'https://img.alicdn.com/imgextra/i1/O1CN01EI93PS1xWbnJ87dXX_!!6000000006451-2-tps-150-150.png',
        songName: '杰哥',
        singer: '9',
      },
    ],
  ]);

  const [songSheetList, setSongSheetList] = useState<SongListType[]>([
    {
      cover:
        'https://img.alicdn.com/imgextra/i1/O1CN01EI93PS1xWbnJ87dXX_!!6000000006451-2-tps-150-150.png',
      songName: '杰哥',
      singer: '1',
    },
    {
      cover:
        'https://img.alicdn.com/imgextra/i1/O1CN01EI93PS1xWbnJ87dXX_!!6000000006451-2-tps-150-150.png',
      songName: '杰哥',
      singer: '2',
    },
    {
      cover:
        'https://img.alicdn.com/imgextra/i1/O1CN01EI93PS1xWbnJ87dXX_!!6000000006451-2-tps-150-150.png',
      songName: '杰哥',
      singer: '3',
    },
    {
      cover:
        'https://img.alicdn.com/imgextra/i1/O1CN01EI93PS1xWbnJ87dXX_!!6000000006451-2-tps-150-150.png',
      songName: '杰哥',
      singer: '4',
    },
    {
      cover:
        'https://img.alicdn.com/imgextra/i1/O1CN01EI93PS1xWbnJ87dXX_!!6000000006451-2-tps-150-150.png',
      songName: '杰哥',
      singer: '5',
    },
    {
      cover:
        'https://img.alicdn.com/imgextra/i1/O1CN01EI93PS1xWbnJ87dXX_!!6000000006451-2-tps-150-150.png',
      songName: '杰哥',
      singer: '6',
    },
  ]);
  const options = {
    method: 'post',
    form: {
      params:
        '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',
      encSecKey:
        '718a54da4bff4092ebbd294658a0d1fce4fd9c02605242a8c9de0bc6ecafacbfcf4991ca59b80e7fe47965cdeec50a4de2c52d9d5f45ecd1722f9b180773aa2d793ce275c20f62faa7f5dc86fdff0ffea8ce481b1e32c51bd8444bd43eb69385b41dd880e982e5bd3ff25c81fefba42ad82f7d790227aea2c60ae25c5c2ca0c2',
    },
  };
  // fetchData(
  //   'https://music.163.com/weapi/v3/song/detail',
  //   options.method,
  //   options,
  //   (err, resp, body) => {
  //     console.log(err, resp, body);
  //   },
  // );

  return {contentNavigationData, songList, songSheetList};
};

export default useAction;
