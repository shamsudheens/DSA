#include <stdio.h>

int main() {
    int n,elem,pos;
    printf("Enter the size of the array :");
    scanf("%d",&n);
    int a[n];
    for(int i = 0; i < n ; i++)
    {
        printf("Enter the %dth element : ",i+1);
        scanf("%d",&a[i]);
    }
    printf("Array is : ");
    for(int i = 0 ; i < n; i++)
    {
        printf("%d ",a[i]);
    }
    printf("\nEnter the element you want to insert :");
    scanf("%d",&elem);
    printf("Enter the position you want to insert :");
    scanf("%d",&pos);
    for(int i = n ; i >=pos-1 ; i--)
    {
        a[i] = a[i-1]; 
    }
    a[pos-1]=elem;
    n++;
    printf("Array after insertion is : ");
    for(int i = 0 ; i < n; i++)
    {
        printf("%d ",a[i]);
    }
}