# co = float(input('Comprimento do cateto oposto: '))
# ca = float(input('Comprimento do cateto adjacente: '))
# hi = (co**2 + ca**2) **(1/2)
# print('a hipotenusa vai medir {:.2f}'. format(hi))
# #a hipotenusa vai medir 7.21

import math
co = float(input('Comprimento do cateto oposto: '))
ca = float(input('Comprimento do cateto adjacente: '))
hi = math.hypot(co, ca)
print('A hipotenusa vai medir {:.2f}'.format(hi))

#Exemplo:

#Comprimento do cateto oposto: 4
# Comprimento do cateto adjacente: 2
# A hipotenusa vai medir 4.47