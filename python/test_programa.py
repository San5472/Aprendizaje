from app import promedio

def test_promedio_ok():
    prom = promedio (2,2,2)
    assert prom == 2


def test_promdio_none():
    prom = promedio(50,60,70)
    assert prom is None    

