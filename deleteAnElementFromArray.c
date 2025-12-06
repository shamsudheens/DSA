#include <stdio.h>

int main() {
    int n,elem,found;
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
    printf("\nEnter the element you want to delete :");
    scanf("%d",&elem);
    for(int i = 0 ; i < n ; i++)
    {
        if(a[i]==elem)
        {
            found = 1;
            for(int j=i; j < n-1 ; j++)
            {
                a[j]=a[j+1];
            }
            n--;
            break;
        }
    }
    if(found!=1)
    {
        printf("No match found");
    }
    printf("Array after deletion is : ");
    for(int i = 0 ; i < n; i++)
    {
        printf("%d ",a[i]);
    }
}