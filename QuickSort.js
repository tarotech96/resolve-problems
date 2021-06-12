/**
 * QuickSort とは分割したり征服したりするアルゴリズムです
 * 貰った配列の中からPivotとしてElementを選択する
 * 時間集計量 O(n*logn)
 * QuickSortを選択した理由：
       1- HeapSortとかInsertionSortとか他のソートアルゴリズムより、時間集計量が早いですし
       2- QuickSortを実装することに対しては、ピボット値を使うことで単純にできるし、色々なピボットの選択肢があって、
          配列の最初の値とか配列の最後の値とかあるいは配列の中に所属されてるどこかの値を選べる
       3- ですから他のものと比べて、QuickSortを使うことは悪いケースを避けることができるからソートスピードが早いわけです。 
 */

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, low, high) {
  let i = low - 1,
    pivot = arr[high];

  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return i + 1;
}

const quickSort = (arr, low, high) => {
  if (low < high) {
    let pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
  return arr;
};

