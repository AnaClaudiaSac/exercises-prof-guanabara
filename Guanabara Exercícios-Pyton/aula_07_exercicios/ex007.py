n1= int(input('A primeira nota do aluno: '))
n2=int(input('A segunda nota do aluno'))

# se a nota for 5.5 usar float no lugat de int.

s1 = n1 + n2
m  = s1 / 2
#ou m=(n1+n2) /2 == ordem de precedência

print('A primeira do nota do aluno é: {} A segunda nota do aluno é: {} A média do aluno é: {}' .format(n1, n2, m ))