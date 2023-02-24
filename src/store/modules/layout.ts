import router from '@/router';
import pages from '@/router/pages';
import { treeFilter } from '@/utils/treeFilter';

export interface State {
  menuList: any[];
  collapsed: boolean;
  selectedKeys: string[];
  tabsList: any[];
  [key: string]: any;
  openKeys: any[];
  tabsShow: boolean
}
export default {
  state: {
    collapsed: false,
    selectedKeys: ["/home"],
    menuList: treeFilter(pages,
      (item: any) => {
        return item.meta.isMenu;
      },
      { text: "children" }),
    tabsList: [],
  },
  mutations: {
    setCollapsed(state: State, data: boolean) {
      state.collapsed = data;
    },
    setMenuList(state: State, data: any[]) {
      state.menuList = data;
    },
    setSelectedKeys(state: State, data: any) {
      state.selectedKeys = [data]
      setTabsList(state, data);
      deepOpenKeys(state, pages, data);
    },
    removeMenuList(state: State, data: any) {
      if (state.tabsList.length > 1) {
        let newArr = state.tabsList.filter((item: any) => item.path !== data);
        state.selectedKeys = [newArr[newArr.length - 1].path];
        router.push(newArr[newArr.length - 1].path);
        state.tabsList = newArr;
      }
    },
  },
  getters: {
    collapsed: (state: State) => {
      return state.collapsed;
    },
    getMenuList(state: State) {
      return state.menuList;
    },
    getSelectedKeys(state: State) {
      return state.selectedKeys;
    },
    getTabsList(state: State) {
      return state.tabsList;
    },
    getOpenKeys(state: State) {
      return state.openKeys;
    },
    getTabsShow(state: State) {
      return state.tabsShow
    }
  },

};

function setTabsList(state: State, data: string) {
  const arr = state.tabsList;
  let list = deepList(pages, data);
  arr.push(...list);
  const newArr = Array.from(new Set(arr));
  state.tabsList = newArr;
}

function deepList(arr: any[], key: string): any[] {
  let lists: any = arr
    .map((item: any) => {
      if (item.children && item.children.length) {
        return item.children;
      } else {
        return item;
      }
    })
    .flat()
  return lists.filter((item: any) => {
    return key === item.path;
  });
}

function deepOpenKeys(state: State, arr: any[], key: string) {
  let keys: string[] = [];
  function deep(arr: any[]) {
    arr.forEach((item: any) => {
      keys.push(item.path);
      if (item.children && item.children.length) {
        deep(item.children);
      }
    });
  }
  let list = treeFilter(
    arr,
    (item: any) => {
      return key === item.path;
    },
    { text: "children" }
  );
  deep(list);
  state.openKeys = keys;
}
