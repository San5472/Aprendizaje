import 'package:flutter/material.dart';
import 'widgets/loading.dart';
import 'widgets/success.dart';
import 'widgets/error.dart';

enum HomeState {
  loading,
  success, 
  error
}

class Home extends StatefulWidget{
  final Map<String, dynamic> datos;
  const Home({super.key, required this.datos});

  @override
  State<Home> createState() => _HomeState(); 

}

class _HomeState extends State<Home> {
  HomeState _homeState = HomeState.loading;

   @override
  void initState() {
    super.initState();

    Future.delayed(const Duration(seconds: 3), () {
      setState(() {
        if (widget.datos['Cedula'] == "" || widget.datos['Nombre'] == "") {
          _homeState = HomeState.error; // en caso de que haga falta más datos muestra el eror
        } else {
          _homeState = HomeState.success;
        }
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(  
      appBar: AppBar(title: const Text("Datos de la persona")),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: _homeState == HomeState.loading
            ? const Loading()
            : _homeState == HomeState.success
            ? Success(datos: widget.datos)
            : const Error(mensaje: "Error al guardar los datos"),
        ),
      ),
    );
  }
}