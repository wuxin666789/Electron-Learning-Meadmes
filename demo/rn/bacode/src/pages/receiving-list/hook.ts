import {useState} from 'react';

const useAction = () => {
  const tabNar = [
    'PO Receiving List',
    'STO Receiving List',
    'Subcon Receiving List',
  ];

  enum STODATASTATUS {
    Error,
    Warning,
    Pending,
    Normal,
    Success,
  }

  const statusBg = {
    [STODATASTATUS.Error]: '#ff616f',
    [STODATASTATUS.Warning]: '#f9e061',
    [STODATASTATUS.Pending]: '#fe8b30',
    [STODATASTATUS.Normal]: '#fff',
    [STODATASTATUS.Success]: '#6bd848',
  };
  const [isActive, setIsActive] = useState<number>(0);

  const [receivingList, setReceivingList] = useState([
    {
      title: 'PO Receiving List',
      data: [
        {
          truckOrder: {
            truck: 'AGL',
            order: ['5000043145 (From1800)'],
          },
          process: 'No Sign',
          items: 26,
          difference: 10,
          time: {
            signIn: '08:21',
            start: '08:21',
            finish: '08:21',
          },
          duration: 15,
          operator: 'BRYAN.L',
          num: 3,
          status: STODATASTATUS.Error,
        },
        {
          truckOrder: {
            truck: 'AGL',
            order: ['5000043145 (From1800)'],
          },
          process: 'No Sign',
          items: 26,
          difference: 10,
          time: {
            signIn: '08:21',
            start: '08:21',
            finish: '08:21',
          },
          duration: 15,
          operator: 'BRYAN.L',
          num: 4,
          status: STODATASTATUS.Warning,
        },
        {
          truckOrder: {
            truck: 'AGL',
            order: ['5000043145 (From1800)'],
          },
          process: 'No Sign',
          items: 26,
          difference: 10,
          time: {
            signIn: '08:21',
            start: '08:21',
            finish: '08:21',
          },
          duration: 15,
          operator: 'BRYAN.L',
          num: 5,
          status: STODATASTATUS.Warning,
        },
        {
          truckOrder: {
            truck: 'AGL',
            order: ['5000043145 (From1800)'],
          },
          process: 'No Sign',
          items: 26,
          difference: 10,
          time: {
            signIn: '08:21',
            start: '08:21',
            finish: '08:21',
          },
          duration: 15,
          operator: 'BRYAN.L',
          num: 0,
          status: STODATASTATUS.Normal,
        },
        {
          truckOrder: {
            truck: 'AGL',
            order: ['5000043145 (From1800)'],
          },
          process: 'No Sign',
          items: 26,
          difference: 10,
          time: {
            signIn: '08:21',
            start: '08:21',
            finish: '08:21',
          },
          duration: 15,
          operator: 'BRYAN.L',
          num: 2,
          status: STODATASTATUS.Pending,
        },
        {
          truckOrder: {
            truck: 'AGL',
            order: ['5000043145 (From1800)'],
          },
          process: 'No Sign',
          items: 26,
          difference: 10,
          time: {
            signIn: '08:21',
            start: '08:21',
            finish: '08:21',
          },
          duration: 15,
          operator: 'BRYAN.L',
          num: 1,
          status: STODATASTATUS.Success,
        },
      ],
      num: 14,
    },
    {
      title: 'STO Receiving List',
      data: [
        {
          truckOrder: {
            truck: 'AGL',
            order: ['5000043145 (From1800)'],
          },
          process: 'No Sign',
          items: 26,
          difference: 10,
          time: {
            signIn: '08:21',
            start: '08:21',
            finish: '08:21',
          },
          duration: 15,
          operator: 'BRYAN.L',
          num: 3,
          status: STODATASTATUS.Error,
        },
        {
          truckOrder: {
            truck: 'AGL',
            order: ['5000043145 (From1800)'],
          },
          process: 'No Sign',
          items: 26,
          difference: 10,
          time: {
            signIn: '08:21',
            start: '08:21',
            finish: '08:21',
          },
          duration: 15,
          operator: 'BRYAN.L',
          num: 4,
          status: STODATASTATUS.Warning,
        },
        {
          truckOrder: {
            truck: 'AGL',
            order: ['5000043145 (From1800)'],
          },
          process: 'No Sign',
          items: 26,
          difference: 10,
          time: {
            signIn: '08:21',
            start: '08:21',
            finish: '08:21',
          },
          duration: 15,
          operator: 'BRYAN.L',
          num: 5,
          status: STODATASTATUS.Warning,
        },
        {
          truckOrder: {
            truck: 'AGL',
            order: ['5000043145 (From1800)'],
          },
          process: 'No Sign',
          items: 26,
          difference: 10,
          time: {
            signIn: '08:21',
            start: '08:21',
            finish: '08:21',
          },
          duration: 15,
          operator: 'BRYAN.L',
          num: 0,
          status: STODATASTATUS.Normal,
        },
        {
          truckOrder: {
            truck: 'AGL',
            order: ['5000043145 (From1800)'],
          },
          process: 'No Sign',
          items: 26,
          difference: 10,
          time: {
            signIn: '08:21',
            start: '08:21',
            finish: '08:21',
          },
          duration: 15,
          operator: 'BRYAN.L',
          num: 2,
          status: STODATASTATUS.Pending,
        },
        {
          truckOrder: {
            truck: 'AGL',
            order: ['5000043145 (From1800)'],
          },
          process: 'No Sign',
          items: 26,
          difference: 10,
          time: {
            signIn: '08:21',
            start: '08:21',
            finish: '08:21',
          },
          duration: 15,
          operator: 'BRYAN.L',
          num: 1,
          status: STODATASTATUS.Success,
        },
      ],
      num: 7,
    },
    {
      title: 'Subcon Receiving List',
      data: [
        {
          truckOrder: {
            truck: 'AGL',
            order: ['5000043145 (From1800)'],
          },
          process: 'No Sign',
          items: 26,
          difference: 10,
          time: {
            signIn: '08:21',
            start: '08:21',
            finish: '08:21',
          },
          duration: 15,
          operator: 'BRYAN.L',
          num: 3,
          status: STODATASTATUS.Error,
        },
        {
          truckOrder: {
            truck: 'AGL',
            order: ['5000043145 (From1800)'],
          },
          process: 'No Sign',
          items: 26,
          difference: 10,
          time: {
            signIn: '08:21',
            start: '08:21',
            finish: '08:21',
          },
          duration: 15,
          operator: 'BRYAN.L',
          num: 4,
          status: STODATASTATUS.Warning,
        },
        {
          truckOrder: {
            truck: 'AGL',
            order: ['5000043145 (From1800)'],
          },
          process: 'No Sign',
          items: 26,
          difference: 10,
          time: {
            signIn: '08:21',
            start: '08:21',
            finish: '08:21',
          },
          duration: 15,
          operator: 'BRYAN.L',
          num: 5,
          status: STODATASTATUS.Warning,
        },
        {
          truckOrder: {
            truck: 'AGL',
            order: ['5000043145 (From1800)'],
          },
          process: 'No Sign',
          items: 26,
          difference: 10,
          time: {
            signIn: '08:21',
            start: '08:21',
            finish: '08:21',
          },
          duration: 15,
          operator: 'BRYAN.L',
          num: 0,
          status: STODATASTATUS.Normal,
        },
        {
          truckOrder: {
            truck: 'AGL',
            order: ['5000043145 (From1800)'],
          },
          process: 'No Sign',
          items: 26,
          difference: 10,
          time: {
            signIn: '08:21',
            start: '08:21',
            finish: '08:21',
          },
          duration: 15,
          operator: 'BRYAN.L',
          num: 2,
          status: STODATASTATUS.Pending,
        },
        {
          truckOrder: {
            truck: 'AGL',
            order: ['5000043145 (From1800)'],
          },
          process: 'No Sign',
          items: 26,
          difference: 10,
          time: {
            signIn: '08:21',
            start: '08:21',
            finish: '08:21',
          },
          duration: 15,
          operator: 'BRYAN.L',
          num: 1,
          status: STODATASTATUS.Success,
        },
      ],
      num: 3,
    },
  ]);

  const [isSearch, setIsSearch] = useState(false);

  return {receivingList, tabNar, statusBg, isActive, isSearch, setIsActive};
};

export default useAction;
