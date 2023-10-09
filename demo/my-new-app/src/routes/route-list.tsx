import LocalAndDownload from "../pages/local-and-download";
import MusicHall from "../pages/music-hall";
import MV from "../pages/mv";
import MyLove from "../pages/my-love";
import PersonalizedRadioStation from "../pages/personalized-radio-station";
import PlayHistory from "../pages/play-history";
import { ReactElement } from "react";

export interface IRouteItem {
  key: string;
  path: string;
  name?: string;
  element: ReactElement;
  children?: IRouteItem[];
}

export const routes: IRouteItem[] = [
  {
    key: "onLine",
    path: "/onLine",
    name: "在线音乐",
    element: <></>,
    children: [
      {
        key: "personalizedRadioStation",
        name: "个性电台",
        path: "onLine/personalizedRadioStation",
        element: <PersonalizedRadioStation />,
      },

      {
        key: "musicHall",
        name: "音乐馆",
        path: "onLine/musicHall",
        element: <MusicHall />,
      },
      {
        key: "mv",
        name: "mv",
        path: "onLine/mv",
        element: <MV />,
      },
    ],
  },
  {
    key: "my",
    path: "/my",
    element: <></>,
    children: [
      {
        key: "myLove",
        path: "my/myLove",
        name: "我喜欢",
        element: <MyLove />,
      },
      {
        key: "localAndDownload",
        name: "本地合下载",
        path: "my/localAndDownload",
        element: <LocalAndDownload />,
      },
      {
        key: "playHistory",
        name: "播放历史",
        path: "my/playHistory",
        element: <PlayHistory />,
      },
    ],
  },
];
