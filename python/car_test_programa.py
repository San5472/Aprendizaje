from cars import Cark

def test_car_ok():
    c = Cark ("235", "azul")
    assert isinstance(c,Cark)

def test_car_none():
    a = Cark ("san5451", "rojo")
    b = ""
    assert isinstance is None (a, Cark)

def test_car_nuevocarro_ok():
    a = Cark.nuevocarro
    assert a == ('El carro ha sido entregado a su nuevo dueño')