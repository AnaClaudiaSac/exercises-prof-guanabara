5+3*2 == 11

5**2 == 25

5**3 == 125

19//2 == 9

19/2 == 9.5

18%2 == 0

122%3 == 2

4**3 == 64

pow(4,3) == 64

81**(1/2) ==9.0

25**(1/2) == 5.0

127**(1/3) == 5.026525695313479


# nome=input('Qual é o seu nome? ')
# print('Prazer em te cochecer {}!'.format(nome))

nome=input('Qual é o seu nome? ')
print('Prazer em te cochecer {:=^20}!'.format(nome))

 #========Ana=========!

##Entre Chaves podemos por variações de formatação, multiplicar, somar a esquerda a direita ao centro...

# n1 = int(input('Um valor'))
# n2 = int(input('Outro valor: '))
# print('A soma vale {}'.format(n1+n2))
#A soma vale ...
n1 = int(input('Um valor: '))
n2 = int(input('Outro valor: '))
s = n1 + n2
m = n1 * n2
d = n1 / n2 
di = n1 // n2
e = n1 ** n2
print('A soma é {}, o produto é {} e a divisão é {}'.format(s, m, d))
print('Divisão inteira {} e potência {}'.format(di, e)) #end='')

#Resultado:
# Um valor: 4
# Outro valor: 3
# A soma é 7, o produto é 12 e a divisão é 1.3333333333333333
# Divisão inteira 1 e potência 64


#================================================================

# da para modiicar as casas decimais ex: divisão 1.3333333
#entre chaves {:.3f} 1.333

# Para fazer na mesma linha o print é dentro do format #end='')

# e \n para quebra a linha.
# Ex: print('Divisão inteira {},\n e potência {}'.format(di, e)) 
