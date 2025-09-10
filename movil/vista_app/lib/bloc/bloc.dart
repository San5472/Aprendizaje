import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';


// Eventos de la aplicación
abstract class FormEvent{}

class GuardarFormulario extends FormEvent {
  final String cedula;
  final String nombre;

  GuardarFormulario({required this.cedula, required this.nombre}); 
  
}


// estados de la aplicación

abstract class FormularioState{}

class FormularioInitial extends FormularioState{}

class FormularioGuardando extends FormularioState{}

class FormularioGuardado extends FormularioState{
  final Map<String, dynamic> datos;
  FormularioGuardado(this.datos); 
}

class FormularioError extends FormularioState {
  final String mensaje;
  FormularioError(this.mensaje);
}

// Blocc de la aplicación

class FormBloc extends Bloc<FormEvent, FormularioState> {
  FormBloc() : super(FormularioInitial()) {
    on<GuardarFormulario>((event, emit) async {
      emit(FormularioGuardando());

      await Future.delayed(const Duration(seconds: 2));

      if (event.cedula.isEmpty || event.nombre.isEmpty) {
        emit(FormularioError("Debes de llenar todos los campos"));
      } else {
        final datos = {
          "Cedula": event.cedula,
          "Nombre": event.nombre,
        };
        emit(FormularioGuardado(datos)); 
      }
    });
  }
}