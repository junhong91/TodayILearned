#include <stdio.h>
#include <stdlib.h> 

int arr[] = {12, 9, 8, 7, 6, 6};

void swap(int arr[], int l , int r) {
    int tmp = arr[l];
    arr[l] = arr[r];
    arr[r] = tmp;
}

void quickSort(int arr[], int n) {
    if (n <= 1) {
        // Nothing to sort!
        return;
    }

    // Move pivot value to first index
    swap(arr, 0, rand() % n);

    int last = 0;
    // last: The last index which is smaller or equal to pivot value
    // last + 1: The first index bigger than pivot value
    for(int i = 1; i < n; i++) {
        if(arr[i] < arr[0]) {
            swap(arr, ++last, i);
        }
    }
    swap(arr, last, 0);
    // IMPORTANT!!!
    // Why quickSort(arr, last -1); doesn't work?
    quickSort(arr, last);
    quickSort(arr + last + 1, n - last - 1);
}

int main() {
    quickSort(arr, 6);
    for(int i = 0; i < 6; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
    return 0;
}