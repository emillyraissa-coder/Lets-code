real=float(input("digite o valor? "))
dolar=float(input("digite a cotação do dolar atualmente: "))
euro=float(input("digite a cotação do euro atualmente: "))

resultado= real * dolar
print(f"o valor do dolar convertido pro real é:{resultado:.2f}")

resultado2= real * euro
print(f"o valor do euro convertido pro real é:{resultado2:.2f}")
