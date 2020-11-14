def TowerOfHanoi(n , fromT, toT, aux): 
    if n == 1: 
        print("Move disk 1 from tower",fromT,"to tower",toT )
        return
    TowerOfHanoi(n-1, fromT, aux, toT) 
    print("Move disk",n,"from tower",fromT,"to tower",toT) 
    TowerOfHanoi(n-1, aux, toT, fromT)
     
n = input("Number of disks in your hanoi tower: ")
TowerOfHanoi(int(n), 'A', 'C', 'B')  

