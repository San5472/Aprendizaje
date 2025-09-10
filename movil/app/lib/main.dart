import 'package:flutter/material.dart';
import 'package:flutter/semantics.dart';
import 'package:flutter/services.dart';
// Widgets de las personas
import 'widgets/persona/loading_persona.dart';
import 'widgets/persona/success_persona.dart';
import 'widgets/persona/error_persona.dart';

// widgets de las tareas
import 'widgets/tarea/loading_tarea.dart';
import 'widgets/tarea/success_tarea.dart';
import 'widgets/tarea/error_tarea.dart';

void main() {
  runApp(const MyApp());
}

enum personaState {
  loading,
  success,
  error
}

enum tareaState {
  loading,
  success,
  error
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}



class _MyAppState extends State<MyApp> {

  personaState _personaState = personaState.loading;
  tareaState _tareaState = tareaState.loading;

  @override 
    // Carga de los datos de la persona en segundos.
    void initState() {
      super.initState();
 
      Future.delayed(const Duration(seconds: 3), () {
      setState((){
        _personaState = personaState.success; 
      });
    });


    // carga de las tareas de las personas en segundos.

    Future.delayed(const Duration(seconds: 3), (){
      setState((){
        _tareaState = tareaState.success;
      });
    });
}

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'App flutter',
      home: Scaffold(
        appBar: AppBar(title: const Text("App con los diferentes estados")),
        body: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Contenedor de persona
              _buildPersona(),

              const SizedBox(height: 20),

              // Contenedor de las tareas
              const Text("Tareas pendientes",  
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)), 
              _buildTarea(),
            ],
          ),
        ),  
        floatingActionButton: FloatingActionButton(
          onPressed: _cambiarEstados,
          child: const Icon(Icons.refresh),
        ),
      ),
    );
  }
  
  Widget _buildPersona() {
    switch (_personaState) {
      case personaState.loading:
        return const LoadingPersona();
      case personaState.success:
        return const SuccessPersona();
      case personaState.error:
        return const ErrorPersona();
    }
  }

  Widget _buildTarea() {
    switch (_tareaState) {
      case tareaState.loading:
        return const LoadingTarea();
      case tareaState.success:
        return const SuccessTarea();
      case tareaState.error:
        return const ErrorTarea();
    }
  }

  void _cambiarEstados() {
    setState(() {
      // ciclo de ejemplo de lo estados
      if (_personaState == personaState.loading){
        _personaState = personaState.success;
      } else if (_personaState == personaState.success) {
        _personaState = personaState.error;
      } else {
        _personaState = personaState.success;
      }

      if (_tareaState == tareaState.loading) {
        _tareaState = tareaState.success;
      } else if (_tareaState == tareaState.success) {
        _tareaState = tareaState.error;
      } else {
        _tareaState = tareaState.success;
      }
    });
  }
}