real = float(input('Quanto de dinheiro tem na carteira? R$ '))
dolar = real / 5.26
print('Com R${:.2f} você pode comprar US${:.2f}' .format(real, dolar))


# {:.2f} acrescentar duas casas decimais.