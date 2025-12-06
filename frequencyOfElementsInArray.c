#include<stdio.h>

int main()
{
    int n;
    printf("Enter the size of array: ");
    scanf("%d",&n);

    int a[n],freq[n];

    for(int i = 0 ; i < n ; i++)
    {
        printf("Enter element %d : ",i+1);
        scanf("%d",&a[i]);
        freq[i]=-1;
    }

    for(int i = 0 ; i < n ; i++)
    {
        int count = 1;
        
        if(freq[i]!=0)
        {
            for(int j=i+1;j<n;j++)
            {
                if(a[i]==a[j]){
                    count++;
                    freq[j]=0;
                }
            }
            freq[i] = count ;
        }
    }

    for(int i=0;i<n;i++){
        if(freq[i]!=0)
        {
            printf("%d occurs %d times\n",a[i],freq[i]);
        }
    }
    return 0;
}