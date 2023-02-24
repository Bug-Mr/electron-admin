// 对象深拷贝
export function objDeepCopy(obj: any) {
  return JSON.parse(JSON.stringify(obj));
}
// 我需要一个会改变原数组的过滤
// eslint-disable-next-line no-unused-vars
function arrayFilert(list: any[], fn: Function, map: any) {
  for (let i = 0; i < list.length; ) {
    if (!fn(list[i], i)) {
      list.splice(i, 1);
    } else {
      i++;
    }
  }
  return list;
}
/**
 * 用来过滤数组开始的树结构数据，采用的剔除不相干枝干的逻辑，所以会改变原数组，使用时请传入数组的副本
 * @param {Array} treeList 要过滤的树
 * @param {Function} fn 过滤规则
 */
function deepFilter(treeList: any[], fn: Function, map: any) {
  return arrayFilert(
    treeList,
    (item: any) => {
      if (item[map["text"]] && item[map["text"]].length) {
        deepFilter(item[map["text"]], fn, map);
        if (item[map["text"]].length) {
          return true;
        } else {
          // 之前的逻辑是它只有在属于目录的时候才会有listAreas，所以不需要考虑本身匹配的情况
          // 此系统中菜单下还可能会有菜单，所以要处理他自己就能匹配的情况
          return fn(item);
        }
      } else {
        return fn(item);
      }
    },
    map
  );
}

/** deepFilter的包装，使方法不改变传入的数据  */
export function treeFilter(
  treeList: any[],
  fn: Function,
  map = { text: "listAreas" }
) {
  return deepFilter(objDeepCopy(treeList), fn, map);
}
