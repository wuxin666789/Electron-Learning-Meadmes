import {makeAutoObservable} from 'mobx';
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
class Store {
  isSearch = false;

  searchKey = '';
  constructor() {
    makeAutoObservable(this);
  }

  setIsSearch() {
    this.isSearch = !this.isSearch;
  }

  setSearchKey(key: string) {
    this.searchKey = key;
    console.log(this.searchKey);
  }
}

export default Store;
