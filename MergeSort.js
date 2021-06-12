/**
 * MergeSortはQuickSortと同じような形式でソートを実施するアルゴリズムです。
 * 時間集計量 O(n*logn)
 * MergeSortを選択した理由：
    1- QuickSortと同じメリットがある
    2- 大きなデータ構成に導入される
 */

function merge(arr, low, middle, high) {
  let n1 = middle - low + 1,
    n2 = high - middle,
    L = new Array(n1),
    R = new Array(n2);

  // arr[low...n1]の各値をコピー
  for (let i = 0; i < n1; i++) {
    L[i] = arr[low + i];
  }
  // arr[middle+1...n2]の各値をコピー
  for (let j = 0; j < n2; j++) {
    R[j] = arr[middle + 1 + j];
  }

  let i = 0,
    j = 0,
    k = low;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

const mergeSort = (arr, low, high) => {
  if (low >= high) {
    return;
  }
  let middle = Math.floor(low + (high - low) / 2);
  mergeSort(arr, low, middle);
  mergeSort(arr, middle + 1, high);
  merge(arr, low, middle, high);
  return arr;
};

