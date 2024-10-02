import random


while True:
    aleatorio = random.randrange(0,3)
    seleccionpc = ""
    print("1 : piedra")
    print("2: papel")
    print("2: tijeras")
    opcion = int(input("selecciona tu opcion"))

    if opcion == 1:
        seleccionusuario = "piedra"
    elif opcion == 2:
        seleccionusuario = "papel"
    elif opcion == 3:
        seleccionusuario = "tijeras"
    print ("elegiste", seleccionusuario)

    if aleatorio == 0:
        seleccionpc = "piedra"
    elif aleatorio == 1:
        seleccionpc = "papel"
    elif aleatorio == 2:
        seleccionpc = "tijeras"
    print("la pc seleccion", seleccionpc)
    print("...")
    if seleccionpc == "piedra" and seleccionusuario == "papel": 
        print("ganaste, papel envuelve a piedra")
    elif seleccionpc == "papel" and seleccionusuario == "tijeras":
        print("ganaste, tijeras corta a papel")
    elif seleccionpc == "tijeras" and seleccionusuario == "piedra":
        print("ganaste, piedra rompe a tijeras")
    elif seleccionpc == seleccionusuario:
        print ("empate")

    play_again = input ("¿te gustaria volver a jugar? (s/n):")
    if play_again.lower () != "s":
        break