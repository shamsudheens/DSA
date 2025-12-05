#include < stdio.h >

    int isPrime(int n)
{
    if (n <= 1) {
        return 0;
    }
    else {
        for (int i = 2; i <= n / 2; ++i)
        {
            if (n % i == 0) {
                return 0;
            }
        }
        return 1;
    }
}

int main() {
    int n, a[50];
    printf("Enter the size of array : ");
    scanf("%d",& n);
    for (int i = 0; i < n; i++)
    {
        printf("Enter the %dth element : ", i + 1);
        scanf("%d",& a[i]);
    }
    printf("Array is: ");
    for (int i = 0; i < n ; i++)
    {
        printf("%d ", a[i]);
    }
    printf("\n");
    int pos, prime = 0, odd = 0;
    for (int i = 0; i < n ; i++)
    {
        if (prime == 0) {
            if (isPrime(a[i])) {
                pos = i;
                prime++;
            }
        }
        else {
            if (odd <= 1) {
                if (a[i] % 2 != 0) {
                    a[i] = -1;
                    odd++;
                }

            }
        }
    }
    for (int i = 0; i < n; i++)
    {
        if (a[i] == -1) {
            continue;
        }
        else {
            printf("%d ", a[i]);
        }
    }
    return 0;
}